'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { roundTo, formatCurrency } = require('../src/utils/format');

test('roundTo redondea a los decimales indicados', () => {
  assert.equal(roundTo(3.14159, 2), 3.14);
  assert.equal(roundTo(2.5, 0), 3);
});

test('formatCurrency formatea con dos decimales y moneda', () => {
  assert.equal(formatCurrency(10), '10.00 EUR');
  assert.equal(formatCurrency(5.678, 'USD'), '5.68 USD');
});
