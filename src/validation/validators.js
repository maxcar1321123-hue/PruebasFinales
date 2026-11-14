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
  const normalized = value.trim();
  if (normalized.includes('..')) {
    return false;
  }
  return /^[^\s@.][^\s@]*@[^\s@.][^\s@]*\.[a-z]{2,}$/i.test(normalized);
}

module.exports = { isNonEmptyString, isPositiveInteger, isEmail };
