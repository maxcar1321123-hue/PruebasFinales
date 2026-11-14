'use strict';

// Modelo de permisos ficticio usado solo para pruebas. No protege recursos reales.
const ROLE_PERMISSIONS = {
  admin: ['read', 'write', 'delete'],
  editor: ['read', 'write'],
  viewer: ['read'],
  auditor: ['read', 'audit'],
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

// Un usuario puede modificar un recurso si tiene el permiso y es su propietario,
// salvo los administradores, que pueden modificar cualquier recurso.
function canModifyResource(user, resource, action = 'write') {
  if (!hasPermission(user, action) || !resource) {
    return false;
  }
  if (user.role === 'admin') {
    return true;
  }
  return resource.ownerId !== undefined && resource.ownerId === user.id;
}

module.exports = { ROLE_PERMISSIONS, getPermissions, hasPermission, canModifyResource };
