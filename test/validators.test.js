'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { isNonEmptyString, isPositiveInteger, isEmail } = require('../src/validation/validators');

test('isNonEmptyString detecta cadenas con contenido', () => {
  assert.equal(isNonEmptyString('hola'), true);
  assert.equal(isNonEmptyString('   '), false);
  assert.equal(isNonEmptyString(42), false);
});

test('isPositiveInteger acepta solo enteros positivos', () => {
  assert.equal(isPositiveInteger(5), true);
  assert.equal(isPositiveInteger(0), false);
  assert.equal(isPositiveInteger(-3), false);
  assert.equal(isPositiveInteger(2.5), false);
});

test('isEmail valida formatos básicos', () => {
  assert.equal(isEmail('usuario@example.com'), true);
  assert.equal(isEmail('sin-arroba.com'), false);
  assert.equal(isEmail('usuario@dominio'), false);
  assert.equal(isEmail(''), false);
});
