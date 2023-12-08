import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Rating,
  TextField,
} from "@mui/material";
import "./Class.css";

const Class = (props) => {
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
    <div className="App">
      {match ? (
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
              {" "}
              {match.Subject} {match.Number}: {match.Name}
              <br />
              {match.CRN}
            </h1>
            <div className="rating"
              style={{
                fontSize: "36px",
              }}
            >
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              ></link>
            </div>
            <div className="description" style={{ paddingTop: "10px" }}>
              Description: {match.Description}
            </div>
            <div className="grids"
              style={{
                border: "1px solid #BEBEBE",
                borderRadius: "10px",
                height: "100px",
                margin: "20px",
              }}
            >
              <Grid 
                container
                direction="row"
                style={{ textAlign: "center", margin: "20px" }}
              >
                <Grid item xs={2} direction="column">
                  <div
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #808080",
                    }}
                  >
                    Yes
                  </div>
                  <div>Easy A?</div>
                </Grid>
                <Grid item xs={2} direction="column">
                  <div
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #808080",
                    }}
                  >
                    10
                  </div>
                  <div>Estimated hrs/week</div>
                </Grid>
                <Grid item xs={2} direction="column">
                  <div
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #808080",
                    }}
                  >
                    Yes
                  </div>
                  <div>Well taught?</div>
                </Grid>
                <Grid item xs={2} direction="column">
                  <div
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #808080",
                    }}
                  >
                    4/5
                  </div>
                  <div>Fun?</div>
                </Grid>
                <Grid item xs={2} direction="column">
                  <div
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #808080",
                    }}
                  >
                    4/5
                  </div>
                  <div>Overall</div>
                </Grid>
                <Grid item xs={2} direction="column">
                  <div>A+</div>
                  <div>Grade Received</div>
                </Grid>
              </Grid>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Class;
