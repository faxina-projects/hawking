type ElasticsearchError = {
  status: string;
  error: string;
  operation: string;
  document: string;
};

export { ElasticsearchError };
