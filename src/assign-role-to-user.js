const axios = require('axios');

async function assignRoleToUser(apiBaseUrl, roleId, uid) {
    try {
        var data = JSON.stringify({
            "roleId": roleId,
            'uid': uid
        });
        var config = {
            method: 'post',
            url: `${apiBaseUrl}/assign-role-to-user`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const response = await axios(config)
        return response.data.message;
    } catch (error) {
        if (error && error.response && error.response.data && error.response.data.message)
            throw error.response.data.message;
        else
            throw error;
    }
}
module.exports = assignRoleToUser;

