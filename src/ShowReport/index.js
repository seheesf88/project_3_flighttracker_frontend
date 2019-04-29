import React from 'react';

const ShowReport = (props) => {
  console.log(props);
  return(
    <div className="container">
      <div className="text-center mt-4 pb-5">
        <h1>{props.report.flightNum}</h1>
      </div>
      <div className="row mb-4">
        <div className="col-8 offset-3">
          <div className="row">
            <div className="col-4 offset-1 mt-3">
              <p className="infoList">Flight Number :</p>
              <p className="infoList">Airline :</p>
              <p className="infoList">Date :</p>
              <p className="infoList">Estimated Depature time:</p>
              <p className="infoList">Estimated Arrival Time:</p>
              <p className="infoList">Status :</p>
              <p className="infoList">Issue :</p>
              <p className="infoList">Report by :</p>
            </div>
            <div className="col-4 offset-1 mt-3">
              <p className="infoData">{props.report.flightNum}</p>
              <p className="infoData">{props.report.airline}</p>
              <p className="infoData">{props.report.date}</p>
              <p className="infoData">{props.report.estDeparture}</p>
              <p className="infoData">{props.report.estArrival}</p>
              <p className="infoData">{props.report.status}</p>
              <p className="infoData">{props.report.issue ? props.report.issue : `There is no comment`}</p>
              <p className="infoData">{props.report.authorname}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowReport
