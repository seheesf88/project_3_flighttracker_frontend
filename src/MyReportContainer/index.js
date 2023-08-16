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
        const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/` + userId, {
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
      const response = await fetch(`${process.env.REACT_APP_API}/api/v1/reports`, {
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
      await fetch(`${process.env.REACT_APP_API}/api/v1/reports/` + id, {
        method: 'DELETE',
        credentials: 'include'
      })

      this.setState({
        reports: this.state.reports.filter((report) => report._id !== id)
      })
    }catch(err){
      console.log(err)
    }
  }





  render(){
    console.log('lololl', localStorage.getItem('userId'));

    return(
      <div>
        <Header />
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="mb-5"><span className="h2">Profile</span><span className="ml-3"><Link to={`/myaccount/${localStorage.getItem('userId')}/edit`}>Edit</Link></span></div>
                <div className="">
                  <div className="">Username : <span className="ml-2">{this.state.userinfo.username}</span></div>
                  <div className="">Email : <span className="ml-2">{this.state.userinfo.email}</span></div>
                </div>
            </div>
            <div className="col-8">
              <h2 className="text-center mb-5">My Report List</h2>
              <MyReportComponenet myReports={this.state.reports} deleteReport={this.deleteReport}/>
            </div>
          </div>
        </div>

        <div id="map"></div>
        <Footer />
      </div>
    )
  }
}

export default MyReportContainer;
