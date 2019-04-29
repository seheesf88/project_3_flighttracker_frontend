import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer';
import MyReportComponenet from '../MyReportComponenet';


class MyReportContainer extends Component{
  constructor(){
    super();
    this.state = {
      userinfo: {
        email:'',
        password: '',
        username:'',
      },
      reports: [],
    }
  }

  componentDidMount(){
    this.getUserInfo()
    this.getMyReport()
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

  getMyReport = async() => {
    try{
      const response = await fetch('http://localhost:9000/api/v1/reports', {
        credentials: 'include'
      })

      if(!response.ok){
        throw Error(response.statusText)
      }

      const responseParsed = await response.json();

      this.setState({
        reports: responseParsed.data
      })
    }catch(err){
      console.log('fetching getmyreport fail');
    }
  }

  deleteReport = async(id, e) => {
    e.preventDefault();
    try {
      const deleteReport = await fetch('http://localhost:9000/api/v1/reports/' + id, {
        method: 'DELETE',
        credentials: 'include'
      })


      const parsedResponse = await deleteReport.json();

      this.setState({
        reports: this.state.reports.filter((report) => report._id !== id)
      })
    }catch(err){
      console.log(err)
    }
  }





  render(){

    return(
      <div>
        <Header />
        <Nav />
        <div>
          <h2 className="text-center mb-5">Profile</h2>
            <div className="offset-2">
              <span className="offset-1">Username : <span className="ml-2">{this.state.userinfo.username}</span></span>
              <span className="offset-1">Email : <span className="ml-2">{this.state.userinfo.email}</span></span>
              <span className="offset-1"><Link to="/">Edit</Link></span>
            </div>
          <h2 className="text-center my-5">My Report List</h2>
          <MyReportComponenet myReports={this.state.reports} deleteReport={this.deleteReport}/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default MyReportContainer;
