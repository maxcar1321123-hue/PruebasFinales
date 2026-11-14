'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { add, subtract, multiply, divide, average, applyDiscount } = require('../src/math/calculator');

test('add suma dos números', () => {
  assert.equal(add(2, 3), 5);
});

test('subtract resta dos números', () => {
  assert.equal(subtract(10, 4), 6);
});

test('multiply multiplica dos números', () => {
  assert.equal(multiply(3, 4), 12);
});

test('divide divide dos números', () => {
  assert.equal(divide(10, 4), 2.5);
});

test('divide lanza error al dividir entre cero', () => {
  assert.throws(() => divide(1, 0), /dividir entre cero/);
});

test('average calcula la media', () => {
  assert.equal(average([2, 4, 6]), 4);
});

test('applyDiscount aplica un porcentaje de descuento', () => {
  assert.equal(applyDiscount(200, 25), 150);
  assert.equal(applyDiscount(80, 0), 80);
});

test('applyDiscount rechaza porcentajes fuera de rango', () => {
  assert.throws(() => applyDiscount(100, 120), RangeError);
  assert.throws(() => applyDiscount(100, -5), RangeError);
});
