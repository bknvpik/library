import { Box, Grid, Link, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import React, { useState } from 'react';
import ActionButton from '../../components/button/ActionButton';
import Input from '../../components/input/Input';
import { signIn, signUp } from './actions.js';

export default function Homepage({ user, setUser }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isRegistered, setIsRegistered] = useState(true);

    const clearInputs = () => {
      setLogin('');
      setPassword('');
      setRepeatPassword('');
    } 

    const handleSignIn = async () => {
      setMessage('');

      try {
        const response = await signIn(login, password);
        setUser(response.data);
        clearInputs();
      }
      catch(error) {
        setMessage(error.message);
      }
    }

    const handleSignUp = async () => {
      setMessage('');

      try {
        await signUp(login, password, repeatPassword);
        setMessage('Registered with success');
        clearInputs();
      }
      catch(error) {
        setMessage(error.message);
      }
    }

  return (
    <Box 
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      gap= {2}
      sx={{ minHeight: '100vh', bgcolor: grey[800], color: 'white' }}

    >
      <Box>
        <img src={ process.env.PUBLIC_URL + '/assets/logo.svg' } alt='logo' />
        <Typography variant='h6' color='inherit' component='div' pb={ '4em' }>
          LibrOUR
        </Typography>
      </Box>
      {
        isRegistered ?
        <>
          <Box>
            <Input id='login' label='Login' type='text' value={ login } setValue={ setLogin }/>
          </Box>
          <Box item>
            <Input id='password' label='Password' type='password' value={ password } setValue={ setPassword } />
          </Box>
          <Box item>
            <ActionButton handleClick={ handleSignIn } homepage={ true }  buttonText='Login' />
          </Box>
          <Box item>
            <Typography pt={ '2em' }>Dont have an account yet?</Typography>
            <Link
              component="button"
              variant="body2"
              onClick={ () => setIsRegistered(false)}
              color={ 'secondary' }
            >
              Register
            </Link>
          </Box>
        </>
        :
        <>
          <Box>
            <Input id='login' label='Login' type='text' value={ login } setValue={ setLogin } />
          </Box>
          <Box>
            <Input id='password' label='Password' type='password' value={ password } setValue={ setPassword } />
          </Box>
          <Box>
            <Input id='repeatPassword' label='Repeat password' type='password' value={ repeatPassword } setValue={ setRepeatPassword } />
          </Box>
          <Box>
            <ActionButton handleClick={ handleSignUp } homepage={ true } buttonText='Register' />
          </Box>
          <Box>
            <Typography pt={ '2em' }>Already registered?</Typography>
            <Link
              component="button"
              variant="body2"
              onClick={ () => setIsRegistered(true)}
              color={ 'secondary' }
            >
              Login
            </Link>
          </Box>
        </>
      }

      <Box color={'red'} item>
        { message }
      </Box>
    </Box>
  )
}
