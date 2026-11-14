'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { getPermissions, hasPermission, canModifyResource } = require('../src/auth/permissions');

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

test('el rol auditor puede leer y auditar pero no escribir', () => {
  assert.equal(hasPermission({ role: 'auditor' }, 'audit'), true);
  assert.equal(hasPermission({ role: 'auditor' }, 'write'), false);
});

test('canModifyResource exige ser propietario salvo para admin', () => {
  const resource = { ownerId: 7 };
  assert.equal(canModifyResource({ id: 7, role: 'editor' }, resource), true);
  assert.equal(canModifyResource({ id: 8, role: 'editor' }, resource), false);
  assert.equal(canModifyResource({ id: 1, role: 'admin' }, resource), true);
  assert.equal(canModifyResource({ id: 7, role: 'viewer' }, resource), false);
  assert.equal(canModifyResource({ id: 7, role: 'editor' }, {}), false);
});
