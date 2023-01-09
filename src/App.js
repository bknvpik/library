import { createTheme, ThemeProvider } from '@mui/material';
import { cyan, grey, lightBlue } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './containers/dashboard/Dashboard';
import Homepage from './containers/homepage/Homepage';

function App() {
  const [user, setUser] = useState({});

  const theme = createTheme({
      palette: {
        primary: {
          main: grey[600]
        },
        secondary: lightBlue,
      }
  });
  
  useEffect(() => {
    console.log(Object.keys(user).length);
  }, [user])
  
  return (
    <ThemeProvider theme={ theme }>
      <div className="App" style={{ height: '100vh' }}>
        {
          Object.keys(user).length === 0
          ? <Homepage user={ user } setUser={ setUser } />
          : <Dashboard user={ user } setUser={ setUser } />
        }
      </div>
    </ThemeProvider>
  );
}

export default App;
