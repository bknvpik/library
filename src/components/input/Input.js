import React from 'react';
import { TextField } from '@mui/material';
 
export default function Input({ id, label, type, value, setValue }) {

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  }

  return (
    <TextField 
      id={ id }
      label={ label }
      type={ type }
      value={ value } onChange={ handleChange }
      variant="standard"
    />
  )
}
