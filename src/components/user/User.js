import { Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import ActionButton from '../button/ActionButton';

export default function User({ user, handleDelete }) {
  

  return (
    <Card sx={{ minWidth: 700 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          { user.id }
        </Typography>
        <Typography variant='h5' component='div'>
          { user.username }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          { user.role }
        </Typography>
      </CardContent>
      <CardActions>
        <ActionButton handleClick={ () => handleDelete(user.id) } buttonText={ 'Delete' } color={ 'error' } />
        </CardActions>
    </Card>
  )
}
