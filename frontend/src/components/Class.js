import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { Grid, Rating, Button, IconButton } from "@mui/material";
import "./Class.css";

const Class = (props) => {
  const routeParams = useParams();
  const csvData = props.data;

  const { crn } = useParams();
  const [reviews, setReviews] = useState([]);
  const [bookmark, setBookmark] = useState(false);

  useEffect(() => {
    fetch(`/api/reviews/${crn}`)
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, [crn]);

  const findClassByCRN = (array, crn) => {
    return array.find((element) => {
      return element.CRN === crn;
    });
  };

  const handleBookmark = (event) => {
    setBookmark(!bookmark);

    // add code to update db
  };

  const match = findClassByCRN(csvData, routeParams.crn);
  console.log(match);
  return (
    <div className="App">
      {match && (
        <>
          <div
            style={{
              textAlign: "left",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            <Link to="/browse">
              <button className="returnMenu fa fa-arrow-left"></button>
            </Link>

            <h1 className="courseTitle">
              {match.Subject} {match.Number}: {match.Name}{" "}
              {bookmark ? (
                <>
                  <IconButton
                    onClick={handleBookmark}
                    sx={{ color: "#7360ff" }}
                  >
                    <BookmarkIcon fontSize="large" />
                  </IconButton>
                  {/* <BookmarkIcon onClick={handleBookmark}/> */}
                </>
              ) : (
                <>
                  <IconButton
                    onClick={handleBookmark}
                    sx={{ color: "#7360ff" }}
                  >
                    <BookmarkBorderIcon fontSize="large" />
                  </IconButton>
                  {/* <BookmarkBorderIcon onClick={handleBookmark}/> */}
                </>
              )}
            </h1>

            <div className="align" style={{ paddingTop: "10px" }}>
              Description: {match.Description}
            </div>

            <Button
              variant="contained"
              style={{
                marginLeft: "25px",
                marginTop: "15px",
                backgroundColor: "#7360ff",
              }}
            >
              <Link to={`/rate/${match.CRN}`} style={{ color: "white" }}>
                Rate this course
              </Link>
            </Button>

            {reviews.map((review, index) => (
              <div
                key={index}
                className="review-grid"
                style={{
                  border: "1px solid #BEBEBE",
                  borderRadius: "10px",
                  margin: "20px",
                }}
              >
                <Grid
                  container
                  direction="row"
                  style={{ textAlign: "center", margin: "20px" }}
                >
                  <Grid item xs={12} style={{ marginBottom: "10px" }}>
                    <strong>Review by:</strong> {review.username} <br />
                    <strong>Professor:</strong> {review.professor} <br />
                    <strong>Term:</strong> {review.term} <br />
                    <strong>Submitted on:</strong>{" "}
                    {new Date(review.created_at).toLocaleDateString()}
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>Easy A?</div>

                    <div>{review.easy_a}</div>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>Estimated hrs/week</div>

                    <div>{review.hours_per_week}</div>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>Well taught?</div>

                    <div>{review.course_well_taught}</div>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>Fun?</div>

                    <Rating value={parseFloat(review.fun_rating)} readOnly />
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>Overall</div>

                    <Rating
                      value={parseFloat(review.overall_rating)}
                      readOnly
                    />
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>Comments</div>
                    <div>{review.comments}</div>
                  </Grid>
                </Grid>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Class;
