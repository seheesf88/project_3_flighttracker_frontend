import React from 'react';
import styles from './Header.module.css';


const Header = () => {
  return (
    <div>
      <div className={styles.headerBg}></div>
      <div className={styles.headerFg}></div>
    </div>
  )
}

export default Header;
