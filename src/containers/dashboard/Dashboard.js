import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Book from '../../components/book/Book';
import Header from '../../components/header/Header';
import AdminPanel from '../../components/panel/AdminPanel';
import AdminPanelUser from '../../components/panel/AdminPanelUser';
import User from '../../components/user/User';
import { addBook, addNewUser, borrowBook, deleteBook, deleteUserById, getBooks, getBooksBorrowedByUser, getUserBorrows, getUsers, longerBorrowBookDate, returnBook } from './actions';
import { bookTypes } from './constants';

export default function Dashboard({ user, setUser }) {
  const [books, setBooks] = useState([]);
  const [userBooks, setUserBooks] = useState([]);
  const [userBorrows, setUserBorrows] = useState([]);
  const [message, setMessage] = useState([]);
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookYear, setBookYear] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');
  const [users, setUSers] = useState([]);

  useEffect(() => {
    handleGet();
    handleGetBorrowed();
    handleGetBorrows();
    if(isAdmin())
      handleGetUsers();
  }, [])

  const handleGet = async () => {
    setMessage('');

    try {
      const response = await getBooks(user.username, user.password, user.id);
      setBooks(response.data);
    }
    catch(error) {
      setMessage(error.message);
    }
  }

  const handleGetBorrowed = async () => {
    setMessage('');

    try {
      const response = await getBooksBorrowedByUser(user.username, user.password, user.id);
      setUserBooks(response.data);
    }
    catch(error) {
      setMessage(error.message);
    }
  }

  const handleGetBorrows = async () => {
    setMessage('');

    try {
      const response = await getUserBorrows(user.username, user.password, user.id);
      setUserBorrows(response.data);
    }
    catch(error) {
      setMessage(error.message);
    }
  }

  const handleGetUsers = async () => {
    setMessage('');

    try {
      const response = await getUsers(user.username, user.password);
      setUSers(response.data);
    }
    catch(error) {
      setMessage(error.message);
    }
  }

  const handleSignOut = () => {
    setUser({});
  }
  
  const handleDelete = async (id) => {
    setMessage('');
    try {
      const response = await deleteBook(user.username, user.password, id);
      console.log(response.data)
      setMessage('Deleted Succesfully!');
      handleGet();
    }
    catch(error) {
      setMessage(error.message);
    }
  }

  const handleAdd = async () => {
    console.log(bookTitle, bookAuthor, bookYear)
    setMessage('');
    try {
      const response = await addBook(user.username, user.password, bookTitle, bookAuthor, bookYear);
      console.log(response.data)
      setMessage('Added Succesfully!');
      handleGet();
    }
    catch(error) {
      setMessage(error.message);
    }
  }

  const handleBorrow = async (bookId) => {
    setMessage('');
    try {
      const response = await borrowBook(user.username, user.password, bookId, user.id);
      console.log(response.data)
      setMessage('Borrowed Succesfully')
      handleGet();
      handleGetBorrowed();
      handleGetBorrows();
    }
    catch(error) {
      setMessage(error.message);
    }
  }

  const handleReturn = async (bookId) => {
    setMessage('');
    try {
      const response = await returnBook(user.username, user.password, bookId, user.id);
      console.log(response.data)
      setMessage('Returned Succesfully')
      handleGet();
      handleGetBorrowed();
      handleGetBorrows();
    }
    catch(error) {
      setMessage(error.message);
    }
  }

  const handleLonger = async (bookId) => {
    setMessage('');
    try {
      const response = await longerBorrowBookDate(user.username, user.password, bookId);
      console.log(response.data)
      setMessage('Longered date Succesfully')
      handleGetBorrows();
    }
    catch(error) {
      setMessage(error.message);
    }
  }

  const handleDeleteUser = async (userId) => {
    setMessage('');
    try {
      const response = await deleteUserById(user.username, user.password, userId);
      console.log(response.data)
      setMessage('Deleted user Succesfully')
      handleGetUsers();
    }
    catch(error) {
      setMessage(error.message);
    }
  }

  const handleAddUser = async () => {
    setMessage('');
    try {
      const response = await addNewUser(user.username, user.password, username, password, role);
      console.log(response.data)
      setMessage('User added succesfully')
      handleGetUsers();
    }
    catch(error) {
      setMessage(error.message);
    }
  }

  const isAdmin = () => {
    return user.role === 'ADMIN';
  }

  return (
    <div className='main-container'>
      <Header user={ user } handleSignOut={ handleSignOut } />
      <Grid 
        container
        spacing={5}
        direction='row'
        justifyContent='center'
        style={{ minHeight: '100%'}}
      >
        <Grid item>
          <Grid
            container
            spacing={ 2 }
            direction='column'
            alignItems='center'
            justifyContent='center'
          >
            <Grid item>
              <Typography variant="h4" margin='2em'>
                Books
                <hr></hr>
              </Typography>
            </Grid>
            <Grid item>
            { isAdmin() &&
              <span style={{marginTop: '10em'}} > 
                <AdminPanel 
                  title={ bookTitle }
                setTitle={ setBookTitle }
                author={ bookAuthor }
                setAuthor={ setBookAuthor }
                year={ bookYear }
                setYear={ setBookYear }
                handleAdd={ handleAdd }
              /> 
              </span>
            }
            </Grid>
            {
            books.map((book) => 
              <Grid item>
                <Book key={ book.id } type={ bookTypes.active } book={ book } isAdmin={ isAdmin() } user={ user } handleDelete={ handleDelete } handleBorrow={ handleBorrow }  />
              </Grid>
            )}
          </Grid>
          <Grid
            container
            spacing={ 2 }
            direction='column'
            alignItems='center'
            justifyContent='center'
          >
            <Grid item>
              <Typography variant="h4" margin='2em'>
                { isAdmin() ? 'Users' : 'Books borrowed' }
                <hr></hr>
              </Typography>
            </Grid>
            <Grid item>
            { isAdmin() &&
              <span style={{marginTop: '10em'}} > 
                  <AdminPanelUser
                  username={ username }
                  setUsername={ setUsername }
                  password={ password }
                  setPassword={ setPassword }
                  role={ role }
                  setRole={ setRole }
                  handleAdd={ handleAddUser }
                /> 
              </span>
            }
            </Grid>
            { !isAdmin() ?
              userBooks.map((book) => 
                <Grid item>
                  <Book key={ book.id } type={ bookTypes.borrowed } book={ book } isAdmin={ isAdmin() } user={ user } handleReturn={ handleReturn } handleLonger= { handleLonger } userBorrows={ userBorrows } />
                </Grid>
              )
              :
              users.map((user) => 
                <Grid item>
                  <User user={ user } handleDelete={ handleDeleteUser } />
                </Grid>
              )}
            </Grid>
          </Grid>      
        <Typography variant='h5' margin='2em' color={ 'error' }>
          { message }
        </Typography>
      </Grid>
    </div>
  )
}
