import { Location } from './location';

interface ISearchService {
  search(text: string): Promise<Location[]>;
}

export { ISearchService };
