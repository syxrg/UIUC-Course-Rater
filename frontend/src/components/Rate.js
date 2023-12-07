import "./Rate.css";
import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Rating,
  TextField,
} from "@mui/material";

const Rate = () => {
  return (
    <div>
      <h1 class="alignLeft">Course Name</h1>
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

          <Grid item className="radio-group">
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
              helperText="Please type your estimated time commitment"
            />
          </Grid>
        </Grid>

        <Grid
          container
          item
          direction="column"
          marginBottom="15px"
          className="radio-group"
        >
          <Grid item marginBottom="8px">
            <text>Is this course well taught?</text>
          </Grid>
          <Grid item>
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

        <Grid container item direction="column" marginBottom="15px">
          <Grid item marginBottom="8px">
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

        <Grid container item direction="column" marginBottom="15px">
          <Grid item marginBottom="8px">
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
      </Grid>
    </div>
  );
};

export default Rate;
