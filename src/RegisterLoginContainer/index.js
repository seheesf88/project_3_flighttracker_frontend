import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer';


class RegisterLoginContainer extends Component{
  constructor(){
    super();
    this.state = {
      login : {
        username: '',
        // email:'',
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

  handleRegisterChange = (e) => {
    const updatedChange = {
      ...this.state.register
    }
    updatedChange[e.target.name] =  e.target.value;
    this.setState({
      register: updatedChange
    })
  }


  handleRegisterSubmit = (e) => {
    e.preventDefault();
    const updatedRegister = {
      ...this.state.register
    }

    if(true){
      this.fetchRegister(updatedRegister)
      this.setState({
        register: {
          username: '',
          email: '',
          password: ''
        }
      })
    }else{
      this.setState({
        register: updatedRegister
      })
    }
  }

 fetchRegister = async(updatedRegister) => {
   console.log('reg updatedRegister', updatedRegister);
   console.log('reg stringify', JSON.stringify(updatedRegister) );
   try{
     const response = await fetch('http://localhost:9000/api/v1/auth', {
       method: 'POST',
       credentials: 'include',
       body: JSON.stringify(updatedRegister),
       headers: {
         'Content-Type': 'application/json'
       }
     })

     if(!response.ok){
       throw Error(response.statusText)
     }

    console.log('reg response', response);
    const parsedResponse = await response.json();
    console.log('reg parsedResponse', parsedResponse);

     // console.log('userId', parsedResponse.userId);
     // console.log('username', parsedResponse.username);
     // console.log('parsed??', parsedResponse);
     localStorage.setItem('userId', parsedResponse.userId)
     localStorage.setItem('username', parsedResponse.username)

     this.props.history.push('/report/new')
   }catch(err){
     console.log('fetch regi func fail');
   }
 }

 //================== LogIn =======================

 handleLoginChange = (e) => {
   const updatedChange = {
     ...this.state.login
   }
   // console.log('updatedChange', updatedChange);
   updatedChange[e.target.name] = e.target.value;
   this.setState({
     login: updatedChange
   })
   // console.log('this.state.login', this.state.login);
 }


 handleLoginSubmit = (e) => {
   e.preventDefault();
   const updatedLogin = {
     ...this.state.login
   }
   this.fetchLogin(updatedLogin)
   // console.log(updatedLogin);
 }

 fetchLogin = async(updatedLogin) => {
   console.log('fetchloging', updatedLogin);
   console.log('??', JSON.stringify(updatedLogin));
   try{
     const response = await fetch('http://localhost:9000/api/v1/auth/login', {
       method: 'POST',
       credentials: 'include',
       body: JSON.stringify(updatedLogin),
       headers: {
         'Content-Type' : 'application/json'
       }
     })

     if(!response.ok){
       throw Error(response.statusText);
     }

     console.log('login response?', response);
     const parsedResponse = await response.json();
     console.log("login parsedResponse?", parsedResponse)
     if(parsedResponse.status !== 401){
     // if(parsedResponse.status === 200){
       updatedLogin.successful = true;
       this.setState({
         login: updatedLogin
       })


       localStorage.setItem('userId', parsedResponse.userId)
       localStorage.setItem('username', parsedResponse.username)
       this.props.history.push('/report/new')//###################################
     }else{
       alert('login fail1')
     }
   }catch(err){
     alert("login fail2")
   }
 }



  render(){
    return(
      <div>
        <Header />
        <Nav />

        <div className="container">
          <div className="row">
            <div className="col-4 offset-1 form-group">
              <h2 className="mb-3">Login</h2>
                <form onSubmit={this.handleLoginSubmit}>
                  <div className="mt-4">Username:<input className="form-control" name="username" value={this.state.login.username} onChange={this.handleLoginChange} /></div>
                  <div className="mt-3">Password: <input className="form-control" name="password" value={this.state.login.password} onChange={this.handleLoginChange}/></div>
                  <div className="text-right mt-3"><button className="btn btn-primary" type="submit">Login</button></div>
                </form>
            </div>
            <div className="col-4 offset-1 form-group">
              <h2>Register</h2>
                <form onSubmit={this.handleRegisterSubmit}>
                  <div className="mt-3">Username: <input className="form-control" name="username" value={this.state.register.username} onChange={this.handleRegisterChange}/></div>
                  <div className="mt-3">Email: <input className="form-control" name="email" value={this.state.register.email} onChange={this.handleRegisterChange}/></div>
                  <div className="mt-3">Password: <input className="form-control" name="password" value={this.state.register.password} onChange={this.handleRegisterChange}/></div>
                  <div className="text-right mt-3"><button className="btn btn-primary" type="submit">Register</button></div>
                </form>
              </div>
            </div>
          </div>
        <Footer />

      </div>
    )
  }
}

export default withRouter(RegisterLoginContainer);
