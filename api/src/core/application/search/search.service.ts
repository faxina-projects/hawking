import { FailedToSearchTextException } from './exceptions';
import { Location } from './location';
import { ISearchService } from './search.service.interface';
import { SearchEngine } from './search-engine.interface';

class SearchService implements ISearchService {
  constructor(private readonly searchEngine: SearchEngine) {}

  public search = async (text: string): Promise<Location[]> => {
    try {
      const data = await this.searchEngine.search(
        ['city', 'state', 'id'],
        text as string,
      );

      return data;
    } catch (error) {
      throw new FailedToSearchTextException();
    }
  };
}

export { SearchService };
