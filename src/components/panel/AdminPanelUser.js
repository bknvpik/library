import { Box, Grid, MenuItem, Select } from '@mui/material';
import React from 'react';
import ActionButton from '../button/ActionButton';
import Input from '../input/Input';

export default function AdminPanelUser({ 
    username,
    setUsername,
    password,
    setPassword,
    role,
    setRole,
    handleAdd
}) {

  const handleChange = (e) => {
    setRole(e.target.value);
    console.log(e.target.value)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', padding: '1em', gap: 8}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Input id='username' label='Username' type='text' value={ username } setValue={ setUsername } />
          <Input id='password' label='Password' type='password' value={ password } setValue={ setPassword } />
          <Select
            id="role"
            value={ role }
            defaultValue={ role }
            label="Role"
            onChange={ handleChange }
            sx={{ color: 'white', width: '100%', marginTop: '1em'}}
          >
            <MenuItem value={ "USER" }>User</MenuItem>
            <MenuItem value={ "ADMIN" }>Admin</MenuItem>
          </Select>
        </Box>
        <Box>
            <ActionButton handleClick={ handleAdd } homepage={ true } buttonText='Add New User' />
        </Box>
    </Box>
  )
}
