import React from 'react';
import { Button } from '@mui/material';

export default function ActionButton({ handleClick, buttonText, color }) {
  return (
    <Button variant="contained" onClick={ handleClick } color={ color }>
      { buttonText }
    </Button>
  )
}
