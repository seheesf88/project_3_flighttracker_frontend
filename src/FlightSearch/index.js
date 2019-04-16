import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import FlightContainer from '../FlightContainer'


class FlightSearch extends Component{
  constructor(){
    super();
    this.state = {
      imputedFlight: ''
    }

  }


  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state);
  }


  handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('flightNumber', this.state.imputedFlight)
    this.props.history.push('/flight')
  }

  render(){
    console.log('PROPS = ', this.props)
    return(
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="form-group">
              <form onSubmit={this.handleSubmit}>
                <div className="text-left">
                <input className="form-control form-control-lg" type="text" name="imputedFlight" placeholder="Insert Flight Number   ex)QX1682" onChange={this.handleInput} required/>
                <small className="form-text text-muted pl-1">Enter flight# in Capital letter</small>
                </div>
                <div className="mt-2 pt-2"><button className="btn btn-primary">Search Flight</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(FlightSearch);
