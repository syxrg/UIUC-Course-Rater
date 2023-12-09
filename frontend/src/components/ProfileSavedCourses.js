import React from "react";
import { Grid } from "@mui/material";

// TODO: wrap div in a Link component to link the div to the course page
const ProfileSavedCourses = () => {
  return (
    <div>
      <Grid
        container
        direction="column"
        marginBottom="15px"
        style={{
          padding: "20px",
          height: "100%",
          width: "100%",
          border: "1px solid #C9C7C6",
          borderRadius: "10px",
          boxShadow: "5px 5px 5px #C9C7C6",
        }}
      >
        <Grid item style={{ textAlign: "left", marginBottom: "5px" }}>
          <h1>Course Name</h1>
        </Grid>

        <Grid item style={{ textAlign: "left" }}>
          <div>Description</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileSavedCourses;
