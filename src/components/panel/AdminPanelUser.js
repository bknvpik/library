import { Grid, MenuItem, Select } from '@mui/material';
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
    <Grid item>
        <Grid>
            <Grid item>
                <Input id='username' label='Username' type='text' value={ username } setValue={ setUsername } />
            </Grid>
            <Grid item>
                <Input id='password' label='Password' type='password' value={ password } setValue={ setPassword } />
            </Grid>
            <Select
              id="role"
              value={ role }
              defaultValue={ role }
              label="Role"
              onChange={ handleChange }
            >
              <MenuItem value={ "USER" }>User</MenuItem>
              <MenuItem value={ "ADMIN" }>Admin</MenuItem>
            </Select>
            <Grid item>
                <ActionButton handleClick={ handleAdd } buttonText='Add New User' />
            </Grid>
        </Grid>  
    </Grid>
  )
}
