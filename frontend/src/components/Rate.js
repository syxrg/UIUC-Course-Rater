import "./Rate.css";
import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Rating,
  TextField,
  Button,
  MenuItem
} from "@mui/material";
import React, { useState } from "react";

import { useParams } from "react-router-dom";

const Rate = (props) => {
  const { crn } = useParams();
  const csvData = props.data;
  const [professor, setProfessor] = useState('');
  const [term, setTerm] = useState('');
  const [easyA, setEasyA] = useState('');
  const [hoursPerWeek, setHoursPerWeek] = useState('');
  const [courseWellTaught, setCourseWellTaught] = useState('');
  const [funRating, setFunRating] = useState(0);
  const [overallRating, setOverallRating] = useState(0);
  const [comments, setComments] = useState('');
  const routeParams = useParams();
  const username = localStorage.getItem("username"); 
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      username, 
      crn,
      professor,
      term,
      easy_a: easyA,
      hours_per_week: hoursPerWeek,
      course_well_taught: courseWellTaught,
      fun_rating: funRating,
      overall_rating: overallRating,
      comments
    };

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true); 
        console.log('Review submitted successfully');
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const handleProfessorChange = (event) => {
    setProfessor(event.target.value);
    console.log("Professor selected:", event.target.value);

  };

  const handleCourseWellTaughtChange = (event) => {
    setCourseWellTaught(event.target.value);
    console.log("Course Well Taught:", event.target.value);
  };
  
  const handleEasyAChange = (event) => {
    setEasyA(event.target.value);
    console.log("Easy A:", event.target.value);
  };

  const handleHoursPerWeek = (event) => {
    setHoursPerWeek(event.target.value);
    console.log("Hours per week:", event.target.value);

  }

  const handleComments = (event) => {
    setComments(event.target.value);
    console.log("Comments:", event.target.value);
  }

  const handleWellTaught = (event) => {
    setCourseWellTaught(event.target.value);
    console.log("Well Taught?:", event.target.value);

  }

  const handleTermChange = (event) => {
    setTerm(event.target.value);
    console.log("Term selected:", event.target.value);

  };


  const handleFunRatingChange = (newValue) => {
    setFunRating(newValue);
    console.log("Fun rating:", newValue);
  };

  const handleOverallRatingChange = (newValue) => {
    setOverallRating(newValue);
    console.log("Overall rating:", newValue);
  };

  const findClassByCRN = (array, crn) => {
    return array.find((element) => {
      return element.CRN === crn;
    });
  };

  const findProfs = (array, subject, number) => {
    let temp = array.filter((element) => {
      return (element.Subject === subject & element.Number == number);
    });
    let unique = []
    temp.forEach(element => {
      element.Instructors.split(";").forEach(prof => {
        if (!unique.includes(prof)) {
          unique.push(prof);
        }
      })
    })
    return unique
  };

  const match = findClassByCRN(csvData, routeParams.crn);
  const matches = findProfs(csvData, match.Subject, match.Number);
  console.log(match);
  console.log(matches); 

  return (
    <div>
            
            <h1 className="courseTitle">
              {match.Subject} {match.Number}: {match.Name}
              <br />
              {match.CRN}
            </h1>


      <Grid container direction="column" className="center-stuff">
        <Grid
          container
          item
          direction="column"
          marginBottom="25px"
          style={{
            padding: "20px",
            height: "100%",
            width: "70%",
            border: "1px solid #C9C7C6",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px #C9C7C6",
          }}
        >
          <Grid item marginBottom="8px" className="align-left">
            <text>Select your professor</text>
          </Grid>
          <Grid item>
            <TextField
              id="select-prof"
              select
              value={professor}
              onChange={handleProfessorChange}
              helperText="Please select your professor"
              size="small"
            >
              {matches.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid
          container
          item
          direction="column"
          marginBottom="25px"
          style={{
            padding: "20px",
            height: "100%",
            width: "70%",
            border: "1px solid #C9C7C6",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px #C9C7C6",
          }}
        >
          <Grid item marginBottom="8px" className="align-left">
            <text>When did you take this class?</text>
          </Grid>
          <Grid item>
            <TextField
              id="select-term"
              select
              value={term}
              onChange={handleTermChange}
              helperText="Please select your term"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid
          container
          item
          direction="column"
          marginBottom="25px"
          style={{
            padding: "20px",
            height: "100%",
            width: "70%",
            border: "1px solid #C9C7C6",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px #C9C7C6",
          }}
        >
          <Grid item marginBottom="8px" className="align-left">
            <text>Easy A?</text>
          </Grid>

          <Grid item className="center-stuff">
            <RadioGroup
              aria-labelledby="easy-a-buttons-group-label"
              name="easy-a-buttons-group"
              row
              value={easyA}
              onChange={handleEasyAChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Grid>
        </Grid>

        <Grid
          container
          item
          direction="column"
          marginBottom="25px"
          style={{
            padding: "20px",
            height: "100%",
            width: "70%",
            border: "1px solid #C9C7C6",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px #C9C7C6",
          }}
        >
          <Grid item marginBottom="8px" className="align-left">
            <text>Estimated hours per week?</text>
          </Grid>
          <Grid item>
            <TextField
              id="estimated-hours"
              helperText="Please type your estimated time commitment"
              size="small"
              value={hoursPerWeek}
              onChange={handleHoursPerWeek}
            />
          </Grid>
        </Grid>

        <Grid
          container
          item
          direction="column"
          marginBottom="25px"
          style={{
            padding: "20px",
            height: "100%",
            width: "70%",
            border: "1px solid #C9C7C6",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px #C9C7C6",
          }}
        >
          <Grid item marginBottom="8px" className="align-left">
            <text>Is this course well taught?</text>
          </Grid>
          <Grid item className="center-stuff">
            <RadioGroup
              aria-labelledby="easy-a-buttons-group-label"
              name="easy-a-buttons-group"
              row
              value={courseWellTaught}
              onChange={handleCourseWellTaughtChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Grid>
        </Grid>

        <Grid
          container
          item
          direction="column"
          marginBottom="25px"
          style={{
            padding: "20px",
            height: "100%",
            width: "70%",
            border: "1px solid #C9C7C6",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px #C9C7C6",
          }}
        >
          <Grid item marginBottom="8px" className="align-left">
            <text>How fun is this course?</text>
          </Grid>
          <Grid item>
            <center>
              <Rating
                name="fun-rating"
                value={funRating}
                onChange={(event, newValue) => handleFunRatingChange(newValue)}
                defaultValue={0}
                precision={0.5}
                size="large"
              />
            </center>
          </Grid>
        </Grid>

        <Grid
          container
          item
          direction="column"
          marginBottom="25px"
          style={{
            padding: "20px",
            height: "100%",
            width: "70%",
            border: "1px solid #C9C7C6",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px #C9C7C6",
          }}
        >
          <Grid item marginBottom="8px" className="align-left">
            <text>How would you rate this course overall?</text>
          </Grid>
          <Grid item>
            <center>
              <Rating
                name="overall-rating"
                defaultValue={0}
                precision={0.5}
                value={overallRating}
                onChange={(event, newValue) => handleOverallRatingChange(newValue)}
                size="large"
              />
            </center>
          </Grid>
        </Grid>

        <Grid
          container
          item
          direction="column"
          marginBottom="25px"
          style={{
            padding: "20px",
            height: "100%",
            width: "70%",
            border: "1px solid #C9C7C6",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px #C9C7C6",
          }}
        >
          <Grid item marginBottom="8px" className="align-left">
            <text>Write a review</text>
          </Grid>
          <Grid item>
            <TextField
              className="text-box"
              id="review-text"
              label="What do you want other students to know about this course?"
              multiline
              rows={6}
              placeholder="Type your review here"
              value={comments}
              onChange={handleComments}
            />
          </Grid>
        </Grid>
      </Grid>
      {isSubmitted ? (
  <div className="submit-message">Your review has been submitted!</div>
) : (
<Button style={{ paddingBottom: '40px' }} onClick={handleSubmit}>
  Submit Rating
</Button>
)}      
    </div>

  );
};

export default Rate;
