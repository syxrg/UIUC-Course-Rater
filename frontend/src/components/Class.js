import { useParams } from "react-router-dom"; 

const Class = (props) => {
  const routeParams = useParams();
  const csvData = props.data

  const findClassByCRN = ((array, crn) => {
    return array.find((element) => {
      return element.CRN === crn
    })
  })

  const match = findClassByCRN(csvData, routeParams.crn)
  console.log(match)
    return (
      <div className="App">
        {match ? (
        <>
          <h1> {match.Subject} {match.Number}
           <br />
            {match.Name}
          <br />
          {match.CRN}</h1>
        </>
        ): (
        <>
        </>)}
      </div>
    )
  };
  
  export default Class;