import React, { Component } from 'react';
import Nav from '../Nav'
import Header from '../Header';
import Footer from '../Footer'
import CreateReport from '../CreateReport';


class CreateContainer extends Component {
  constructor(){
    super()

    this.state = {
      reports: []
    }
  }

  addReport = async (reportComp, e) => {
    e.preventDefault();
    try{
        const response = await fetch('http://localhost:9000/api/v1/reports', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(reportComp),
          headers: {
            'Content-Type' : 'application/json'
          }
        });

        if(!response.ok){
          throw Error(response.statusText)
        }

        const parsedCreateReport = await response.json();

        this.props.history.push('/report');

      } catch(err) {
        return err
      }
    }

  render(){
    console.log('THIS IS PROPS', this.props);
    return(
      <div>
        <Header />
        <Nav />
        <CreateReport addReport={this.addReport} />
        <Footer />
      </div>
    )
  }
}
export default CreateContainer
