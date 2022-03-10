import { Client, SearchResponse } from 'elasticsearch';

import { SearchEngine } from '@/core/application/search';
import { Location } from '@/core/application/search/location';

import { elasticsearchConfig } from './elasticsearch.config';

class Elasticsearch implements SearchEngine {
  private client: Client;

  constructor() {
    this.client = new Client({
      host: `${elasticsearchConfig.host}:${elasticsearchConfig.port}`,
      log: 'trace',
      apiVersion: '7.2', // use the same version of your Elasticsearch instance
    });
  }

  public connect = (): Client => {
    return this.client;
  };

  private parseElasticResponse = (
    elasticResponse: SearchResponse<Location>,
  ): Location[] => {
    const responseHits = elasticResponse.hits.hits;
    const result = responseHits.map((hit) => hit._source);
    return result;
  };

  search = async (fields: string[], text: string): Promise<Location[]> => {
    const response = await this.client.search<Location>({
      index: 'zips',
      from: 0,
      body: {
        query: {
          multi_match: {
            query: text,
            lenient: true,
            fields,
          },
        },
      },
      ignore: [404],
      maxRetries: 3,
    });

    console.log('HEY');
    console.log(response);
    console.log(response.hits);
    return this.parseElasticResponse(response);
  };
}

export { Elasticsearch };
