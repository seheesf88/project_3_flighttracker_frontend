import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { Collapse, Button} from 'react-bootstrap';
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

  handleAdvancedInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAdvancedSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('departure', this.state.departure)
    this.props.history.push('/flight')
  }

  render(){
    // console.log('PROPS = ', this.props)
    const { open } = this.state;
    return(
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="form-group">
              <form onSubmit={this.handleSubmit}>
                <div className="text-left">
                <input className="form-control form-control-lg" type="text" name="imputedFlight" placeholder="Insert Flight Number   ex)QX1682" onChange={this.handleInput} required/>
                <small className="form-text text-muted pl-1"></small>
                </div>
                <div className="mt-2 pt-2">
                  <button className="btn btn-primary">Search Flight</button>
                  <Button
                    className="ml-5"
                    variant="outline-primary"
                    onClick={() => this.setState({ open: !open})}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                  Advanced search
                  </Button>
                  <Collapse in={this.state.open}>
                    <form className="mt-5" onSubmit={this.handleAdvancedSubmit}>
                      <div className="form-group text-left">
                        <label htmlFor="departure">Departure Airport</label>
                        <input type="text" className="form-control" id="departure" placeholder="Insert departure airport" onChange={this.handleAdvancedInput}/>
                      </div>
                      <div className="form-group text-left">
                        <label htmlFor="Arrival">Arrival Airport</label>
                        <input type="text" className="form-control" id="arrival" placeholder="Insert arrival airport" onChange={this.handleAdvancedInput}/>
                      </div>
                      <div className="form-group text-left">
                        <label htmlFor="airline">Airline</label>
                        <input type="text" className="form-control" id="airline" placeholder="Insert Airline"onChange={this.handleAdvancedInput} />
                      </div>
                      <button className="btn btn-primary">Search Flight</button>
                    </form>
                  </Collapse>
                </div>
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
