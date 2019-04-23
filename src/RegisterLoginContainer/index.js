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
     const parsedResponse = await response.json();

     localStorage.setItem('userId', parsedResponse.userId)
     localStorage.setItem('username', parsedResponse.username)

     this.props.history.push('/report/new')//###########################
   }catch(err){
     console.log('fetch regi func fail');
   }
 }

 //================== LogIn =======================

 handleLoginChange = (e) => {
   const updatedChange = {
     ...this.state.login
   }
   updatedChange[e.target.name] = [e.target.value];
   this.setState({
     login: updatedChange
   })
 }


 handleLoginSubmit = (e) => {
   e.preventDefault();
   const updatedLogin = {
     ...this.state.login
   }
   this.fetchLogin(updatedLogin)
 }

 fetchLogin = async(updatedLogin) => {

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


     const parsedResponse = await response.json();

     if(parsedResponse.status !== 401){
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



          <h2>Login</h2>
            <form onSubmit={this.handleLoginSubmit}>
              email: <input name="email" onChange={this.handleLoginChange} />
              password: <input name="password" onChange={this.handleLoginChange}/>
              <button type="sumbit">Login</button>
            </form>
          <h2>Register</h2>
            <form onSubmit={this.handleRegisterSubmit}>
              username: <input name="username" value={this.state.register.username} onChange={this.handleRegisterChange}/>
              email: <input name="email" value={this.state.register.email} onChange={this.handleRegisterChange}/>
              password: <input name="password" value={this.state.register.password} onChange={this.handleRegisterChange}/>
              <button type="submit">Register</button>
            </form>

        <Footer />

      </div>
    )
  }
}

export default withRouter(RegisterLoginContainer);
