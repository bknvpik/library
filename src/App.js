import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './containers/dashboard/Dashboard';
import Homepage from './containers/homepage/Homepage';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(Object.keys(user).length);
  }, [user])
  
  return (
    <div className="App">
      {
        Object.keys(user).length === 0
        ? <Homepage user={ user } setUser={ setUser } />
        : <Dashboard user={ user } setUser={ setUser } />
      }
    </div>
  );
}

export default App;
