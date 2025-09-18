import { describe, test } from 'node:test';
import assert from 'node:assert';
import languages from '../index.js';

describe('cloc-languages', () => {
  test('should have at least one language', () => {
    assert(Object.keys(languages).length > 0);
  });
});