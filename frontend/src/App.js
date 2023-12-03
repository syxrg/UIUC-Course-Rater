
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Routes, Route, NavLink, Navigate } from "react-router-dom";
import './App.css';
import Account from './components/Account';
import Browse from './components/Browse';
import Rate from './components/Rate';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [backendMessage, setBackendMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {

  const fetchBackendData = async () => {
    try {
      const response = await fetch('/api');
      const data = await response.json();
      setBackendMessage(data.message);
    } catch (error) {
      console.error("Error fetching data from backend: ", error);
    }
  };

  fetchBackendData();
}, []); 

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <div className="topnav">
            <NavLink to="/account" exact>
              Account
            </NavLink>
            <NavLink to="/rate" exact>
              Rate
            </NavLink>
            <NavLink to="/browse" exact>
              Browse
            </NavLink>
          </div>
          <Routes>
            <Route index element={<Browse />} />
            <Route path="/account" element={<Account />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/rate" element={<Rate />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
      <div>
        <h2>Backend Message!!!:</h2>
        <p>{backendMessage}</p>
      </div>
    </div>
  );
}

export default App;
