import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header';
import Nav from '../Nav';
import CreateReport from '../CreateReport';
import Reports from '../ReportList';
import Footer from '../Footer';


class ReportContainer extends Component {
  constructor(){
    super()
    this.state = {
      reports: [],
    }
  }

  componentDidMount(){
    this.getReports()
  }

  getReports = async() => {
    try{
      const response = await fetch('http://localhost:9000/api/v1/reports', {
        credentials: 'include',
      });

      if(!response.ok){
        throw Error(response.statusText)
      }

      const reportsParsed = await response.json();

      this.setState({
        reports: reportsParsed.data
      })

      }catch(err){
      return err
    }
  };

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
    return (
      <div>
        <Header />
        <Nav />
        <Reports reports={this.state.reports} deleteReport={this.deleteReport} />
        <Footer />
      </div>
    )
  }
}


export default ReportContainer
