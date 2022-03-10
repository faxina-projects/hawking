import { Location } from './location';

type Fields = string[];

interface SearchEngine {
  search(fields: Fields, text: string): Promise<Location[]>;
}

export { SearchEngine };
