import React, { useState, useRef } from "react";
import "./Profile.css";

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
      <p>Saved Courses grids here</p>
    </div>,
  ];

  return (
    <div>
      {/* <h1>Profile</h1> */}
      <h1 className="heyUser">Hey, {username}</h1>
      <div className="box">
        <div className="container">
          <div className="tab_box">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab_btn ${index === activeTabIndex ? "active" : ""}`}
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
      <button className="logoutButton" onClick={handleLogout}>Logout</button>

      <div>
    </div>
    </div>
  );
};

export default Profile;
