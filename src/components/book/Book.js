import { Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { bookTypes } from '../../containers/dashboard/constants';
import ActionButton from '../button/ActionButton';

export default function Book({ type, book, isAdmin, handleDelete, handleBorrow, handleReturn, handleLonger, userBorrows }) {

  useEffect(() => {
    console.log(userBorrows)
  }, [userBorrows])
  
  const getBorrowDates = (bookId) => {
    let dates = {};
    userBorrows?.forEach(element => {
      
      if(element.book.id === bookId) {
        dates = {
          borrowDate: element.borrowDate,
          returnDate: element.returnDate
        }
      }
    });
    return dates;
  }

  return (
    <Card sx={{ minWidth: 700 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          { book.author }
        </Typography>
        <Typography variant='h5' component='div'>
          { book.title }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          { book.year }
        </Typography>
        { type === bookTypes.borrowed && 
        <>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Borrow date: { getBorrowDates(book.id)?.borrowDate }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Return date: { getBorrowDates(book.id)?.returnDate }
        </Typography>
        </>
        }
      </CardContent>
      <CardActions>
          { (type === bookTypes.active && isAdmin) && <ActionButton handleClick={ () => handleDelete(book.id) } buttonText={ 'Delete' } color={ 'error' } /> }
          { (type === bookTypes.active && !isAdmin) && <ActionButton handleClick={ () => handleBorrow(book.id) } buttonText={ 'Borrow' } color={ 'success' } /> }
          { (type === bookTypes.borrowed && !isAdmin) && <><ActionButton handleClick={ () => handleLonger(book.id) } buttonText={ 'Longer Date' } color={ 'warning' } /><ActionButton handleClick={ () => handleReturn(book.id) } buttonText={ 'Return' } color={ 'error' } /></> }
      </CardActions>
    </Card>
  )
}
