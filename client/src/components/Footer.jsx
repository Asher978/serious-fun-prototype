import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <nav className="navbar">
      <div className="topBar">
        <div className="container">
          <div className="copyright">Serious Fun After School, Inc. © 2017</div>

          <div className="socialLink">
            <Link to="" id="networkForGood" className="socialLinks" />
            <Link to="" id="facebook" className="socialLinks" />
            <Link to="" id="twitter" className="socialLinks" />
            <Link to="" id="email" className="socialLinks" />
          </div>
        </div>
      </div>
      <div className="bottombar" />
    </nav>
  );
};

export default Footer;
