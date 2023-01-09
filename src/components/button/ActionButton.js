import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';

export default function ActionButton({ handleClick, buttonText, color, homepage,  }) {
  return (
    <Button variant="contained" onClick={ handleClick } color={ color } style={{ backgroundColor: homepage ? '#2196f3' : color }} >
      { buttonText }
    </Button>
  )
} 
