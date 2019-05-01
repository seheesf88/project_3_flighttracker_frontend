import React, { Component } from 'react';
import Nav from '../Nav'
import Header from '../Header';
import Footer from '../Footer'
// import CreateReport from '../CreateReport';


class CreateContainer extends Component {
  constructor(){
    super()
    this.state = {
      // reports: [],
      report : {
        flightNum : '',
        airline : '',
        date : '',
        estDeparture: '',
        estArrival: '',
        status: '',
        issue: '',
      },
    }
  }

  handleInput = (e) => {
    const updatedChange = {
      ...this.state.report
    }
    updatedChange[e.target.name] = e.target.value;
    this.setState({
      report: updatedChange
    })
  }

  handleReportSubmit = (e) => {
    e.preventDefault();
    const updatedReport = {
      ...this.state.report
    }
    this.addReport(updatedReport)
    this.setState({
      report : {
        flightNum : '',
        airline : '',
        date : '',
        estDeparture: '',
        estArrival: '',
        status: '',
        issue: '',
      }
    })
  }

  addReport = async(updatedReport) => {
    console.log('up', updatedReport);
    console.log('report json', JSON.stringify(updatedReport));
    try{
        const response = await fetch(`${process.env.REACT_APP_API}/api/v1/reports`, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(updatedReport),
          headers: {
            'Content-Type' : 'application/json'
          }
        });


        if(!response.ok){
          throw Error(response.statusText)
        }

        console.log('addreport=>', response);
        const parsedCreateReport = await response.json();
        console.log('out....', parsedCreateReport);
        console.log(parsedCreateReport.data._id);

        localStorage.setItem('reportId', parsedCreateReport.data._id)
        localStorage.setItem('authorId', parsedCreateReport.data.authorId)
        localStorage.setItem('authorname', parsedCreateReport.data.authorname)

        this.props.history.push('/report');

      } catch(err) {
        console.log('cannot make report');
      }
    }

  render(){
    console.log('THIS IS PROPS', this.props);
    return(
      <div>
        <Header />
        <Nav />
        <div className="container">
          <div className="text-center mt-4">
            <h1>Create Report</h1>
          </div>
          <div className="row mb-4">
            <div className="col-md-8 offset-2 mt-5">
              <form onSubmit={this.handleReportSubmit}>
                <div className="form-group">
                  <label className="mb-0" htmlFor="flightNum">Flight Number:</label>
                    <input name="flightNum" id="flightNum" type="text" className="form-control" onChange={this.handleInput} placeholder="ex)UA756" value={this.state.report.flightNum} required/>
                    <small className="form-text text-muted pl-1">Enter flight# in Capital letter</small>
                </div>
                <div className="form-group">
                  <label className="mb-0" htmlFor="airline">Airline:</label>
                    <input name="airline" id="airline" type="text" className="form-control" onChange={this.handleInput} value={this.state.report.airline} placeholder="ex)UA or United Airline" />
                </div>
                <div className="form-group">
                  <label className="mb-0" htmlFor="date">Date:</label>
                    <input name="date" id="date" type="date" className="form-control" onChange={this.handleInput} value={this.state.report.date} placeholder="ex)DD/MM/YYYY" />
                </div>
                <div className="form-group">
                  <label className="mb-0" htmlFor="estDeparture">Estimated departure time:</label>
                    <input name="estDeparture" id="estDeparture" type="time" className="form-control" value={this.state.report.estDeparture} onChange={this.handleInput} />
                </div>
                <div className="form-group">
                  <label className="mb-0" htmlFor="estArrival">Estimated arrival time:</label>
                    <input name="estArrival" id="estArrival" type="time" className="form-control" value={this.state.report.estArrival} onChange={this.handleInput} />
                </div>
                <div className="form-group mt-4 mb-4">
                  <label className="mb-0" htmlFor="status">Status:</label>
                    <select name="status" id="status" onChange={this.handleInput} value={this.state.airline} >
                      <option value="" selected disabled hidden>Select One</option>
                      <option value="Delay">Delay</option>
                      <option value="Arrived Early">Arrived Early</option>
                    </select>
                </div>
                <div className="form-group">
                  <label className="" htmlFor="issue">Issue:</label>
                    <textarea name="issue" id="issue" className="form-control py-4 px-4" rows="8" cols="10" onChange={this.handleInput} value={this.state.report.issue} placeholder="ex)Flight is looking for a gate to park">
                    </textarea>
                </div>
                <div className="text-center form-group">
                  <input type="submit" className="btn btn-primary" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
export default CreateContainer


// <CreateReport addReport={this.addReport} />
