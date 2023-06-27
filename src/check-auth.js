const https = require('https');

async function checkAuth(apiBaseUrl, uid, permission) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      uid: uid,
      permission: permission
    });

    const options = {
      hostname: apiBaseUrl,
      path: '/v1/auth/check-auth',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          const response = JSON.parse(responseData);
          resolve(response.data);
        } else {
          reject(new Error(`Request failed with status code ${res.statusCode}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

module.exports = checkAuth;
