import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer';




class MyReportContainer extends Component{
  constructor(){
    super();
    this.state = {
      userinfo: {
        email:'',
        password: '',
        username:'',
      },

    }
  }

  componentDidMount(){
    this.getUserInfo()
    // this.getMyReport()
  }

  getUserInfo = async() =>{
      const userId = localStorage.getItem('userId');
      console.log(userId);
      try{
        const response = await fetch('http://localhost:9000/api/v1/users/' + userId, {
          credentials: 'include'
        })

        if(!response.ok){
          throw Error(response.statusText)
        }

        console.log('??????', response);
        const parsedResponse = await response.json();

        this.setState({
          userinfo: parsedResponse.data
        })

      }catch(err){
        console.log('getuserinfo func fail', err);
      }
  }

  // getMyReport = async() => {
  //   const userId = localStorage.getItem('userId')
  //
  //   try{
  //     const response = await fetch('http://localhost:9000/api/v1/users/myreports/' +  userId, {
  //       credentials: 'include'
  //     })
  //
  //     if(!response.ok){
  //       throw Error(response.statusText)
  //     }
  //
  //     const responseParsed = await response.json();
  //
  //     this.setState({
  //       myReports: responseParsed.data
  //     })
  //   }catch(err){
  //     console.log('fetching getmyreport fail');
  //   }
  // }

  render(){
    
    return(
      <div>
        <Header />
        <Nav />
        <div>
          <h2 className="text-center mb-5">Profile</h2>
            <div className="offset-2">
              <span className="offset-1">Username : <span className="ml-2"></span></span>
              <span className="offset-1">Email : <span className="ml-2"></span></span>
              <span className="offset-1"><Link to="/">Edit</Link></span>
            </div>
          <h2 className="text-center my-5">My Report List</h2>

        </div>
        <Footer />
      </div>
    )
  }
}

export default MyReportContainer;
