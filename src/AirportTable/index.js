import React, {Component} from 'react';
var moment = require('moment');


class AirportTable extends Component{
  constructor(){
    super()
    this.state = {
      departure: "",
      flightNumber: "",
      status: "",
      airline: "",
      arrival: {}
    }
  }
  componentDidMount(){
    this.getAirportTable()
  }


    //Getting TimeTables of the Airport
    getAirportTable = async() => {
      try{
        const response = await fetch(`https://aviation-edge.com/v2/public/timetable?key=6070e9-54ae2b&iataCode=${this.props.flightDeparture}&type=departure`);

        if(!response.ok){
          throw Error(response.statusText)
        }

        const timeTableParsed = await response.json();
        // console.log('timeTableParsed', timeTableParsed);

        //Mapping the Time Table to get Flights Information
        const currentFlightsOnTimeTable = timeTableParsed.map((table) => {
          if(table.flight.iataNumber === this.props.flightNumber){
            console.log('????', table)
            this.setState({
              departure: this.props.flightDeparture,//departure airport
              flightNumber: this.props.flightNumber,//flight number
              status: table.status,
              airline: table.airline.name,
              departure: {
                        airport: table.departure.iataCode,
                        terminal: table.departure.terminal,
                        gate: table.departure.gate,
                        scheduledTime: moment(table.departure.scheduledTime).format("dddd, MMMM Do YYYY, h:mm:ss a"),
                        estimatedTime: moment(table.departure.estimatedTime).format("dddd, MMMM Do YYYY, h:mm:ss a"),
                        },
              arrival : {
                        airport: table.arrival.iataCode,
                        terminal: table.arrival.terminal,
                        gate: table.arrival.gate,
                        baggage: table.arrival.baggage,
                        scheduledTime: moment(table.arrival.scheduledTime).format("dddd, MMMM Do YYYY, h:mm:ss a"),
                        estimatedTime: moment(table.arrival.estimatedTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                        }
          )
            // console.log('formated STATE', this.state);

          }else{
            console.log('didnt found it');
          }
        })
      }catch(err){
        console.log('fail to fetch?');
        return err
      }
    }

  render(){
    console.log('==============>>>>>>>',this.state.arrival)
    return(
      <div className="container mb-3">
        <div className="text-center">
        <hr />
        <small className="text-muted pl-1">If you are not able to see infomation below, it means flight is not scheduled yet</small>
        </div>
        <div className="row">
          <div className="col-10 offset-2">
            <div className="row">
              <div className="col-4 my-3">
                <p>Airline:</p>
                <p>Flight status:</p>
                <p>Departure Terminal:</p>
                <p>Departure Gate:</p>
                <p>Departure Time:</p>
                <p>Arrival Time:</p>
                <p>Arrival Terminal:</p>
                <p>Arrival Gate:</p>
                <p>Baggage</p>
              </div>
              <div className="col-6 my-3">
                <p>{this.state.airline ? this.state.airline : `Can't find Airline info`}</p>
                <p>{this.state.status ? this.state.status : `Can't find status info`}</p>
                <p>{this.state.departure.terminal ? this.state.departure.terminal : `Can't find terminal info`}</p>
                <p>{this.state.departure.gate ? this.state.departure.gate : `Can't find terminal info`}</p>
                <p>{this.state.departure.scheduledTime ? this.state.departure.scheduledTime : `Can't find scheduled time`}</p>
                <p>{this.state.arrival.scheduledTime ? this.state.arrival.scheduledTime : `Can't find scheduled time`}</p>
                <p>{this.state.arrival.terminal ? this.state.arrival.terminal : `Can't find terminal info`}</p>
                <p>{this.state.arrival.gate ? this.state.arrival.gate : `Can't find gate info`}</p>
                <p>{this.state.arrival.baggage ? this.state.arrival.baggage : `Can't find gate info`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AirportTable


// <FlightProgress scheduledTime={this.state.arrival.scheduledTime} estimatedTime={this.state.arrival.estimatedTime} />
