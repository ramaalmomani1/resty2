import { test, expect, describe, beforeAll, afterEach, afterAll } from 'vitest';
import fetch from 'node-fetch';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

describe('Form component', () => {
  const server = setupServer(
    rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
          { userId: 2, id: 2, title: 'Post 2', body: 'Body 2' },
        ])
      );
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

 

  test('fetches data from API and checks status code', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    expect(response.status).toBe(200);
  });
});

