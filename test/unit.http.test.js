import { expect } from 'chai';
import * as controllers from '../src/index';

function makeId(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const randomRoleId = makeId(8);

let unitTestUser = 'WbBNIOCS1XT66POxtqBofSaSJ8k2';
const unitTestPermissions = ['createRole', 'updateRole', 'deleteRole'];
const apiBaseUrl = "https://5db7-2405-201-2018-5086-3167-5177-5851-ef51.ngrok-free.app/v1/auth"

describe('auth-srv', () => {
  describe('createRole', () => {
    it('it should failed as "Role already exist"', async () => {
      const roleId = 'SystemAdmin';
      const name = 'System Administrator';
      const permissions = [unitTestPermissions[0]];
      try {
        await controllers.createRoleWithPermissions(apiBaseUrl,roleId, name, permissions);
      } catch (error) {
        expect(error).to.equal('Role already exist');
      }
         
      // expect(resp).to.equal('Role already exist');
    });

    it('it should be successful as "Role created"', async () => {
      // Role created
      const roleId = randomRoleId;
      const name = 'System Administrator';
      const permissions = [unitTestPermissions[0]];
      const resp = await controllers.createRoleWithPermissions(apiBaseUrl,roleId, name, permissions);
      expect(resp).to.equal('Role created');
    });
  });

  describe('addPermission', () => {
    it('it should be "Add permission in role"', async () => {
      const roleId = randomRoleId;
      const permissions = unitTestPermissions;
      const resp =  await controllers.addPermissionsToRole(apiBaseUrl, roleId, permissions);
      expect(resp).to.equal('Role updated');
    });
  });

  describe('removePermission', () => {
    it('it should be "remove permission from role"', async () => {
      const roleId = randomRoleId;
      const permissions = [unitTestPermissions[(unitTestPermissions.length - 1)]];
      const resp = await controllers.removePermissionsFromRole(apiBaseUrl, roleId, permissions);
      expect(resp).to.equal('Role updated');
    });
  });

  describe('assignRoleToUser', () => {
    it('it should failed as "User not found!"', async () => {
      const roleId = 'Employee';
      const uid = 'anyUID';  
      try {
        await controllers.assignRoleToUser(apiBaseUrl, roleId, uid);
      } catch (error) {
        expect(error).to.equal('There is no user record corresponding to the provided identifier.');
      }
    });
    it('it should "Assign role to the user"', async () => {
      const roleId = randomRoleId;
      const  uid  = unitTestUser;
      const resp = await controllers.assignRoleToUser(apiBaseUrl, roleId, uid);
      expect(resp).to.equal('Role assigned to user');
    });
    it('it should failed as "Role already assigned"', async () => {
      const roleId = randomRoleId;
      const  uid  = unitTestUser;
      try {
        await controllers.assignRoleToUser(apiBaseUrl, roleId, uid);
      } catch (error) {
        expect(error).to.equal('Role already assigned');
      }
    });
  });

  describe('checkAuthorization', () => {
    it('it should failed as "User not found!"', async () => {
      const permission = 'createRole';
      const uid = 'anyUID';
      try {
        const resp = await controllers.checkAuth(apiBaseUrl, uid, permission);
      } catch (error) {
        expect(error).to.equal('There is no user record corresponding to the provided identifier.');
      }
    });
    it('it should respond "User don\'t have permission"', async () => {
      const permission = unitTestPermissions[(unitTestPermissions.length - 1)];
      const  uid  = unitTestUser;
      const resp = await controllers.checkAuth(apiBaseUrl, uid, permission);
      expect(resp).to.equal(false); 
    });
    it('it should respond "User have permission"', async () => {
      const permission = unitTestPermissions[0];
      const  uid  = unitTestUser;
      const resp = await controllers.checkAuth(apiBaseUrl, uid, permission);
      expect(resp).to.equal(true);
    });
  });

  describe('unassignRoleFromUser', () => {
    it('it should failed as "User not found!"', async () => {
      const roleId = randomRoleId;
      const uid = 'anyUID';
      try {
        const resp = await controllers.unassignRoleFromUser(apiBaseUrl, roleId, uid);
      } catch (error) {
        expect(error).to.equal('There is no user record corresponding to the provided identifier.');
      }
    });
    it('it should failed as "Role not assigned"', async () => {
      const roleId = 'Employee';
      const  uid = unitTestUser;
      try {
        await controllers.unassignRoleFromUser(apiBaseUrl, roleId, uid);
      } catch (error) {
        expect(error).to.equal('Role not assigned');
      }
    });
    it('it should "Unassign role from the user"', async () => {
      const roleId = randomRoleId;
      const  uid  = unitTestUser;
      const resp = await controllers.unassignRoleFromUser(apiBaseUrl, roleId, uid);
      expect(resp).to.equal('Role removed from user');
    });
  });

  describe('deleteRole', () => {
    it('it should failed as "Role Data not found"', async () => {
      const roleId = 'NonExistingRoleId';
      try {
        await controllers.deleteRole(apiBaseUrl, roleId);
      } catch (error) {
        expect(error).to.equal('Role Data not found');
      }
    });

    it('it should be successful as "Role deleted"', async () => {
      const roleId = randomRoleId;
      const resp = await controllers.deleteRole(apiBaseUrl, roleId);
      expect(resp).to.equal('Role deleted');
    });
  });
});
