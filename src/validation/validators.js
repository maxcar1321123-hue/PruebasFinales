'use strict';

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isPositiveInteger(value) {
  return Number.isInteger(value) && value > 0;
}

function isEmail(value) {
  if (!isNonEmptyString(value)) {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isInRange(value, min, max) {
  return typeof value === 'number' && value >= min && value <= max;
}

module.exports = { isNonEmptyString, isPositiveInteger, isEmail, isInRange };
