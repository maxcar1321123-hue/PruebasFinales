'use strict';

const calculator = require('./math/calculator');
const validators = require('./validation/validators');
const format = require('./utils/format');
const permissions = require('./auth/permissions');

module.exports = { calculator, validators, format, permissions };

if (require.main === module) {
  const total = calculator.applyDiscount(120, 15);
  console.log(`Precio con descuento: ${format.formatCurrency(total)}`);
  console.log(`Descuento aplicado: ${format.formatPercentage(calculator.percentage(18, 120))}`);
  console.log(`¿Email válido? ${validators.isEmail('demo@example.com')}`);
  console.log(`¿Viewer puede escribir? ${permissions.hasPermission({ role: 'viewer' }, 'write')}`);
}
