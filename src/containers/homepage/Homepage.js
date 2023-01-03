import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import ActionButton from '../../components/button/ActionButton';
import Input from '../../components/input/Input';
import { signIn } from './actions.js';

export default function Homepage({ user, setUser }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignIn = async () => {
      setMessage('');

      try {
        const response = await signIn(login, password);
        setUser(response.data);
      }
      catch(error) {
        setMessage(error.message);
      }
    }

  return (
    <Grid 
      container
      spacing={5}
      direction='column'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        <img src={ process.env.PUBLIC_URL + '/assets/logo.svg' } style={{ width: '50%' }} />
        <Typography variant='h6' color='inherit' component='div'>
          LIBRARY
        </Typography>
      </Grid>
      <Grid item>
        <Input id='login' label='Login' type='text' value={ login } setValue={ setLogin } />
      </Grid>
      <Grid item>
        <Input id='password' label='Password' type='password' value={ password } setValue={ setPassword } />
      </Grid>
      <Grid item>
        <ActionButton handleClick={ handleSignIn } buttonText='Login' />
      </Grid>
      <Grid item>
        { message }
      </Grid>
    </Grid>
  )
}
