import React from 'react';

const EditReport = (props) => {
    return(
      <div className="container">
        <div className="text-center mt-4 pb-5">
          <h1>Edit Report</h1>
        </div>
        <div className="row mb-4">
          <div className="col-md-8 offset-2 mt-5">
            <form onSubmit={props.updateReport}>
              <div className="form-group">
                <label className="mb-0" htmlFor="flightNum">Flight Number:</label>
                  <input name="flightNum" id="flightNum" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.report.flightNum} required/>
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="airline">Airline:</label>
                  <input name="airline" id="airline" type="text" className="form-control" onChange={props.handleEditFormInput} value={props.report.airline} required/>
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="date">Date:</label>
                  <input name="date" id="date" type="date" className="form-control" onChange={props.handleEditFormInput} value={props.report.date} required/>
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="estDeparture">Estimated departure time:</label>
                  <input name="estDeparture" id="estDeparture" type="time" className="form-control" onChange={props.handleEditFormInput} value={props.report.estDeparture} required/>
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="estArrival">Estimated arrival time:</label>
                  <input name="estArrival" id="estArrival" type="time" className="form-control" onChange={props.handleEditFormInput} value={props.report.estArrival} required />
              </div>
              <div className="form-group mt-4 mb-4">
                <label className="mb-0" htmlFor="status">Status:</label>
                  <select name="status" id="status" onChange={props.handleEditFormInput} value={props.report.status}>
                    <option value="Arrived early">Arrived early</option>
                    <option value="Delay">Delay</option>
                  </select>
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="issue">Issue:</label>
                  <textarea name="issue" id="issue" className="form-group px-4 py-4" rows="8" cols="90" onChange={props.handleEditFormInput} value={props.report.issue} >
                  </textarea>
              </div>
              <div className="text-center">
              <input type="submit" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}


export default EditReport
