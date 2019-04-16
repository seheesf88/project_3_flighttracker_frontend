import React, {Component} from 'react';

class SearchReports extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  componentDidMount(){
    const flightNumber = localStorage.getItem('flightNumber');
    console.log('Flight Number in Flight Search', flightNumber);
    this.getFlightReports(flightNumber);
  }

  getFlightReports = async(flightNumber) => {

    try{
        const response = await fetch ('http://localhost:9000/api/v1/reports/', {
          credentials: 'include',
        });

        if(!response.ok){
          throw Error(response.statusText)
        }

        const reportsParsed = await response.json();

        // console.log( 'reportsParsed.data.flightNumber ==>', reportsParsed.data[0].flightNum);
        //console.log('flightNumber variable ==>', flightNumber);

        //console.log( 'reportsParsed ==>', reportsParsed);

        const flightReports = reportsParsed.data.map((reports) => {
          if(reports.flightNum === flightNumber){
            this.setState({
              reportId: reports._id,
              date: reports.date,
              status: reports.status,
              issue: reports.issue
            })
            console.log('this.setState()');
          }else {
            console.log('NOT FOUND');
          }
        })
        console.log('flightReports ===>', this.state);

    }catch(err){
      return err
    }
  }

  render(){
    return(
      <div className="container mt-2">
        <div className="text-center mt-4 pb-5">
          <h2>Flight Report</h2>
          <hr/>
        </div>
        <div className="row">
          <div className="col-8 offset-3">
            <div className="row">
              <div className="col-4">
                <p>Reported Status:</p>
                <p>Comment:</p>
              </div>
              <div className="col-4">
                <p>{this.state.status}</p>
                <p>{this.state.issue}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mb-5">
          <form action={this.state.reportId} className="mt-3">
            <button className="btn btn-primary">View Report</button>
          </form>
        </div>
      </div>

    )
  }
}

export default  SearchReports
