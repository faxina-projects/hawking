import { HttpMessages, HttpStatus } from '../configs';
import { BaseException } from './base.exception';

class InternalServerException extends BaseException {
  constructor(reason?: string) {
    super(
      HttpStatus.INTERNAL_SERVER_ERROR,
      HttpMessages.INTERNAL_SERVER_ERROR,
      reason,
    );
  }
}

export { InternalServerException };
