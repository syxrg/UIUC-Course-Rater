import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";

import Papa from 'papaparse';
import './App.css';
import Account from './components/Account';
import Browse from './components/Browse';
import Rate from './components/Rate';

function App() {
  const [csvData, setCsvData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/courses.csv');
      const reader = response.body.getReader();
      const result = await reader.read();
      const text = new TextDecoder('utf-8').decode(result.value);

      Papa.parse(text, {
        complete: function (result) {
          // Parsed data in result.data
          console.log(result.data);
          setCsvData(result.data);
        },
        header: true, 
      });
    };

    fetchData();
  }, []); 

  return (
    <div className="App">
      <div class="topnav">
        <NavLink exact to="/account">Account</NavLink>
        {/* <a href="#login">
          Login
        </a> */}
        <NavLink to="/rate">Rate</NavLink>
        {/* <a href="#rate">Rate</a> */}
        <NavLink to="/browse">Browse</NavLink>
        {/* <a href="#browse" class="active">Browse</a> */}
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
        </div>
    </div>
    //test
  );
}

export default App;
