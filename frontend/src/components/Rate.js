import "./Rate.css";
import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Rating,
  TextField,
} from "@mui/material";

import { useParams } from "react-router-dom";

const Rate = (props) => {
  const routeParams = useParams();
  const csvData = props.data;

  const findClassByCRN = (array, crn) => {
    return array.find((element) => {
      return element.CRN === crn;
    });
  };

  const match = findClassByCRN(csvData, routeParams.crn);
  console.log(match);
  return (
    <div>
      <br></br>
      <h1 className="courseTitle">
              {" "}
              {match.Subject} {match.Number}: {match.Name}
              <br />
              {match.CRN}
            </h1>
      <br></br>
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
              helperText="Please select your professor"
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
            <text>When did you take this class?</text>
          </Grid>
          <Grid item>
            <TextField
              id="select-term"
              select
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
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Rate;
