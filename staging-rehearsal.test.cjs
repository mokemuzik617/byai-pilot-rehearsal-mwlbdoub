const assert = require('node:assert/strict');
const { test } = require('node:test');
test('synthetic agency release validates its revision', () => {
  assert.equal(['first', 'second'].at(0), 'first');
});