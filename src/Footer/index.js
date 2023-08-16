import React from 'react';
import style from './Footer.module.css'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className="footerb">
      <div className={style.footerBg}>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 offset-5 mt-4 text-light">
              &copy; 2019
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-5 offset-4 mt-2 text-white">
              <SocialIcon className="mr-1" network="github" style={{ height: 26, width: 26 }} bgColor="#203960" url="https://git.generalassemb.ly/cesarmartins" />
              <span className="ml-2">Cesar</span>
              <span className="ml-5">|</span>
              <SocialIcon className="offset-1"network="github" style={{ height: 26, width: 26 }} bgColor="#203960" url="https://git.generalassemb.ly/seheesf88" />
              <span className="ml-2">SeHee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;
