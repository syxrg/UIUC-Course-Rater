import "./Rate.css";
import { FormControlLabel, Grid, RadioGroup, TextField } from "@mui/material";

const Rate = () => {
  return (
    <div>
      <h1>Rate Your Course</h1>

      <h2 class="alignLeft">Course Name</h2>
      <Grid container direction="column">
        <Grid container item direction="column" marginBottom="15px">
          <Grid item marginBottom="8px">
            <center>
              <text>Select professor</text>
            </center>
          </Grid>
          <Grid item>
            <TextField
              id="select-prof"
              select
              helperText="Please select your professor"
            />
          </Grid>
        </Grid>

        <Grid container item direction="column" marginBottom="15px">
          <Grid item marginBottom="8px">
            <text>When did you take this class?</text>
          </Grid>
          <Grid item>
            <TextField
              id="select-term"
              select
              helperText="Please select your term"
            />
          </Grid>
        </Grid>

        <Grid container item direction="column" marginBottom="15px">
          <Grid item marginBottom="8px">
            <text>Easy A?</text>
          </Grid>
          <Grid item>
            <TextField id="easy-a-yes-no" select />
          </Grid>
        </Grid>

        <Grid container item direction="column" marginBottom="15px">
          <Grid item marginBottom="8px">
            <text>Write a review</text>
          </Grid>
          <Grid item>
            <TextField
              id="review-text"
              label="What do you want other students to know about this course?"
              multiline
              rows={6}
              placeholder="Type your review here"
            />
          </Grid>
        </Grid>

        <Grid container item direction="column" marginBottom="15px">
          <Grid item marginBottom="8px">
            <text>Estimated hours per week?</text>
          </Grid>
          <Grid item>
            <TextField
              id="estimated-hours"
              helperText="Please type your estimate time commitment"
            />
          </Grid>
        </Grid>

        <Grid container item direction="column" marginBottom="15px">
          <Grid item marginBottom="8px">
            <text>Is this course well taught?</text>
          </Grid>
          <Grid item>
            <TextField id="well-taught-yes-no" select />
          </Grid>
        </Grid>

        <Grid container item direction="column" marginBottom="15px">
          <Grid item marginBottom="8px">
            <text>How fun is this course?</text>
          </Grid>
          <Grid item>
            <TextField id="fun-stars" select />
          </Grid>
        </Grid>

        <Grid container item direction="column" marginBottom="15px">
          <Grid item marginBottom="8px">
            <text>How would you rate this course overall?</text>
          </Grid>
          <Grid item>
            <TextField id="overall-stars" select />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Rate;
