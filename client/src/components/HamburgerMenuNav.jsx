import { Link } from "react-router-dom";
import React from "react";



export class Section extends React.Component{
  constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
  this.state = {
    open: false,
    class: "section"
    };
  }
  handleClick(e){
    e.stopPropagation();
    if(this.state.open) {
      this.setState({
        open: false,
        class: "section"
      });
    }else{
      this.setState({
        open: true,
        class: "section open"
      });
    }
  }

  render() {
    return (
      <div className={this.state.class}>
        <button className="accordionIcon"></button>
        <div className="sectionhead" onClick={this.handleClick}>{this.props.title}</div>
        <div className="articlewrap">
          <div className="article">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
};

const HamburgerMenuNav = (props) => {
    let { display } = props;
    return (
      <div className="main" style={display}>
        <div title="Home" className="linkBoxMobile">
          <Link to="/" id="homeMobile" className="navLinksMobile">
            home
          </Link>
        </div>

        <hr className="mobileHR"/>

        <Section title="About">
          <Link to="/aboutus" id="aboutDropMobile" className="dropLinksMobile">
            About Us
          </Link>
          <Link to="/ourteam" id="teamDropMobile" className="dropLinksMobile">
            Our Team
          </Link>
          <Link to="/careers" id="workDropMobile" className="dropLinksMobile">
            Work With Us
          </Link>
          <Link to="/supporters" id="supportDropMobile" className="dropLinksMobile">
            Our Supporters
          </Link>
          <Link to="/peoplesay" id="peoplesayDropMobile" className="dropLinksMobile">
            What People Say
          </Link>
        </Section>

        <hr className="mobileHR"/>

        <Section title="After School">
          <Link to="/overview" id="overviewDropMobile" className="dropLinksMobile">
            Overview
          </Link>
          <Link to="/locations" id="locationDropMobile" className="dropLinksMobile">
            Locations
          </Link>
          <Link to="/classes" id="tuitionDropMobile" className="dropLinksMobile">
            Classes
          </Link>
          <Link to="/tuition" id="tuitionDropMobile" className="dropLinksMobile">
            Tuition
          </Link>
          <Link to="/transportation" id="transportationDropMobile" className="dropLinksMobile">
            Transportation
          </Link>
          <Link to="/policies" id="policyDropMobile" className="dropLinksMobile">
            Policies
          </Link>
        </Section>

        <hr className="mobileHR"/>

        <div title="Camps" className="linkBoxMobile">
          <Link to="/camps" id="campsMobile" className="navLinksMobile">
            Camps
          </Link>
        </div>

        <hr className="mobileHR"/>


        <Section title="Calendar">
          <Link to="/afterschoolcalendar" id="afterSchoolDropMobile" className="dropLinksMobile">
            After School
          </Link>
          <Link to="/campCalendar" id="campsDropMobile" className="dropLinksMobile">
            Camps
          </Link>
          <Link to="/specialevents" id="eventsDropMobile" className="dropLinksMobile">
            Special Events
          </Link>
        </Section>

        <hr className="mobileHR"/>

        <Section title="Registration">
          <Link to="/registerhowto" id="registerDropMobile" className="dropLinksMobile">
            How-To Register
          </Link>
          <Link to="/registerOngoing" id="onGoingDropMobile" className="dropLinksMobile">
            Ongoing Register
          </Link>
        </Section>

        <hr className="mobileHR"/>

        <div title="Faq" className="linkBoxMobile">
          <Link to="/faq" id="faq" className="navLinksMobile">
            faq
          </Link>
        </div>

        <hr className="mobileHR"/>

        <div title="Contact" className="linkBoxMobile">
          <Link to="/contact" id="contactMobile" className="navLinksMobile">
            contact
          </Link>
        </div>
      </div>
    );
};
export default HamburgerMenuNav;


// React.renderComponent(<Accordion title="Accordion Title Here" />, document.getElementById('accordian'));



// document.querySelector(".linkBoxMobile").addEventListener("click", function(event) {
//        console.log("Sorry! <code>preventDefault()</code> won't let you check this!<br>");
//        event.stopPropagation();
//        event.preventDefault();
// }, false);

// const HamburgerMenuNav = (props) => {
//   let { display } = props;
//   return (
//       <div className="narrowLinks" style={display}>
//         <div className="linkBoxMobile">
//           <Link to="/" id="homeMobile" className="navLinksMobile">
//             home
//           </Link>
//         </div>

//         <hr className="mobileHR"/>

//         <div className="linkBoxMobile">
//           <div id="aboutMobile" className="navLinksMobile">
//             about<span className="mobilePlusIcon">+</span>
//           </div>



//           <div className="dropdownMenuMobile">
//             <div className="aboutDropMobile">
//               <Link to="/aboutus" id="aboutDropMobile" className="dropLinksMobile">
//                 About Us
//               </Link>
//               <Link to="/ourteam" id="teamDropMobile" className="dropLinksMobile">
//                 Our Team
//               </Link>
//               <Link to="/careers" id="workDropMobile" className="dropLinksMobile">
//                 Work With Us
//               </Link>
//               <Link to="/supporters" id="supportDropMobile" className="dropLinksMobile">
//                 Our Supporters
//               </Link>
//               <Link to="/peoplesay" id="peoplesayDropMobile" className="dropLinksMobile">
//                 What People Say
//               </Link>
//             </div>
//           </div>
//         </div>

//         <hr className="mobileHR"/>

//         <div className="linkBoxMobile">
//           <div to="" id="afterSchoolMobile" className="navLinksMobile">
//             After School<span className="mobilePlusIcon">+</span>
//           </div>
//           <div className="dropdownMenuMobile">
//             <div className="programDropMobile">
//               <Link to="/overview" id="overviewDropMobile" className="dropLinksMobile">
//                 Overview
//               </Link>
//               <Link to="/locations" id="locationDropMobile" className="dropLinksMobile">
//                 Locations
//               </Link>
//               <Link to="/classes" id="tuitionDropMobile" className="dropLinksMobile">
//                 Classes
//               </Link>
//               <Link to="/tuition" id="tuitionDropMobile" className="dropLinksMobile">
//                 Tuition
//               </Link>
//               <Link
//                 to="/transportation"
//                 id="transportationDropMobile"
//                 className="dropLinksMobile"
//               >
//                 Transportation
//               </Link>
//               <Link to="/policies" id="policyDropMobile" className="dropLinksMobile">
//                 Policies
//               </Link>
//             </div>
//           </div>
//         </div>

//         <hr className="mobileHR"/>

//         <div className="linkBoxMobile">
//           <Link to="/camps" id="campsMobile" className="navLinksMobile">
//             Camps
//           </Link>
//         </div>

//         <hr className="mobileHR"/>

//         <div className="linkBoxMobile">
//           <div to="/calendar" id="calendarMobile" className="navLinksMobile">
//             calendar<span className="mobilePlusIcon">+</span>
//           </div>
//           <div className="dropdownMenuMobile calendarDropMenuMobile">
//             <div className="calendarDropMobile">
//               <Link to="/afterschoolcalendar" id="afterSchoolDropMobile" className="dropLinksMobile">
//                 After School
//               </Link>
//               <Link to="/campCalendar" id="campsDropMobile" className="dropLinksMobile">
//                 Camps
//               </Link>
//               <Link to="/specialevents" id="eventsDropMobile" className="dropLinksMobile">
//                 Special Events
//               </Link>
//             </div>
//           </div>
//         </div>

//         <hr className="mobileHR"/>

//         <div className="linkBoxMobile">
//           <div to="" id="registrationMobile" className="navLinksMobile">
//             registration<span className="mobilePlusIcon">+</span>
//           </div>
//           <div className="dropdownMenuMobile regisMobile">
//             <div className="registrationDropMobile">
//               <Link to="/registerhowto" id="registerDropMobile" className="dropLinksMobile">
//                 How-To Register
//               </Link>
//               <Link to="/registerOngoing" id="onGoingDropMobile" className="dropLinksMobile">
//                 Ongoing Register
//               </Link>
//             </div>
//           </div>
//         </div>

//         <hr className="mobileHR"/>

//         <div className="linkBoxMobile">
//           <Link to="/faq" id="faq" className="navLinksMobile">
//             faq
//           </Link>
//         </div>

//         <hr className="mobileHR"/>

//         <div className="linkBoxMobile">
//           <Link to="/contact" id="contactMobile" className="navLinksMobile">
//             contact
//           </Link>
//         </div>
//       </div>
//     );
// };

// export default HamburgerMenuNav;
