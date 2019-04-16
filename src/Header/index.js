import React, { Component } from 'react';
import styles from './Header.module.css';


const Header = () => {
  return (
    <div>

    <div className={styles.headerBg}></div>
    <div className={styles.headerFg}></div>



    </div>
  )
}
{/*
const styles = {
  headerBg: {
    position: 'relative',
    zIndex: 2,
    backgroundImage: 'url(images/airplane-01.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: 250
  },
  headerFg: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundImage: 'url(images/airplane-02.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-x',
    minHeight: 250,
    width: '100%',
    animation: 'slide-right 4s linear infinite',
  }
}
*/}



export default Header;
