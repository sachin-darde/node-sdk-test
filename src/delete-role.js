import axios from 'axios';

export async function deleteRole(apiBaseUrl, roleId) {
    try {
        var data = JSON.stringify({
            "roleId": roleId
        });
        var config = {
            method: 'delete',
            url: `${apiBaseUrl}/delete-role`,
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

module.exports = deleteRole;

