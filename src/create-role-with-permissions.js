import axios from 'axios';
export async function createRoleWithPermissions(apiBaseUrl, roleId, name, permissions) {
    try {
        var data = JSON.stringify({
            "roleId": roleId,
            "name": name,
            'permissions': permissions
        });
        var config = {
            method: 'post',
            url: `${apiBaseUrl}/create-role-with-permissions`,
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
