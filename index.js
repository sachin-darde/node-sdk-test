import {
  checkAuth,
  createRoleWithPermissions,
  removePermissionsFromRole,
  addPermissionsToRole,
  assignRoleToUser,
  unassignRoleFromUser,
  deleteRole,
} from './src';

class MobiloAuth {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async checkAuth(uid, permission) {
    return checkAuth(this.apiBaseUrl, uid, permission);
  }

  async createRoleWithPermissions(roleId, name, permissions) {
    return createRoleWithPermissions(this.apiBaseUrl, roleId, name, permissions);
  }

  async addPermissionsToRole(roleId, permissions) {
    return addPermissionsToRole(this.apiBaseUrl, roleId, permissions);
  }

  async removePermissionsFromRole(roleId, permissions) {
    return removePermissionsFromRole(this.apiBaseUrl, roleId, permissions);
  }

  async assignRoleToUser(roleId, uid) {
    return assignRoleToUser(this.apiBaseUrl, roleId, uid);
  }

  async unassignRoleFromUser(roleId, uid) {
    return unassignRoleFromUser(this.apiBaseUrl, roleId, uid);
  }

  async deleteRole(roleId) {
    return deleteRole(this.apiBaseUrl, roleId);
  }
}

export default MobiloAuth;
