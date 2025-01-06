export class CustomError extends Error {
  context: string;
  friendlyMessage: string;

  /**
   * @param message - Internal error message for debugging/logging.
   * @param context - The context or location where the error occurred.
   * @param friendlyMessage - User-facing message (default: "Oops, something went wrong.").
   */
  constructor(message: string, context: string, friendlyMessage: string = 'Oops, something went wrong.') {
    super(message);
    this.name = 'CustomError';
    this.context = context;
    this.friendlyMessage = friendlyMessage;

    // Ensure the prototype chain is correct
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends CustomError {
  constructor(context: string) {
    super('Resource not found', context, 'The requested resource could not be found.');
    this.name = 'NotFoundError';
  }
}
