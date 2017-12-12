import React from "react";
import { Link } from "react-router-dom";
// import Auth from "../modules/Auth";

const Nav = props => {
  return (
    <nav className="navbar">
      <div className="topHead" />
      <div className="midHead">
        <div className="container">
          <div className="headerLeft">
            <Link to="/" className="mainLogo" />
            <p className="mainSubTitle">A Creative Space for Curious Kids</p>
          </div>

          <Link to="" className="helpBtn">
            Donate
          </Link>

          <div className="user">
            <Link to="" id="login" className="userAuth">
              Login
            </Link>
            <div className="userAuth">|</div>
            <Link to="" id="signUp" className="userAuth">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="navLink">
        <div className="container">
          <div className="linkBox">
            <Link to="/" id="home" className="navLinks">
              home
            </Link>
          </div>
          <div className="linkBox">
            <div id="about" className="navLinks">
              about
            </div>

            <div className="dropdownMenu">
              <div className="aboutDrop">
                <Link to="/aboutus" id="aboutDrop" className="dropLinks">
                  About Us
                </Link>
                <Link to="/ourteam" id="teamDrop" className="dropLinks">
                  Our Team
                </Link>
                <Link to="/careers" id="workDrop" className="dropLinks">
                  Work With Us
                </Link>
                <Link to="/supporters" id="supportDrop" className="dropLinks">
                  Our Supporters
                </Link>
                <Link to="/peoplesay" id="peoplesayDrop" className="dropLinks">
                  What People Say
                </Link>
              </div>
            </div>
          </div>
          <div className="linkBox">
            <div to="" id="afterSchool" className="navLinks">
              After School
            </div>

            <div className="dropdownMenu">
              <div className="programDrop">
                <Link to="/overview" id="overviewDrop" className="dropLinks">
                  Overview
                </Link>
                <Link to="/locations" id="locationDrop" className="dropLinks">
                  Locations
                </Link>
                <Link to="/classes" id="tuitionDrop" className="dropLinks">
                  Classes
                </Link>
                <Link to="/tuition" id="tuitionDrop" className="dropLinks">
                  Tuition
                </Link>
                <Link
                  to="/transportation"
                  id="transportationDrop"
                  className="dropLinks"
                >
                  Transportation
                </Link>
                <Link to="/policies" id="policyDrop" className="dropLinks">
                  Policies
                </Link>
              </div>
            </div>
          </div>

          <div className="linkBox">
            <Link to="/camps" id="camps" className="navLinks">
              Camps
            </Link>
          </div>

          <div className="linkBox">
            <div to="/calendar" id="calendar" className="navLinks">
              calendar
            </div>
            <div className="dropdownMenu calendarDropMenu">
              <div className="calendarDrop">
                <Link to="/afterschoolcalendar" id="afterSchoolDrop" className="dropLinks">
                  After School
                </Link>
                <Link to="/campCalendar" id="campsDrop" className="dropLinks">
                  Camps
                </Link>
                <Link to="/specialevents" id="eventsDrop" className="dropLinks">
                  Special Events
                </Link>
              </div>
            </div>
          </div>

          <div className="linkBox">
            <div to="" id="registration" className="navLinks">
              registration
            </div>

            <div className="dropdownMenu regis">
              <div className="registrationDrop">
                <Link to="/registerhowto" id="registerDrop" className="dropLinks">
                  How-To Register
                </Link>
                <Link to="/registerOngoing" id="onGoingDrop" className="dropLinks">
                  Ongoing Register
                </Link>
              </div>
            </div>
          </div>

          <div className="linkBox">
            <Link to="/faq" id="faq" className="navLinks">
              faq
            </Link>
          </div>

          <div className="linkBox">
            <Link to="/contact" id="contact" className="navLinks">
              contact
            </Link>
          </div>
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
