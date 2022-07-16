import { DocumentClient } from 'aws-sdk/clients/dynamodb';

class Connector {
  private static isTest(): boolean {
    return !!process.env.JEST_WORKER_ID;
  }

  static getClient() {
    const isTest = Connector.isTest();

    const config = {
      convertEmptyValues: true,
      ...(isTest && {
        endpoint: 'localhost:8000',
        sslEnabled: false,
        region: 'local-env',
      }),
    };

    const client = new DocumentClient(config);

    return client;
  }
}

export default Connector;
