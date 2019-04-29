import React from 'react';
import { Link } from 'react-router-dom'

const Reports = (props) => {
  console.log(props)
  // console.log('hohohohohoho', localStorage.getItem('userId'));
  // console.log('huhuhuhuhuhuh', localStorage.getItem('username'));

  const reports = props.reports.reverse().map(report => {

    return <tr key={report._id}>
        <td>{report.date}</td>
        <td><Link to={`/${report._id}`}>{report.flightNum}</Link></td>
        <td>{report.airline}</td>
        <td>{report.status}</td>
        <td>{report.authorname}</td>
        { localStorage.getItem('userId') === report.authorId ?
        <td><Link className="btn btn-primary" to={`/${report._id}/edit`}>Edit</Link>
        <button className="close pt-2 ml-0" type="button" onClick={props.deleteReport.bind(null, report._id)}><span className="pr-5">X</span></button>
        </td>
        : <div></div>}
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
              <th scope="col">Report By</th>
              <th scope="col">Edit/Remove</th>
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


//<button className="close" type="button" aria-label="Close" onClick={props.deleteReport.bind(null, report._id)}><span className="pr-5" aria-hidden="true">&times;</span></button>
