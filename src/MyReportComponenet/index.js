import React from 'react';
import { Link } from 'react-router-dom'

const MyReportComponenet = (props) => {
  const myReports = props.myReports.slice().reverse().map(report => {
    if(report.authorId === localStorage.getItem('userId')){
    return(
        <tr key={report._id}>
        <td>{report.date}</td>
        <td><Link to={`/${report._id}`}>{report.flightNum}</Link></td>
        <td>{report.airline}</td>
        <td>{report.status}</td>
        <td><Link className="btn btn-primary" to={`/${report._id}/edit`}>Edit</Link>
        <button className="close pt-2 ml-0" type="button" onClick={props.deleteReport.bind(null, report._id)}><span className="pr-5">X</span></button>
        </td>
      </tr>
      )
    }
  });

  return (

    <div className="container">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col" className="mr-0">Date</th>
              <th scope="col">Flight#</th>
              <th scope="col">Airline</th>
              <th scope="col">Status</th>
              <th scope="col">Edit/Remove</th>
            </tr>
          </thead>
          <tbody>
            {myReports}
          </tbody>
        </table>
    </div>
  )
}

export default MyReportComponenet
