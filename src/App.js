import React, { useEffect, useState } from 'react';

import Papa from 'papaparse';
import './App.css';

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
        <a href="#login">
          Login
        </a>
        <a href="#rate">Rate</a>
        <a href="#browse" class="active">Browse</a>
      </div>
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
  );
}

export default App;
