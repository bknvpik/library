import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import ActionButton from '../../components/button/ActionButton';

export default function Header({ user, handleSignOut }) {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ flex: 1 }}
        >
          <img src={ process.env.PUBLIC_URL + '/assets/logo.svg' } style={{ width: '10%' }} alt="" />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flex: 1 }}>
          {`Dashboard, Hello ${ user.username }!`}
        </Typography>
        <Typography sx={{ flex: 1 }}>
          <ActionButton handleClick={ handleSignOut } buttonText={ 'Sign Out' } color={ 'error' } />
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
