import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import { NextFunction, Request, Response } from 'express';
import { requireAdminKey } from '../src/middleware/requireAdminKey';

const originalAdminSecret = process.env.ADMIN_SECRET_KEY;

afterEach(() => {
  if (originalAdminSecret === undefined) {
    delete process.env.ADMIN_SECRET_KEY;
  } else {
    process.env.ADMIN_SECRET_KEY = originalAdminSecret;
  }
});

const invokeMiddleware = (providedKey?: string) => {
  let statusCode: number | undefined;
  let responseBody: unknown;
  let nextCalls = 0;

  const req = {
    get: (name: string) => name.toLowerCase() === 'x-admin-key' ? providedKey : undefined,
  } as Request;

  const res = {
    status: (code: number) => {
      statusCode = code;
      return res;
    },
    json: (body: unknown) => {
      responseBody = body;
      return res;
    },
  } as unknown as Response;

  const next = (() => {
    nextCalls += 1;
  }) as NextFunction;

  requireAdminKey(req, res, next);

  return { statusCode, responseBody, nextCalls };
};

test('fails closed when ADMIN_SECRET_KEY is missing', () => {
  delete process.env.ADMIN_SECRET_KEY;

  assert.deepEqual(invokeMiddleware(), {
    statusCode: 500,
    responseBody: { error: 'Admin authentication is unavailable' },
    nextCalls: 0,
  });
});

test('fails closed when ADMIN_SECRET_KEY is empty', () => {
  process.env.ADMIN_SECRET_KEY = '';

  assert.deepEqual(invokeMiddleware('anything'), {
    statusCode: 500,
    responseBody: { error: 'Admin authentication is unavailable' },
    nextCalls: 0,
  });
});

test('fails closed when ADMIN_SECRET_KEY contains only whitespace', () => {
  process.env.ADMIN_SECRET_KEY = '   ';

  assert.deepEqual(invokeMiddleware('   '), {
    statusCode: 500,
    responseBody: { error: 'Admin authentication is unavailable' },
    nextCalls: 0,
  });
});

test('rejects a missing request key', () => {
  process.env.ADMIN_SECRET_KEY = 'configured-secret';

  assert.deepEqual(invokeMiddleware(), {
    statusCode: 401,
    responseBody: { error: 'Unauthorized' },
    nextCalls: 0,
  });
});

test('rejects an incorrect request key', () => {
  process.env.ADMIN_SECRET_KEY = 'configured-secret';

  assert.deepEqual(invokeMiddleware('incorrect-secret'), {
    statusCode: 401,
    responseBody: { error: 'Unauthorized' },
    nextCalls: 0,
  });
});

test('continues only for an exact request-key match', () => {
  process.env.ADMIN_SECRET_KEY = 'configured-secret';

  assert.deepEqual(invokeMiddleware('configured-secret'), {
    statusCode: undefined,
    responseBody: undefined,
    nextCalls: 1,
  });
});
