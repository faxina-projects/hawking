import { SearchService } from '@/core/application/search/search.service';
import { ISearchService } from '@/core/application/search/search.service.interface';
import { ElasticsearchFactory } from '@/driven/elasticsearch';

class SearchServiceFactory {
  private static instance: ISearchService;

  private constructor() {}

  public static create = (): ISearchService => {
    if (!SearchServiceFactory.instance) {
      SearchServiceFactory.instance = new SearchService(
        ElasticsearchFactory.create(),
      );
    }

    return SearchServiceFactory.instance;
  };
}

export { SearchServiceFactory };
