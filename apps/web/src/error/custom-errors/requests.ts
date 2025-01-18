import { CustomError } from './base';

export class RequestError extends CustomError {
  /**
   * @param message - Internal error message for debugging/logging.
   * @param context - The context or location where the error occurred.
   * @param friendlyMessage - User-facing message (default: "Oops, something went wrong.").
   */
  constructor(message: string, context: string, friendlyMessage: string = 'Oops, something went wrong.') {
    super(message, context, friendlyMessage);
    this.name = 'RequestError';
    this.context = context;
    this.friendlyMessage = friendlyMessage;

    // Ensure the prototype chain is correct
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
