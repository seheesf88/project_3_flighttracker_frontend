import React, { Component } from 'react';
import style from './Nav.module.css'
import { Link } from 'react-router-dom';

const Nav = () => {
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
            <Link to="/login" className={style.navLink}>Create Report</Link>
        </li>
        <li className="nav-item my-2">
            <Link to="/myaccount" className={style.navLink}>My Reports</Link>
        </li>
      </ul>
    </div>
  )
}
export default Nav;
