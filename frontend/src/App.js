import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Papa from "papaparse";
import "./App.css";
import Profile from "./components/Profile";
import Browse from "./components/Browse";
import Rate from "./components/Rate";
import RateClasses from "./components/RateClasses";
import Class from './components/Class';
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [backendMessage, setBackendMessage] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [csvData, setCsvData] = useState([]);
  const [query, setQuery] = useState("");
  

  useEffect(() => {
    const fetchBackendData = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setBackendMessage(data.message);
      } catch (error) {
        console.error("Error fetching data from backend: ", error);
      }
    };

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

    fetchBackendData();
    fetchCSVData();
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <div className="topnav">
          <span className="title" href="#">Rate My Courses</span>
          <div className="tab">
            <NavLink to="/browse" exact>
              Browse
            </NavLink>
            <NavLink to="/rate" exact>
              Rate
            </NavLink>
            <NavLink to="/profile" exact>
              Profile
            </NavLink>
          </div>
          
          </div>
          <div className="navLine" />
          <Routes>
            <Route index element={<Browse />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/browse" element={<Browse data={csvData}/>} />
            <Route path="/browse/:crn"  element={<Class data={csvData}/>} />
            <Route path="/rate" element={<RateClasses data={csvData}/>} />
            <Route path="/rate/:crn"  element={<Rate data={csvData}/>} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
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
