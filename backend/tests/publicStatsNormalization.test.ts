import assert from 'node:assert/strict';
import test from 'node:test';
import {
  normalizePublicCount,
  normalizePublicRating,
} from '../../frontend/lib/publicStatsNormalization';

test('preserves legitimate zero-valued public statistics', () => {
  assert.equal(normalizePublicCount(0, 26), 0);
  assert.equal(normalizePublicCount('0', 26), 0);
  assert.equal(normalizePublicRating(0, 4.8), 0);
});

test('accepts valid stored counts and ratings', () => {
  assert.equal(normalizePublicCount('156', 100), 156);
  assert.equal(normalizePublicRating('4.8', 0), 4.8);
});

test('uses the supplied scoped fallback for invalid values', () => {
  assert.equal(normalizePublicCount(null, 2), 2);
  assert.equal(normalizePublicCount(-1, 2), 2);
  assert.equal(normalizePublicCount(1.5, 2), 2);
  assert.equal(normalizePublicCount('invalid', 2), 2);
  assert.equal(normalizePublicRating(5.1, 4.8), 4.8);
  assert.equal(normalizePublicRating(null, 4.8), 4.8);
});
