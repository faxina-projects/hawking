type ElasticsearchConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
};

export const elasticsearchConfig: ElasticsearchConfig = {
  host: process.env.ELASTICSEARCH_HOST as string,
  port: Number(process.env.ELASTICSEARCH_PORT),
  username: process.env.ELASTICSEARCH_USERNAME as string,
  password: process.env.ELASTICSEARCH_PASSWORD as string,
};
