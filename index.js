const checkAuth = require('./checkAuth');

class MobiloAuth {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async checkAuth(uid, permission) {
    return checkAuth(this.apiBaseUrl, uid, permission);
  }
  
}

module.exports = MobiloAuth;
