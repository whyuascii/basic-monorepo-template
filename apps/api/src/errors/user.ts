import { APIError } from './base';

export class DataFetchError extends APIError {
  constructor(message: string) {
    super(message, 500);
  }
}
