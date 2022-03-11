import { BaseController } from '@/driver/controller';
import { SearchController } from '@/driver/controller/search.controller';

import { SearchServiceFactory } from './search.service.factory';

class SearchControllerFactory {
  private static instance: BaseController;

  private constructor() {}

  public static create = (): BaseController => {
    if (!SearchControllerFactory.instance) {
      SearchControllerFactory.instance = new SearchController(
        SearchServiceFactory.create(),
      );
    }

    return SearchControllerFactory.instance;
  };
}

export { SearchControllerFactory };
