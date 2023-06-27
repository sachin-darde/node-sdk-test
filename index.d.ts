declare module 'mobilo-auth-sdk' {
  export default class MobiloAuth {
    constructor(apiBaseUrl: string);

    checkAuth(uid: string, permission: string): Promise<any>;

    createRoleWithPermissions(roleId: string, name: string, permissions: string[]): Promise<any>;

    addPermissionsToRole(roleId: string, permissions: string[]): Promise<any>;

    removePermissionsFromRole(roleId: string, permissions: string[]): Promise<any>;

    assignRoleToUser(roleId: string, uid: string): Promise<any>;

    unassignRoleFromUser(roleId: string, uid: string): Promise<any>;

    deleteRole(roleId: string): Promise<any>;
  }
}
