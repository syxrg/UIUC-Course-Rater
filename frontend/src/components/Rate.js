import "./Rate.css";
import { FormControlLabel, Grid, RadioGroup, TextField } from "@mui/material";

const Rate = () => {
  return (
    <div>
      <h1>Rate Your Course</h1>

      <h2 class="alignLeft">Course Name</h2>
      <Grid container>
        <Grid container item xs={6} direction="column" paddingLeft="25px">
          <Grid container item xs={6} direction="row">
            <Grid item>
              <text>Select professor</text>
            </Grid>
            <Grid item alignContent="right" marginLeft="50px">
              <TextField
                id="select-prof"
                select
                helperText="Please select your professor"
              ></TextField>
            </Grid>
          </Grid>

          <Grid container item xs={6} direction="row">
            <Grid item>
              <text>When did you take this class?</text>
            </Grid>
            <Grid item alignContent="right" marginLeft="50px">
              <TextField
                id="select-term"
                select
                helperText="Please select your term"
              ></TextField>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={6}
          direction="column"
          paddingLeft="25px"
          paddingRight="25px"
        >
          <TextField
            id="review-text"
            label="Your Review"
            multiline
            rows={4}
            placeholder="Type your review here"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Rate;
