'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { getPermissions, hasPermission } = require('../src/auth/permissions');

test('getPermissions devuelve los permisos de cada rol', () => {
  assert.deepEqual(getPermissions('viewer'), ['read']);
  assert.deepEqual(getPermissions('desconocido'), []);
});

test('hasPermission respeta los permisos del rol', () => {
  assert.equal(hasPermission({ role: 'admin' }, 'delete'), true);
  assert.equal(hasPermission({ role: 'editor' }, 'delete'), false);
  assert.equal(hasPermission({ role: 'viewer' }, 'read'), true);
});

test('hasPermission rechaza usuarios inválidos', () => {
  assert.equal(hasPermission(null, 'read'), false);
  assert.equal(hasPermission({}, 'read'), false);
});
