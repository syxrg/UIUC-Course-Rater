import React, { useEffect, useState } from "react";
import Papa from "papaparse";

import {
  Button,
  Grid,
  Switch,
  FormControlLabel,
  TextField,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const Browse = () => {
  const [csvData, setCsvData] = useState([]);
  const [query, setQuery] = useState("");
  const [buttonHoverStates, setButtonHoverStates] = useState({});

  const handleMouseEnter = (index) => {
    setButtonHoverStates((prevStates) => ({
      ...prevStates,
      [index]: true,
    }));
  };

  const handleMouseLeave = (index) => {
    setButtonHoverStates((prevStates) => ({
      ...prevStates,
      [index]: false,
    }));
  };

  useEffect(() => {
    // Fetching CSV data
    const fetchCSVData = async () => {
      try {
        const response = await fetch("/courses.csv");
        const reader = response.body.getReader();
        const result = await reader.read();
        const text = new TextDecoder("utf-8").decode(result.value);

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
      <h1>Browse Classes Here</h1>
      <div className="search-stuff">
        <TextField
          placeholder="Search for classes"
          onChange={(event) => setQuery(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          style={{ width: 800 }}
        />
      </div>
      <ul style={{ listStyleType: "none", padding: "30px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{
            paddingTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {csvData
            .filter(
              (row, index, self) =>
                self.findIndex((r) => r.Name === row.Name) === index
            )
            .map((row, index) => (
              <Grid item xs={3} key={index}>
                <button
                  style={{
                    padding: "20px",
                    height: "100%",
                    width: "100%",
                    border: "1px solid gray",
                    borderRadius: "10px",
                    background: buttonHoverStates[index] ? "#EBECF0" : "none",
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {row.Subject} {row.Number} <br />
                  {row.Name}
                </button>
              </Grid>
            ))}
        </Grid>
      </ul>
    </div>
  );
};

export default Browse;
