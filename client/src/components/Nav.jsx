import React from "react";
import { Link } from "react-router-dom";
import Auth from "../modules/Auth";

const Nav = props => {
  return (
    <nav className="navbar">
      <div className="topHead" />
      <div className="midHead">
        {/* <div className="leftSec">
            <div className="mainLogo"></div>
        </div> */}
        {/* <div className="rightSec"> */}
        <div className="container">
          <div className="mainLogo"></div>
          <div className="helpBtn">support</div>
          <div className="user">
            <div id="login" className="userAuth">
              Login
            </div>
            <div className="userAuth">|</div>
            <div id="signUp" className="userAuth">
              Sign Up
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="navLink">
        <div className="container">
          <a href="" id="home" className="navLinks">
            home
          </a>
          <a href="" id="about" className="navLinks">
            about
          </a>
          <a href="" id="location" className="navLinks">
            locations
          </a>
          <a href="" id="program" className="navLinks">
            program
          </a>
          <a href="" id="calendar" className="navLinks">
            calendar
          </a>
          <a href="" id="registration" className="navLinks">
            registration
          </a>
          <a href="" id="faq" className="navLinks">
            faq
          </a>
          <a href="" id="contact" className="navLinks">
            contact
          </a>
        </div>
      </div>

      {/* <div className="container">
        <div className="navbra-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#MyNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand"><img src='' alt="" /></a>
        </div>
        <div className="collapse navbar-collapse" id="MyNavbar">
            {!Auth.isUserAuthenticated() ? (
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/schools">Schools</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            ) : (
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/">Home</Link></li>                      
                    <li><Link to="/schools">Schools</Link></li>
                    <li><Link to="/dashboard">My Dashboard</Link></li>
                    <li><Link to="/logout" onClick={props.handleLogout}>Log Out</Link></li>
                </ul>
            )}
        </div>
      </div> */}
    </nav>
  );
};

export default Nav;
