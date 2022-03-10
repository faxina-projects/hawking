/* eslint-disable @typescript-eslint/no-var-requires */
var dotenv = require('dotenv');
dotenv.config();
var elasticsearch = require('elasticsearch');
var fs = require('fs');

async function run() {
  var client = new elasticsearch.Client({
    host: `${process.env.ELASTICSEARCH_HOST}:${process.env.ELASTICSEARCH_PORT}`,
    log: 'trace',
    apiVersion: '7.2', // use the same version of your Elasticsearch instance
  });

  await client.indices.create({
    index: 'zips',
    body: {
      mappings: {
        properties: {
          id: { type: 'keyword' },
          city: { type: 'keyword' },
          state: { type: 'keyword' },
          pop: { type: 'integer' },
        },
      },
    },
    ignore: [400],
  });
  const jsonContent = fs.readFileSync(`${__dirname}/data/data.json`, 'utf8');
  const dataset = JSON.parse(jsonContent).dataset;
  const body = dataset.flatMap((doc) => [
    { index: { _index: 'zips' } },
    {
      state: doc.state,
      city: doc.city,
      id: doc._id,
      pop: doc.pop,
      loc: doc.loc,
    },
  ]);
  const bulkResponse = await client.bulk({ refresh: true, body });
  if (bulkResponse.errors) {
    const erroredDocuments = [];
    // The items array has the same order of the dataset we just indexed.
    // The presence of the `error` key indicates that the operation
    // that we did for the document has failed.
    bulkResponse.items.forEach((action, i) => {
      const operation = Object.keys(action)[0];
      if (action[operation].error) {
        erroredDocuments.push({
          // If the status is 429 it means that you can retry the document,
          // otherwise it's very likely a mapping error, and you should
          // fix the document before to try it again.
          status: action[operation].status,
          error: action[operation].error,
          operation: body[i * 2],
          document: body[i * 2 + 1],
        });
      }
    });
    console.log(erroredDocuments);
  }
}
run().catch(console.log);
