import React, { Component } from 'react';
import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer';
import ShowReport from '../ShowReport'

class ShowContainer extends Component {
  constructor(){
    super()
    this.state = {
      report: {},
      authorId: ''
    }
  }

  componentDidMount(){
    this.getOneReports()
  }

  getOneReports = async() => {
    const reportId = window.location.pathname.split('/')[1];
    try{
      const response = await fetch(`${process.env.REACT_APP_API}/api/v1/reports/${reportId}`,  {
        credentials: 'include'
      })

      if(!response.ok){
        throw Error(response.statusText)
      }

      const reportsParsed = await response.json();
      console.log(reportsParsed.data)
      this.setState({
          report: reportsParsed.data,
          authorId: localStorage.getItem('authorId')
      })

    }catch(err){
      return err
    }
  }

  render(){
    console.log(this.state.report)
    return(
      <div>
        <Header />
        <Nav />
        <ShowReport report={this.state.report}/>
        <Footer />
      </div>
    )
  }
}

export default ShowContainer
