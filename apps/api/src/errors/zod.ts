import { APIError } from './index';

export class InternalDocumentParseError extends APIError {
  constructor(message: string) {
    super(message, 500);
  }
}
