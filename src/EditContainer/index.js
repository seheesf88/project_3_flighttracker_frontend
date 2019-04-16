import React, { Component } from 'react';
import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer';
import EditReport from '../EditReport';


class EditContainer extends Component {
  constructor(){
    super()

    this.state = {
      report: {},
    }
  }

  componentDidMount(){
    this.getReport()
  };

  getReport = async() => {
    const reportId = window.location.pathname.split('/')[1];
    try{
      const response = await fetch(`http://localhost:9000/api/v1/reports/${reportId}`, {
        credentials: 'include',
      });

      if(!response.ok){
        throw Error(response.statusText)
      }

      const reportsParsed = await response.json();
      console.log('REPORT TO EDIT = ', reportsParsed)

      this.setState({
        report: reportsParsed.data
      })

      }catch(err){
      return err
    }
  };


  handleEditFormInput = (e) => {
    this.setState({
      report: {
        ...this.state.report,
        [e.target.name]:  e.target.value
      }
    })
  }

  updateReport = async (e) => {
    e.preventDefault();
    const reportId = window.location.pathname.split('/')[1];
    console.log('SENDING TO DB = ', this.state.report);
    try{
        const response = await fetch(`http://localhost:9000/api/v1/reports/${reportId}`, {
          method: 'PUT',
          credentials: 'include',
          body: JSON.stringify(this.state.report),
          headers: {
            'Content-Type' : 'application/json'
          }
        });

        if(!response.ok){
          throw Error(response.statusText)
        }

        this.props.history.push('/report');

      } catch(err) {
        return err
      }
    }

  render(){
    console.log(this.state.report)
    return(
      <div>
        <Header />
        <Nav />
        <EditReport handleEditFormInput={this.handleEditFormInput} report={this.state.report} updateReport={this.updateReport} />
        <Footer />
      </div>
    )
  }
}
export default EditContainer
