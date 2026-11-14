'use strict';

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir entre cero');
  }
  return a / b;
}

function average(values) {
  if (values.length === 0) {
    return 0;
  }
  const total = values.reduce((sum, value) => sum + value, 0);
  return total / values.length;
}

function applyDiscount(price, percent) {
  if (percent < 0 || percent > 100) {
    throw new RangeError('El descuento debe estar entre 0 y 100');
  }
  return price - (price * percent) / 100;
}

module.exports = { add, subtract, multiply, divide, average, applyDiscount };
