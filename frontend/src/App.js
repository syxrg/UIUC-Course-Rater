import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Papa from "papaparse";
import "./App.css";
import Account from "./components/Account";
import Browse from "./components/Browse";
import Rate from "./components/Rate";
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
            <Route path="/browse" element={<Browse data={csvData}/>} />
            <Route path="/rate" element={<Rate />} />
            <Route path="/courses/:crn"  element={<Class data={csvData}/>} />
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
