/**
 * Base API Error
 */
type FriendlyResponseType = {
  message: string;
  [key: string]: unknown;
};

export class APIError extends Error {
  public code: number;
  public friendlyResponse?: FriendlyResponseType;
  public metadata?: Record<string, unknown>;

  constructor(
    message: string,
    code: number,
    friendlyResponse?: FriendlyResponseType,
    metadata?: Record<string, unknown>,
  ) {
    super(message);
    this.code = code;
    this.name = this.constructor.name;
    this.friendlyResponse = friendlyResponse;
    this.metadata = metadata;

    // Maintain proper stack trace for where the error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

/**
 * Not Found Error (404)
 */
export class NotFoundError extends APIError {
  constructor(message: string, metadata?: Record<string, unknown>) {
    super(message, 404, { message: 'Resource not found' }, metadata);
  }
}

/**
 * Validation Error (400)
 */
export class ValidationError extends APIError {
  constructor(message: string, details?: Record<string, unknown>, metadata?: Record<string, unknown>) {
    super(message, 400, { message: 'Validation failed', details }, metadata);
  }
}

/**
 * Unauthorized Error (401)
 */
export class UnauthorizedError extends APIError {
  constructor(message: string, metadata?: Record<string, unknown>) {
    super(message, 401, { message: 'Unauthorized' }, metadata);
  }
}

/**
 * Forbidden Error (403)
 */
export class ForbiddenError extends APIError {
  constructor(message: string, metadata?: Record<string, unknown>) {
    super(message, 403, { message: 'Forbidden' }, metadata);
  }
}

/**
 * Internal Server Error (500)
 */
export class InternalServerError extends APIError {
  constructor(message: string, metadata?: Record<string, unknown>) {
    super(message, 500, { message: 'Internal server error' }, metadata);
  }
}
