import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import ActionButton from '../button/ActionButton';

export default function User({ user, handleDelete }) {
  

  return (
    <Card sx={{ backgroundColor: grey[700], color: 'white', minHeight: '10em'}}>
      <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'start' }}>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>ID:</b> { user.id }
            </Typography>
            <Typography variant='h5' component='div'>
              <b>Username:</b> { user.username }
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              <b>Role:</b> { user.role }
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <ActionButton handleClick={ () => handleDelete(user.id) } buttonText={ 'Delete' } color={ 'error' } />
        </CardActions>
    </Card>
  )
}
