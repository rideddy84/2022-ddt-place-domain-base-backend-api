import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import Connector from './connector';

describe('dynamodb example', () => {
  let client: DocumentClient;

  beforeAll(() => {
    client = Connector.getClient();
  });

  it('should insert item into table', async () => {
    await client
      .put({ TableName: 'files', Item: { id: '1', hello: 'world' } })
      .promise();

    const { Item } = await client
      .get({ TableName: 'files', Key: { id: '1' } })
      .promise();

    expect(Item).toEqual({
      id: '1',
      hello: 'world',
    });
  });
});
