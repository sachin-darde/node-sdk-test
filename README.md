# MobiloAuth

`MobiloAuth` is a JavaScript class that provides a simplified interface for interacting with an authentication API. It includes methods for authentication, role management, and user-role assignments.

## Installation

```bash
npm install mobilo-auth
```

## Usage

```javascript
const MobiloAuth = require('mobilo-auth');

const apiBaseUrl = 'https://<base-url>/v1/auth';

const auth = new MobiloAuth(apiBaseUrl);

// Example usage of authentication check
auth.checkAuth('user123', 'read')
  .then(response => {
    // Handle authentication response
    console.log(response);
  })
  .catch(error => {
    // Handle authentication error
    console.error(error);
  });

// Example usage of role management
auth.createRoleWithPermissions('role123', 'Admin', ['read', 'write'])
  .then(response => {
    // Handle role creation response
    console.log(response);
  })
  .catch(error => {
    // Handle role creation error
    console.error(error);
  });

auth.addPermissionsToRole('role123', ['delete'])
  .then(response => {
    // Handle adding permissions to role response
    console.log(response);
  })
  .catch(error => {
    // Handle adding permissions to role error
    console.error(error);
  });

auth.removePermissionsFromRole('role123', ['write'])
  .then(response => {
    // Handle removing permissions from role response
    console.log(response);
  })
  .catch(error => {
    // Handle removing permissions from role error
    console.error(error);
  });

// Example usage of user-role assignments
auth.assignRoleToUser('role123', 'user123')
  .then(response => {
    // Handle assigning role to user response
    console.log(response);
  })
  .catch(error => {
    // Handle assigning role to user error
    console.error(error);
  });

auth.unassignRoleFromUser('role123', 'user123')
  .then(response => {
    // Handle unassigning role from user response
    console.log(response);
  })
  .catch(error => {
    // Handle unassigning role from user error
    console.error(error);
  });

// Example usage of role deletion
auth.deleteRole('role123')
  .then(response => {
    // Handle role deletion response
    console.log(response);
  })
  .catch(error => {
    // Handle role deletion error
    console.error(error);
  });
```

## API

### `new MobiloAuth(apiBaseUrl)`

Creates a new `MobiloAuth` instance.

- `apiBaseUrl` (string): The base URL of the authentication API.

### `auth.checkAuth(uid, permission)`

Checks the authentication status for a user.

- `uid` (string): The user ID.
- `permission` (string): The permission to check.

Returns a promise that resolves with the authentication response.

### `auth.createRoleWithPermissions(roleId, name, permissions)`

Creates a role with the specified permissions.

- `roleId` (string): The ID of the role.
- `name` (string): The name of the role.
- `permissions` (array): An array of permissions for the role.

Returns a promise that resolves with the role creation response.

### `auth.addPermissionsToRole(roleId, permissions)`

Adds permissions to an existing role.

- `roleId` (string): The ID of the role.
- `permissions` (array): An array of permissions to add.

Returns a promise that resolves with the response after adding permissions to the role.

### `auth.removePermissionsFromRole(roleId, permissions)`

Removes permissions from an existing role.

- `roleId` (string): The ID of the role

.
- `permissions` (array): An array of permissions to remove.

Returns a promise that resolves with the response after removing permissions from the role.

### `auth.assignRoleToUser(roleId, uid)`

Assigns a role to a user.

- `roleId` (string): The ID of the role.
- `uid` (string): The ID of the user.

Returns a promise that resolves with the response after assigning the role to the user.

### `auth.unassignRoleFromUser(roleId, uid)`

Unassigns a role from a user.

- `roleId` (string): The ID of the role.
- `uid` (string): The ID of the user.

Returns a promise that resolves with the response after unassigning the role from the user.

### `auth.deleteRole(roleId)`

Deletes a role.

- `roleId` (string): The ID of the role to delete.

Returns a promise that resolves with the response after deleting the role.

## License

This project is licensed under the MIT License.

Semantic Commits:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `devops`: (any work related to ci/cd, environmental development and testing frameworks)
- `chore`: (updating grunt tasks etc; no production code change)
