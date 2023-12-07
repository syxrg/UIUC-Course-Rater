import { useParams } from "react-router-dom";
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
            <h1>
              {" "}
              {match.Subject} {match.Number}: {match.Name}
              <br />
              {match.CRN}
            </h1>
            <div
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
            <div style={{ paddingTop: "10px" }}>
              Description: {match.Description}
            </div>
            <div
              style={{
                border: "1px solid #BEBEBE",
                borderRadius: "10px",
                height: "100px",
                margin: "20px",
              }}
            >
              INFO
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
