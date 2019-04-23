import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer';




class UserAccountContainer extends Component{
  constructor(){
    super();
    this.state = {
      login : {
        email: '',
        password: '',
        successful: false
      },
      register: {
        username:'',
        email: '',
        password:'',
      }
    }
  }


  render(){
    return(
      <div>
        <div>
          <Header />
        </div>

        <div>
          <Nav />
        </div>

          <h2>Profile</h2>

          
        <div>
            <Footer />
        </div>
      </div>
    )
  }
}

export default withRouter(UserAccountContainer);
