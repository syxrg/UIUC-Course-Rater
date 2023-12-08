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
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [csvData, setCsvData] = useState([]);
  const [query, setQuery] = useState("");
  

  useEffect(() => {
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

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  

  return (
    <div className="App">
      <div className="topnav">
        {isLoggedIn && (
          <>
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
          </>
        )}
      </div>
      <Routes>
        <Route path="/login" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/browse" />} />
        <Route path="/register" element={!isLoggedIn ? <Register setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/browse" />} />

        {isLoggedIn ? (
          <>
            <Route index element={<Browse />} />
            <Route path="/profile" element={<Profile handleLogout={handleLogout} />} />
            <Route path="/browse" element={<Browse data={csvData}/>} />
            <Route path="/browse/:crn" element={<Class data={csvData}/>} />
            <Route path="/rate" element={<RateClasses data={csvData}/>} />
            <Route path="/rate/:crn" element={<Rate data={csvData}/>} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}

        {isLoggedIn && (
          <Route path="*" element={<Navigate to="/browse" />} />
        )}
      </Routes>


    </div>
  );
}

export default App;