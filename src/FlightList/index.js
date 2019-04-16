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
