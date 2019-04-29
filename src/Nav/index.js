import React, { Component } from 'react';
import style from './Nav.module.css'
import { Link, withRouter } from 'react-router-dom';



class Nav extends Component{
  constructor(){
    super()
  }

  logout = async() => {
    const userId = localStorage.getItem('userId')
    try{
      const response = await fetch('http://localhost:9000/api/v1/auth/logout', {
        credentials: 'include'
      });

      if(!response.ok){
        throw Error(response.statusText)
      }

      const responseParsed = await response.json();
      if(responseParsed.status === 200){
        localStorage.removeItem('userId')
        localStorage.removeItem('username')
        this.props.history.push('/')
      }

    }catch(err){
      console.log('logout fail', err);
    }
  }

render(){
  return(
    <div>
      <ul className="nav justify-content-center bg-dark mb-5">
        <li className="nav-item my-2">
            <Link to="/" className={style.navLink}>Home</Link>
        </li>
        <li className="nav-item my-2">
            <Link to="/report" className={style.navLink}>Report List</Link>
        </li>
        <li className="nav-item my-2">
            { localStorage.getItem('userId') !== null
            ?
            <Link to="/report/new" className={style.navLink}>Create Report</Link>
            :
            <Link to="/login" className={style.navLink}>Create Report</Link>
            }
        </li>
        <li className="nav-item my-2">
           { localStorage.getItem('userId') !== null
           ?
            <Link to="/myaccount" className={style.navLink}>My Reports</Link>
            :
            <Link to="/login" className={style.navLink}>My Reports</Link>
           }
        </li>
        <li className="nav-item my-2">
            <button onClick={this.logout}>Logout</button>
        </li>
      </ul>
    </div>
  )
}
}
export default withRouter(Nav)
