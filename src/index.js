const checkAuth = require('./check-auth');
const addPermissionsToRole = require('./add-permissions-to-role');
const assignRoleToUser = require('./assign-role-to-user');
const createRoleWithPermissions = require('./create-role-with-permissions');
const deleteRole = require('./delete-role');
const removePermissionsFromRole = require('./remove-permissions-from-role');
const unassignRoleFromUser = require('./unassign-role-from-user');

module.exports = {
    checkAuth,
    createRoleWithPermissions,
    removePermissionsFromRole,
    addPermissionsToRole,
    deleteRole,
    assignRoleToUser,
    unassignRoleFromUser,
};
