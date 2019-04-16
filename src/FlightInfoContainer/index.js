import React, {Component} from 'react';
import FlightProgress from '../FlightProgress'
var moment = require('moment');



class FlightInfoContainer extends Component{
  constructor(){
    super()
    this.state = {
      departure: "",
      flightNumber: "",
      arrival: {},
      testing: "test1"
    }
    this.now = 60;
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
   console.log(this.state.testing)
    return(
        <div>
          <FlightProgress test={this.state.testing}/>
        </div>
      )
    }
  }

export default FlightInfoContainer
