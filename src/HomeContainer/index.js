import React, { Component } from 'react';
import ReportContainer from '../ReportContainer';
import FlightContainer from '../FlightContainer';
import Header from '../Header';
import Nav from '../Nav';
import FlightSearch from '../FlightSearch';
import Footer from '../Footer';
import Clock from 'react-live-clock'


class HomeContainer extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div>

        <div>
          <Header />
        </div>

        <div>
          <Nav />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-8 offset-2">
              <div className="text-center mt-3 mb-5">
              <div className="text-center mb-5">
                <h1>Where is my flight?</h1>
              </div>
              <FlightSearch />
              </div>
            </div>
          </div>
        </div>


        <div>
            <Footer />
        </div>

      </div>
    )
  }
}
export default HomeContainer
