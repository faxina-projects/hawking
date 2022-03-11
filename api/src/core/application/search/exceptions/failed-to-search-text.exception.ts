import { InternalServerException } from '@/core/shared/http/exceptions';

class FailedToSearchTextException extends InternalServerException {
  constructor() {
    super('Failed to search text');
  }
}

export { FailedToSearchTextException };
