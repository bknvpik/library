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

export const signUp = async (login, password, repeatPassword) => {
  const url = 'http://localhost:8080/Library/register';

  if(password !== repeatPassword)
    throw new Error('Passwords not equal!');
  else if(password.length < 8)
    throw new Error('Password too short!');
  else {

    const user = JSON.stringify({
      username: login,
      password: password,
    });

    const response = await axios.post(url, user , {
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        throw new Error('Invalid Credentials!');
    });
    
    return response;
  }
}
