import React, { useState, useRef } from "react";
import { Button, Grid } from "@mui/material";
import "./Profile.css";
import "./ProfileSavedCourses";
import ProfileSavedCourses from "./ProfileSavedCourses";

const Profile = ({ handleLogout }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const lineRef = useRef(null);
  const username = localStorage.getItem("username");

  const handleTabClick = (index, e) => {
    setActiveTabIndex(index);

    // Adjust the width and left position of the line
    const line = lineRef.current;
    if (line) {
      line.style.width = e.target.offsetWidth + "px";
      line.style.left = e.target.offsetLeft + "px";
    }
  };

  const tabs = ["Ratings", "Saved Courses"];
  const contents = [
    <div key={0}>
      {/* <h2>Ratings</h2> */}
      <p>Ratings grids here</p>
    </div>,
    <div key={1}>
      {/* <h2>Saved Courses</h2> */}
      {/* <p>Saved Courses grids here</p> */}
      <ProfileSavedCourses></ProfileSavedCourses>
    </div>,
  ];

  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={10} direction="column">
          <h1 className="heyUser">Hey, {username}</h1>
        </Grid>

        <Grid item xs={2} direction="column">
          <div className="heyUser">
            <Button
              variant="outlined"
              pill
              onClick={handleLogout}
              style={{ color: "#7360ff", borderColor: "#7360ff" }}
            >
              Log out
            </Button>
          </div>
        </Grid>
      </Grid>

      <div className="box">
        <div className="container">
          <div className="tab_box">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab_btn ${
                  index === activeTabIndex ? "active" : ""
                }`}
                onClick={(e) => handleTabClick(index, e)}
              >
                {tab}
              </button>
            ))}
            <div ref={lineRef} className="line" />
          </div>
          <div className="content_box">{contents[activeTabIndex]}</div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Profile;
