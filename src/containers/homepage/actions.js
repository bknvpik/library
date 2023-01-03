import axios from 'axios';

export const signIn = async (login, password) => {
    const url = 'http://localhost:8080/Library/login';

    const response = await axios.post(url, login , {
        auth: {
          username: login,
          password: password
        },
        headers: {
            'content-type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        throw new Error('Invalid Credentials!');
    });
    
    return response;
}