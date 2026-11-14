'use strict';

// Modelo de permisos ficticio usado solo para pruebas. No protege recursos reales.
const ROLE_PERMISSIONS = {
  admin: ['read', 'write', 'delete'],
  editor: ['read', 'write'],
  viewer: ['read'],
};

function getPermissions(role) {
  return ROLE_PERMISSIONS[role] || [];
}

function hasPermission(user, action) {
  if (!user || typeof user.role !== 'string') {
    return false;
  }
  return getPermissions(user.role).includes(action);
}

module.exports = { ROLE_PERMISSIONS, getPermissions, hasPermission };
