import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer';


class UserAccountContainer extends Component{
  constructor(){
    super();
    this.state = {
      userInfo: {},
    }
  }

  componentDidMount(){
    // this.editMyinfo()
  };

  handleEditFormInput = (e) => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    })
  }

  editMyinfo = async(e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId')
    console.log('????', userId);

    try{
      const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/${userId}`, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(this.state.userInfo),
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      if(!response.ok){
        throw Error(response.statusText)
      }

    }catch(err){
      return err
    }
  }


  render(){
    return(
      <div>
        <Header />
        <Nav />
        <div className="form-group col-4 offset-4">
          <h2 className="text-center mb-5">Edit Profile</h2>
          <form onSubmit={this.editMyinfo}>
            <div>Username: <input className="form-control mb-3" name="username" value={this.state.userInfo.username} onChange={this.handleEditFormInput}/></div>
            <div>Email:  <input className="form-control mb-3" name="email" value={this.state.userInfo.email} onChange={this.handleEditFormInput}/></div>
            <div>password: <input className="form-control mb-3" name="password" value={this.state.userInfo.password} onChange={this.handleEditFormInput}/></div>
            <div className="text-right mt-2"><button className="form-control btn btn-primary col-2" type="submit">Edit</button></div>
          </form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(UserAccountContainer);
