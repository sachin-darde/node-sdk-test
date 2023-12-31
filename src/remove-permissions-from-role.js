import axios from 'axios';

export async function removePermissionsFromRole(apiBaseUrl, roleId, permissions) {
    try {
        var data = JSON.stringify({
            "roleId": roleId,
            'permissions': permissions
        });
        var config = {
            method: 'post',
            url: `${apiBaseUrl}/remove-permissions-from-role`,
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