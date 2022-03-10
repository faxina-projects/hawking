import { Elasticsearch } from './elasticsearch';

class ElasticsearchFactory {
  private static instance: Elasticsearch;

  private constructor() {}

  public static create = (): Elasticsearch => {
    if (!ElasticsearchFactory.instance) {
      ElasticsearchFactory.instance = new Elasticsearch();
    }

    return ElasticsearchFactory.instance;
  };
}

export { ElasticsearchFactory };
