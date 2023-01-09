import { TextField } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';
 
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
      color={ 'secondary' }
      variant="standard"
      sx={{
        "input": {
          color: 'white'
        },
        "& label": {
          color: 'white',
          "&.Mui-focused": {
            color: blue[500]
          },
          "&::placeholder": {
            color: 'white'
          }
        }
      }}
    />
  )
}
