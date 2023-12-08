
// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Browse.css";

const Browse = (props) => {
  const [query, setQuery] = useState("");
  const [buttonHoverStates, setButtonHoverStates] = useState({});
  const data = props.data;

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

  // useEffect(() => {
  //   // Fetching CSV data
  //   const fetchCSVData = async () => {
  //     try {
  //       const response = await fetch("/courses.csv");
  //       const reader = response.body.getReader();
  //       const result = await reader.read();
  //       const text = new TextDecoder("utf-8").decode(result.value);

  //       Papa.parse(text, {
  //         complete: function (result) {
  //           console.log(result.data);
  //           setCsvData(result.data);
  //         },
  //         header: true,
  //       });
  //     } catch (error) {
  //       console.error("Error fetching CSV data: ", error);
  //     }
  //   };

  //   fetchCSVData();
  // }, []);

  //filter by search
  // DOES NOT WORK RN
  // useEffect(() => {
  //   //console.log(query)
  //   if (query !== "") {
  //     let newcsvData = [];
  //     newcsvData = data.filter((x) => String(x.name).includes(query));
  //     setCsvData(newcsvData);
  //   } else {
  //     setCsvData(csvData);
  //   }
  // }, [query, csvData]);

  return (
    <div className="outer">
      <h1>Find a Course</h1>
      <div className="search-stuff">
        <TextField
          placeholder="Search by subject"
          onChange={(event) => setQuery(event.target.value)}
          value={query}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          // change width of search bar
          style={{ width: 800 }}
        />
      </div>
      <ul style={{ listStyleType: "none", padding: "30px" }}>
        <Grid 
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {data
            .filter(
              (row, index, self) =>
                self.findIndex((r) => r.Name === row.Name) === index
            )
            .map((row, index) => (
              <Grid item xs={3} key={index}>
                <Link to={`/courses/${row.CRN}`}>
                  <button className="grid"
                    style={{
                      padding: "20px",
                      height: "100%",
                      width: "100%",
                      border: buttonHoverStates[index] ? "1px solid light-gray" : "1px solid gray",
                      borderRadius: "10px",
                      background: "none",
                      boxShadow: buttonHoverStates[index] ? "5px 5px 5px #C9C7C6" : "none",
                      // background: buttonHoverStates[index] ? "#EBECF0" : "none",
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    {row.Subject} {row.Number} <br />
                    {row.Name}
                  </button>
                </Link>
              </Grid>
            ))}
        </Grid>
      </ul>
    </div>
  );
};

export default Browse;
