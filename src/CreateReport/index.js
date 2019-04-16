import React, { Component } from 'react';

class CreateReport extends Component {
  constructor(){
    super()

    this.state = {
      flightNum : '',
      airline : '',
      date : '',
      estDeparture: '',
      estArrival: '',
      status: '',
      issue: '',
    }
  }


  handleInput = (e) => {

    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render(){
    return(
      <div className="container">
        <div className="text-center mt-4">
          <h1>Create Report</h1>
        </div>
        <div className="row mb-4">
          <div className="col-md-8 offset-2 mt-5">
            <form onSubmit={this.props.addReport.bind(null, this.state)}>
              <div className="form-group">
                <label className="mb-0" htmlFor="flightNum">Flight Number:</label>
                  <input name="flightNum" id="flightNum" type="text" className="form-control" onChange={this.handleInput} placeholder="ex)UA756" required/>
                  <small className="form-text text-muted pl-1">Enter flight# in Capital letter</small>
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="airline">Airline:</label>
                  <input name="airline" id="airline" type="text" className="form-control" onChange={this.handleInput} placeholder="ex)UA or United Airline" required/>
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="date">Date:</label>
                  <input name="date" id="date" type="date" className="form-control" onChange={this.handleInput} placeholder="ex)DD/MM/YYYY" required/>
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="estDeparture">Estimated departure time:</label>
                  <input name="estDeparture" id="estDeparture" type="time" className="form-control" onChange={this.handleInput} required/>
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="estArrival">Estimated arrival time:</label>
                  <input name="estArrival" id="estArrival" type="time" className="form-control" onChange={this.handleInput} required/>
              </div>
              <div className="form-group mt-4 mb-4">
                <label className="mb-0" htmlFor="status">Status:</label>
                  <select name="status" id="status" onChange={this.handleInput} required>
                    <option value="" selected disabled hidden>Select One</option>
                    <option value="Delay">Delay</option>
                    <option value="Arrived Early">Arrived Early</option>
                  </select>
              </div>
              <div className="form-group">
                <label className="mb-0" htmlFor="issue">Issue:</label>
                  <textarea name="issue" id="issue" className="form-group py-4 px-4" rows="8" cols="10" onChange={this.handleInput} placeholder="ex)Flight is looking for a gate to park">
                  </textarea>
              </div>
              <div className="text-center form-group">
                <input type="submit" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default CreateReport
