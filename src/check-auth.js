const axios = require('axios').default;

async function checkAuth(apiBaseUrl, uid, permission) {
  try {
      var data = JSON.stringify({
          "uid": uid,
          "permission": permission
      });
      var config = {
          method: 'post',
          url: `${apiBaseUrl}/check-auth`,
          headers: {
              'Content-Type': 'application/json'
          },
          data: data
      };

      const response = await axios(config)
      return response.data.data;
  } catch (error) {
      if (error && error.response && error.response.data && error.response.data.message)
          throw error.response.data.message;
      else
          throw error;
  }
}


module.exports = checkAuth;
