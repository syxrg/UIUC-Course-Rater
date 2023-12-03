import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const Browse = () => {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    // Fetching CSV data
    const fetchCSVData = async () => {
      try {
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
      } catch (error) {
        console.error("Error fetching CSV data: ", error);
      }
    };

    fetchCSVData();
  }, []);

  return (
    <div>
      <h1>Browse Stuff Here</h1>
      <h2>CSV Data:</h2>
      <ul>
        {csvData.map((row, index) => (
          <li key={index}>{row.Name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Browse;
