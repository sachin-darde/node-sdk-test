const axios = require('axios');

async function checkAuth(apiBaseUrl, uid, permission) {
  try {
    const response = await axios.post(`${apiBaseUrl}/check-auth`, {
      headers: { 
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        "uid": uid,
        "permission": permission
      }),
    });
    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
}

module.exports = checkAuth;
