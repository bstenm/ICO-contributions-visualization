// e2e tests
import { request } from 'graphql-request';
import cf from './config';
import server from './server';

const { port } = cf;
const host = `http://127.0.0.1:${port}`;

beforeAll(async () => {
      await server.start({ port });
});

it('Returns the whole list of contributors if no argument passed', async () => {
      const query = 'query { contributors { value }}';
      const response = await request(host, query);
      expect(response.contributors).toHaveLength(100);
});

it('Returns the array of entries satisfying the filter passed', async () => {
      const query = 'query { contributors (where: { age: 21 }){ value }}';
      const response = await request(host, query);
      expect(response.contributors).toEqual([
            { value: '3,367.80' },
            { value: '2,885.78' },
            { value: '3,299.44' },
      ]);
});

it('Returns an empty array if no entry satisfy the filter passed', async () => {
      const query = 'query { contributors (where: { age: 121 }){ value }}';
      const response = await request(host, query);
      expect(response.contributors).toEqual([]);
});

it('Returns an error query is erroneous', async () => {
      try {
            const query = 'query { contributors (were: { age: 121 }){ value }}';
            await request(host, query);
      } catch (e) {
            const { errors } = e.response || {};
            expect(errors).toBeDefined();
            expect(errors).toHaveLength(1);
            expect(errors[0].message).toContain('Unknown argument "were"');
      }
});
