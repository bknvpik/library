import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
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
    <Card sx={{ backgroundColor: grey[700], color: 'white', minHeight: '10em'}}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'start' }}>
            <Typography sx={{ fontSize: 14, color: 'white' }} color='text.secondary' gutterBottom>
              <b>Author:</b> { book.author }
            </Typography>
            <Typography variant='h5' component='div'>
              <b>Title:</b> { book.title }
            </Typography>
            <Typography>
              <b>Year:</b> { book.year }
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
            { type === bookTypes.borrowed && 
            <>
              <Typography sx={{ mb: 1.5 }}>
                <b>Borrow date:</b> { getBorrowDates(book.id)?.borrowDate }
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                <b>Return date</b>: { getBorrowDates(book.id)?.returnDate }
              </Typography>
            </>
            }
          </Box>
        </Box>
      </CardContent>
      <CardActions>
          { (type === bookTypes.active && isAdmin) && <ActionButton handleClick={ () => handleDelete(book.id) }  homepage={ false } buttonText={ 'Delete' } color={ 'error' } /> }
          { (type === bookTypes.active && !isAdmin) && <ActionButton handleClick={ () => handleBorrow(book.id) }  homepage={ false } buttonText={ 'Borrow' } color={ 'success' } /> }
          { (type === bookTypes.borrowed && !isAdmin) && <><ActionButton handleClick={ () => handleLonger(book.id) } homepage={ false } buttonText={ 'Longer Date' } color={ 'warning' } /><ActionButton handleClick={ () => handleReturn(book.id) } buttonText={ 'Return' } color={ 'error' } /></> }
      </CardActions>
    </Card>
  )
}
