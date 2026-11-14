'use strict';

function roundTo(value, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function formatCurrency(value, currency = 'EUR') {
  return `${roundTo(value, 2).toFixed(2)} ${currency}`;
}

module.exports = { roundTo, formatCurrency };
