import React from "react";
import { Link } from "react-router-dom";

const AboutUs = props => {
  return (
    <div className="aboutUs">
      <div className="aboutUsPic" />

      <div className="aboutUsInfoContainer">
        <div className="aboutUsInfoMission">
          <div className="infoOurTitle">Our Mission</div>
          <div className="infoOurText">Serious Fun After School, Inc. is a non-profit organization dedicated to providing arts enrichment during after school time at affordable rates, so that our children have the opportunity to participate in the best that New York has to offer. Our priority is providing our students with the highest quality content while overseeing the safety and security of our students.</div>
        </div>

        <div className="aboutUsInfoStaff">
          <div className="infoOurTitle">Our Staff</div>
          <div className="infoOurText">In order to provide the highest quality content, Serious Fun partners with professionals of their trade, from art to music and more, who are dedicated to providing age-appropriate experiences for our students. Class sizes are limited for more individualized attention.</div>
        </div>

        <div className="aboutUsInfoDifference">
          <div className="infoOurTitle">Our Difference</div>
          <div className="infoOurText">Unlike traditional drop-off classes, Serious Fun is registered with New York State as a licensed School Age Child Care (SACC) center. Registration as a licensed SACC center requires that all of our staff, both Supervisory Staff and Teaching Artists, undergo a thorough background check through the New York State Central Register and participate in ongoing child care training, including child abuse recognition and reporting. Registration certifies that Serious Fun has met all the conditions set by New York State and the City of New York to qualify as a child care center.</div>
        </div>

        <div className="infoOurMoreInfo">As a registered child care provider, the cost of the Serious Fun program and transportation can be deducted from federal income taxes for families that qualify. <Link to="" className="infoOurMoreInfoLinks">Click Here</Link> for information on the Child Care Tax Deduction. <Link to="" className="infoOurMoreInfoLinks">Click Here</Link> for information on using employer Dependent Care Savings Accounts to pay for your child care expenses. If you have any questions or would like to learn more, please contact us! </div>
      </div>
    </div>
  );
};

export default AboutUs;
