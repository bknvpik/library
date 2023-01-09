import { Box, Grid } from '@mui/material';
import React from 'react';
import ActionButton from '../button/ActionButton';
import Input from '../input/Input';

export default function AdminPanel({ 
    title,
    setTitle,
    author,
    setAuthor,
    year,
    setYear,
    handleAdd
}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', padding: '1em', gap: 8}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Input id='title' label='Title' type='text' value={ title } setValue={ setTitle } />
          <Input id='author' label='Author' type='text' value={ author } setValue={ setAuthor } />
          <Input id='year' label='Year' type='number' value={ year } setValue={ setYear } />
        </Box>
        <Box>
          <ActionButton handleClick={ handleAdd } homepage={ true } buttonText='Add New Book' />
        </Box>
    </Box>
  )
}
