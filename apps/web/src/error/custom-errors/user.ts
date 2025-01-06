import { CustomError } from './base';

export class UserInputError extends CustomError {
  constructor(context: string, friendlyMessage: string) {
    super('User input validation failed', context, friendlyMessage);
    this.name = 'UserInputError';
  }
}
