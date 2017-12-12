import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <nav className="navbar">
      <div className="topBar">
        <div className="container">
          <div className="copyright">Serious Fun After School, Inc. © 2017</div>

          <div className="socialLink">
            <a href="https://visitor.r20.constantcontact.com/manage/optin?v=001teuQlcKoWkgAybG9Kfvn3fQtZtbppRQx9rxTVD4S4csSK0ixt9oXeEHzFjl0gFhJPrPPoInKUxVRHkwL3W5I-SO0316OCL5vTZz_g1dlodJmBOqvJF1S3X-CzlKscyRDTnrYFTHzuJLmg-2annJFc2RNaVKKwzUb2PMcBVPDzjI%3D" id="newsletter" className="socialLinks">
              SIGN UP FOR NEWSLETTER
            </a>
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
