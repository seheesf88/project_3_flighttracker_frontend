import React from 'react';
import { Link } from 'react-router-dom'

const Reports = (props) => {
  console.log(props)

  const reports = props.reports.map(report => {
    return <tr key={report._id}>
        <td>{report.date}</td>
        <td><Link to={`/${report._id}`}>{report.flightNum}</Link></td>
        <td>{report.airline}</td>
        <td>{report.status}</td>
        <td><Link className="btn btn-primary" to={`/${report._id}/edit`}>Edit</Link></td>
        <td><button className="close mr-5" type="button" aria-label="Close" onClick={props.deleteReport.bind(null, report._id)}><span className="pr-5" aria-hidden="true">&times;</span></button></td>
      </tr>
  });

  return (

    <div className="container">
      <div className="text-center my-5">
        <h1>Report List</h1>
      </div>
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col" className="mr-0">Date</th>
              <th scope="col">Flight#</th>
              <th scope="col">Airline</th>
              <th scope="col">Status</th>
              <th scope="col">Edit</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {reports}
          </tbody>
        </table>
    </div>
  )
}

export default Reports
