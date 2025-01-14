import type { TBaseErrorResponse } from '@workspace/service-contracts';
import type { FastifyError, FastifyInstance, FastifyRequest } from 'fastify';
import { hasZodFastifySchemaValidationErrors, isResponseSerializationError } from 'fastify-type-provider-zod';

import { APIError } from '../errors';

export const globalErrorHandler = (fastify: FastifyInstance, error: FastifyError, request: FastifyRequest) => {
  let statusCode = error.statusCode || 500;
  const traceId = request.log.traceId || 'unknown-trace-id';

  const message: TBaseErrorResponse = {
    error: error.message || 'Internal Server Error',
    traceId,
    details: undefined,
  };

  let internalErrorMessage = `Unhandled Error: ${JSON.stringify(error)}`;

  try {
    if (hasZodFastifySchemaValidationErrors(error)) {
      statusCode = 400;
      message.error = "Request doesn't match the schema";
      message.details = {
        issues: error.validation,
        method: request.method,
        url: request.url,
      };
      internalErrorMessage = JSON.stringify(message.details);
    } else if (isResponseSerializationError(error)) {
      statusCode = 500;
      message.error = "Response doesn't match the schema";
      message.details = {
        issues: error.validation,
        method: request.method,
        url: request.url,
      };
      internalErrorMessage = JSON.stringify(message.details);
    } else if (error instanceof APIError) {
      statusCode = error.code;
      message.error = error.friendlyResponse!.message || 'An error occurred';
      message.details = error.friendlyResponse || {};
      internalErrorMessage = JSON.stringify({ message: error.message, metadata: error.metadata });
    }
  } catch (err) {
    message.error = 'Unable to Process Error';
    internalErrorMessage = `Error in Global Error Handler: ${JSON.stringify(err)}`;
  }

  // Ensure a generic message for internal server errors
  if (statusCode >= 500) {
    message.error = 'Internal Server Error';
  }

  // Log the error with additional context
  fastify.log.error({
    context: 'GlobalErrorHandler',
    message: internalErrorMessage,
    error,
    traceId,
  });

  return { statusCode, message };
};
