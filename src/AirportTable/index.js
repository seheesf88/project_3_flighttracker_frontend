import React, {Component} from 'react';
import FlightProgress from '../FlightProgress'
var moment = require('moment');


class AirportTable extends Component{
  constructor(){
    super()
    this.state = {
      departure: "",
      flightNumber: "",
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
        console.log('timeTableParsed', timeTableParsed);

        //Mapping the Time Table to get Flights Information
        const currentFlightsOnTimeTable = timeTableParsed.map((table) => {
          if(table.flight.iataNumber === this.props.flightNumber){
            this.setState({
              departure: this.props.flightDeparture,
              flightNumber: this.props.flightNumber,
              arrival : {status: table.status,
                        airline: table.airline.name,
                        airport: table.arrival.iataCode,
                        terminal: table.arrival.terminal,
                        gate: table.arrival.gate,
                        scheduledTime: moment(table.arrival.scheduledTime).format("dddd, MMMM Do YYYY, h:mm:ss a"),
                        estimatedTime: moment(table.arrival.estimatedTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            })
            console.log('formated STATE', this.state);

          }else{
            // console.log('didnt found it');
          }
        })
      }catch(err){
        return err
      }
    }

  render(){
    console.log(this.state.arrival.scheduledTime)
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
                <p>Terminal:</p>
                <p>Gate:</p>
                <p>Scheduled Time:</p>
                <p>Estimated Time:</p>
              </div>
              <div className="col-6 my-3">
                <p>{this.state.arrival.airline ? this.state.arrival.airline : `Can't find Airline info`}</p>
                <p>{this.state.arrival.status ? this.state.arrival.status : `Can't find status info`}</p>
                <p>{this.state.arrival.terminal ? this.state.arrival.terminal : `Can't find terminal info`}</p>
                <p>{this.state.arrival.gate ? this.state.arrival.gate : `Can't find gate info`}</p>
                <p>{this.state.arrival.scheduledTime ? this.state.arrival.scheduledTime : `Can't find scheduled time`}</p>
                <p>{this.state.arrival.estimatedTime ? this.state.arrival.estimatedTime: `Can't find estimated time`}</p>
              </div>
            </div>
          </div>
        </div>
          <FlightProgress scheduledTime={this.state.arrival.scheduledTime} estimatedTime={this.state.arrival.estimatedTime} />
      </div>
    )
  }
}

export default AirportTable
