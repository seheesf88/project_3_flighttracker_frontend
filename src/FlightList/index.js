import React, {Component} from 'react';



class Flights extends Component {
  constructor(){
    super()
  }


  render(){
    // console.log('this is props.flights', this.props);

    return(
      <div className="container">
        <div className="text-center mt-4 py-4">
          <h1>Flight #{this.props.flightNumber} Information</h1>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-1 offset-2">
                  <div><img src="../images/favicon.png" height={30} width={30}/></div>
              </div>
              <div className="progress col-7 mt-2">
                { this.props.flightStatus === 'started'?
                <div className="progress-bar col-4 progress-bar-striped">Depart</div>:
                    this.props.flightStatus === 'en-route' ?
                    <div className="progress-bar col-8 progress-bar-striped">On the way...</div>:
                      this.props.flightStatus === 'landed' ?
                      <div className="progress-bar col-12 progress-bar-striped">Arrived</div>:
                       this.props.flightStatus === 'unknown' ?
                       <div>Unknown :(</div>:
                         <div>Error</div>
                }
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-10 offset-2">
            <div className="row">
              <div className="col-4 mt-3">
                <p>Flight Number:</p>
                <p>Departure:</p>
                <p>Arrival:</p>
              </div>
              <div className="col-6 mt-3">
                <p>{this.props.flightNumber}</p>
                <p>{this.props.flightDeparture}</p>
                <p>{this.props.flightArrival}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Flights
