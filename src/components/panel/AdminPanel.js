import { Grid } from '@mui/material';
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
    <Grid item>
        <Grid>
            <Grid item>
                <Input id='title' label='Title' type='text' value={ title } setValue={ setTitle } />
            </Grid>
            <Grid item>
                <Input id='author' label='Author' type='text' value={ author } setValue={ setAuthor } />
            </Grid>
            <Grid item>
                <Input id='year' label='Year' type='number' value={ year } setValue={ setYear } />
            </Grid>
            <Grid item>
                <ActionButton handleClick={ handleAdd } buttonText='Add New Book' />
            </Grid>
        </Grid>  
    </Grid>
  )
}
