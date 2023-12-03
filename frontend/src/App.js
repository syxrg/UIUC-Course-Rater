import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";

import Papa from 'papaparse';
import './App.css';
import Account from './components/Account';
import Browse from './components/Browse';
import Rate from './components/Rate';

function App() {
  const [csvData, setCsvData] = useState([]);
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    // Fetching CSV data
    const fetchCSVData = async () => {
      const response = await fetch('/courses.csv');
      const reader = response.body.getReader();
      const result = await reader.read();
      const text = new TextDecoder('utf-8').decode(result.value);

      Papa.parse(text, {
        complete: function (result) {
          console.log(result.data);
          setCsvData(result.data);
        },
        header: true, 
      });
    };

    // Fetching data from backend
    const fetchBackendData = async () => {
      try {
        const response = await fetch('/api');
        const data = await response.json();
        setBackendMessage(data.message);
      } catch (error) {
        console.error("Error fetching data from backend: ", error);
      }
    };

    fetchCSVData();
    fetchBackendData();
  }, []); 

  return (
    <div className="App">
      <div className="topnav">
        <NavLink exact to="/account">Account</NavLink>
        <NavLink to="/rate">Rate</NavLink>
        <NavLink to="/browse">Browse</NavLink>
      </div>
      <Routes>
        <Route index element={<Browse />} />
        <Route path="/account" element={<Account />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/rate" element={<Rate />} />
      </Routes>

      <div>
        <h2>CSV Data:</h2>
        <ul>
          {csvData.map((row, index) => (
            <li key={index}>
              {row.Name}
            </li>
          ))}
        </ul>
        <h2>Backend Message!!!:</h2>
        <p>{backendMessage}</p>
      </div>
    </div>
  );
}

export default App;
