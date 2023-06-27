import axios from 'axios';

export async function checkAuth(apiBaseUrl, uid, permission){
  console.log(permission);
  try {
    const data = JSON.stringify({
      uid: uid,
      permission: permission
    });
    const config = {
      method: 'post',
      url: `${apiBaseUrl}/check-auth`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    const response =await  axios(config);
    return response.data.data;
  } catch (error) {
    // console.log(error);x

    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    )
      throw error.response.data.message;
    else throw error;
  }
}

