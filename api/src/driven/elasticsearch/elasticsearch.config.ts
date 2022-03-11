export const elasticsearchConfig: any = {
  host: process.env.ELASTICSEARCH_HOST,
  port: Number(process.env.ELASTICSEARCH_PORT),
  username: process.env.ELASTICSEARCH_USERNAME,
  password: process.env.ELASTICSEARCH_PASSWORD,
};
