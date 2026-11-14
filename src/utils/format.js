'use strict';

function roundTo(value, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function formatCurrency(value, currency = 'EUR') {
  return `${roundTo(value, 2).toFixed(2)} ${currency}`;
}

function formatPercentage(value, decimals = 1) {
  return `${roundTo(value, decimals).toFixed(decimals)} %`;
}

module.exports = { roundTo, formatCurrency, formatPercentage };
