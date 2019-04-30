import React, { Component } from 'react';
import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer';
import FlightList from '../FlightList';
import AirportTable from '../AirportTable';
import SearchReports from '../SearchReports';
import FlightProgress from '../FlightProgress'


class FlightContainer extends Component {
  constructor (){
    super()
      this.state = {
        flReports : false//need to get confirm from cesar
    }
  }

  componentDidMount(){
    const flightNumber = localStorage.getItem('flightNumber').split(' ').join('').toUpperCase()
    // console.log('!!!!!!!!!!!!!', flightNumber);
    this.getFlights(flightNumber);
    this.getFlightReports(flightNumber)//need to get confirm from cesar
  };

  //Get Flight Number, Departure and Arrival
  getFlights = async(flightNumber) => {
    try{
      // const response = await fetch(`https://aviation-edge.com/v2/public/flights?key=6070e9-54ae2b&iataNumber=${flightNumber}`);
      const response = await fetch(`http://aviation-edge.com/v2/public/flights?key=f01657-6e26f7&flightiata=${flightNumber}`)

      if(!response.ok){
        console.log("here?");
        throw Error(response.statusText)
      }
      // console.log("~~~~~~~~~~~~~~~~", response);
      const flightsParsed = await response.json();
      // const flightDeparture = flightsParsed[0].departure.iataCode;
      console.log("????", flightsParsed);
      // if(flightsParsed.error === "No Record Found or Flight not currently detected by receivers. "){
      //   console.log("how abouttttt", flightsParsed.error === "No Record Found or Flight not currently detected by receivers. ");
      //
      // }else{

        this.setState({
          flightNumber : flightsParsed[0].flight.iataNumber,
          flightDeparture: flightsParsed[0].departure.iataCode,
          flightArrival: flightsParsed[0].arrival.iataCode,
          status: flightsParsed[0].status
        })
      // }
    }catch(err){
      return err
    }
  }

//==================== need to get confirm from Cesar =========================
  getFlightReports = async(flightNumber) => {
    try{
      const response = await fetch('http://localhost:9000/api/v1/reports', {
        credentials: 'include',
      });

      if(!response.ok){
        throw Error(response.statusText)
      }

      const reportsParsed = await response.json();
      const flightReports = reportsParsed.data.map((reports) => {
        if(reports.flightNum === flightNumber){
          this.setState({
            flReports : true
          })
        }
      })

    }catch(err){
      return err
    }
  };

//=============================================================================

  render(){

    return(
    <div>
        <Header />
        <Nav />
      { this.state.flightDeparture
       ? <FlightList flightNumber={this.state.flightNumber}
                     flightDeparture={this.state.flightDeparture}
                     flightArrival={this.state.flightArrival}
                     flightStatus={this.state.status}
                     />
       : <div className="text-center my-5">
          <h3>"No Record Found or Flight not currently detected by receivers."</h3>
          <h5 className="mt-5">Please go back to home or try with advanced search.</h5>
          <h5>Thank you.</h5>
          </div>
      }
      { this.state.flightDeparture
        ? <AirportTable flightDeparture={this.state.flightDeparture} flightNumber={this.state.flightNumber} />
        : null
      }

      { this.state.flReports ? <SearchReports /> : null }

        <Footer />
    </div>
    )
  }
}
export default FlightContainer
