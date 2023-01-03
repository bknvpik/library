import axios from 'axios';

export const getBooks = async (login, password, userId) => {
    const url = `http://localhost:8080/Library/books/${userId}`;

    const response = await axios.get(url, {
        auth: {
          username: login,
          password: password
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        throw new Error('An error ocurred!');
    });
    
    return response;
}

export const getUsers = async (login, password) => {
    const url = `http://localhost:8080/Library/users`;

    const response = await axios.get(url, {
        auth: {
          username: login,
          password: password
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        throw new Error('An error ocurred!');
    });
    
    return response;
}

export const addBook = async (login, password, title, author, year) => {
    const book = JSON.stringify({
        title: title,
        author: author,
        year: year
    });
    const url = `http://localhost:8080/Library/book/add`;
    const response = await axios.post(url, book, {
        auth: {
          username: login,
          password: password
        },
        headers: {
            'content-type': 'application/json'
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        throw new Error('An error ocurred!');
    });
    
    return response;
}

export const deleteBook = async (login, password, bookId) => {
    const url = `http://localhost:8080/Library/book/${bookId}/delete`;

    const response = await axios.delete(url, {
        auth: {
          username: login,
          password: password
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        throw new Error('An error ocurred!');
    });
    
    return response;
}

export const longerBorrowBookDate = async (login, password, bookId) => {
    const url = `http://localhost:8080/Library/book/${bookId}/longerDate`;

    const response = await axios.put(url, login, {
        auth: {
          username: login,
          password: password
        },
        headers: {
            'content-type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        throw new Error('An error ocurred!');
    });
    
    return response;
}

export const getBooksBorrowedByUser = async (login, password, userId) => {
    const url = `http://localhost:8080/Library/books/${userId}/borrowed`;

    const response = await axios.get(url, {
        auth: {
          username: login,
          password: password
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        throw new Error('An error ocurred!');
    });
    
    return response;
}

export const getUserBorrows = async (login, password, userId) => {
    const url = `http://localhost:8080/Library/books/user/${userId}`;

    const response = await axios.get(url, {
        auth: {
          username: login,
          password: password
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        throw new Error('An error ocurred!');
    });
    
    return response;
}

export const borrowBook = async (login, password, bookId, userId) => {
    const url = `http://localhost:8080/Library/book/${bookId}/user/${userId}/borrow`;

    const response = await axios.post(url, login , {
        auth: {
          username: login,
          password: password
        },
        headers: {
            'content-type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        throw new Error('An error ocurred!');
    });
    
    return response;
}

export const returnBook = async (login, password, bookId, userId) => {
    const url = `http://localhost:8080/Library/book/${bookId}/user/${userId}`;

    const response = await axios.delete(url, {
        auth: {
          username: login,
          password: password
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        throw new Error('An error ocurred!');
    });
    
    return response;
}

export const deleteUserById = async (login, password, userId) => {
  const url = `http://localhost:8080/Library/user/${userId}`;

  const response = await axios.delete(url, {
    auth: {
      username: login,
      password: password
    }
  }).then((response) => {
    return response;
  }).catch((error) => {
    throw new Error('An error ocurred!');
  })
  return response;
}

export const addNewUser = async (login, pass, username, password, role) => {

  const user = JSON.stringify({
      username: username,
      password: password,
      role: role
  });
  const url = `http://localhost:8080/Library/user/add`;
  const response = await axios.post(url, user, {
      auth: {
        username: login,
        password: pass
      },
      headers: {
          'content-type': 'application/json'
      }
  }).then((response) => {
      return response;
  }).catch((error) => {
      throw new Error('An error ocurred!');
  });

return response;
}
