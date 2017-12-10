import React from "react";
import { Link} from "react-router-dom";

const Contact = props => {
  return (
    <div className="contactContainer">
      <div className="contactTop">
        <div className="Contact-Serious-Fun">
          Contact Serious Fun HQ
        </div>
        <div className="contactPhoneFaxContainer">
          <div className="contact Phone">Phone:
            <span className="contactPhoneNumber">
              (718)956-5945
            </span>
          </div>
          <div className="contact Fax">Fax:
            <span className="contactFaxNumber">
              (646)459-3559
            </span>
          </div>
          <Link to="/" className="contactEmailBtn">EMAIL
          </Link>
          <div className="Sign-up-for-Serious">
            Sign up for Serious Fun email news updates by clicking below or texting SERIOUSFUN to 42828
          </div>
          <Link to="/" className="contactEmailSignupBtn">SIGN UP
          </Link>
        </div>
        <div className="Contact-A-Program-Lo">
          Contact A Program Location
        </div>
      </div>




      <div className="afterSchoolContainer">
        <div className="afterSchoolTop">

        </div>

        <div className="afterSchoolLocationContainer">
        <div className="afterSchoolLocation first">
          <div className="afterSchoolLocationTitle">Queens</div>

          <div className="afterSchoolLocationInfoColumnContainer">
          <div className="afterSchoolLocationInfoColumn ">
          <div className="afterSchoolLocationInfo">
            <div className="afterSchoolLocationInfoTitle">PS 17 Q</div>
            <div className="contactSchoolLocationInfoText">28-37 29th Street | Astoria, NY 11102
              <br></br> (000) 000-0000
              <br></br> Site Director | Mr. Ronald Velez
              <br></br> Site Supervisor | Ms. Jessica Ibarra
              <br></br> Grades Pre-K through 5th
            </div>
            <div className="contactEmailContainer">
              <Link to="/" className="contactEmailBtn">EMAIL
              </Link>
            </div>
          </div>
          <div className="afterSchoolLocationInfo">
            <div className="afterSchoolLocationInfoTitle">PS/IS 78 Q (Grades K-1)</div>
            <div className="contactSchoolLocationInfoText">48-09 Center Blvd | L.I.C., NY 11109
               <br></br> (000) 000-0000
               <br></br> Site Director | Ms. Denise Finkley
               <br></br> Site Supervisor | Ms. Gloria Ruiz
               <br></br> Grades K-1 (PS/IS 78 students only)
             </div>
            <div className="contactEmailContainer">
              <Link to="/" className="contactEmailBtn">EMAIL
              </Link>
            </div>
          </div>
          <div className="afterSchoolLocationInfo last">
            <div className="afterSchoolLocationInfoTitle">PS 150 Q</div>
            <div className="contactSchoolLocationInfoText">41-01 43rd Ave | Sunnyside, NY 11104
              <br></br> (000) 000-0000
              <br></br> Site Supervisor | Ms. Sala Johnson
              <br></br> Grades PreK-5 (PS 150 students only)
            </div>
            <div className="contactEmailContainer">
              <Link to="/" className="contactEmailBtn">EMAIL
              </Link>
            </div>
          </div>
          </div>
          <div className="afterSchoolLocationInfoColumn second ">
          <div className="afterSchoolLocationInfo">
            <div className="afterSchoolLocationInfoTitle">PS 85 Q</div>
            <div className="contactSchoolLocationInfoText">23-70 31st Street | Astoria, NY 11105
              <br></br> (000) 000-0000
              <br></br> Site Director | Ms. Christine Cosmo
              <br></br> Site Supervisor | Ms. Na-Tasha Baldwin
              <br></br> Grades K through 5th
            </div>
            <div className="contactEmailContainer">
              <Link to="/" className="contactEmailBtn">EMAIL
              </Link>
            </div>
          </div>
          <div className="afterSchoolLocationInfo">
            <div className="afterSchoolLocationInfoTitle">PS/IS 78 Q (Grades 2-5)</div>
            <div className="contactSchoolLocationInfoText">46-08 Fifth Street | L.I.C., NY 11101
               <br></br> (000) 000-0000
               <br></br> Site Director | Ms. Denise Finkley
               <br></br> Site Supervisor | Ms. Jiana Alphonse
               <br></br> Grades 2-5 (PS/IS 78 students only)
             </div>
            <div className="contactEmailContainer">
              <Link to="/" className="contactEmailBtn">EMAIL
              </Link>
            </div>
          </div>
          <div className="afterSchoolLocationInfo last">
            <div className="afterSchoolLocationInfoTitle">PS 166 Q </div>
            <div className="contactSchoolLocationInfoText">33-09 35th Ave | Astoria, NY 11106
            <br></br> (000) 000-0000
            <br></br> Site Director | Ms. Josette Jimenez
            <br></br> Site Supervisor | Ms. Ana Holguin
            <br></br> Grades Pre-K through 5th</div>
            <div className="contactEmailContainer">
              <Link to="/" className="contactEmailBtn">EMAIL
              </Link>
            </div>
          </div>

        </div>
        </div>
        </div>
        <hr className="contactHRVerticalLine"/>

        <div className="afterSchoolLocation">
        <div className="afterSchoolLocationTitle">Manhattan</div>

        <div className="afterSchoolLocationInfoColumn second secLast">
        <div className="afterSchoolLocationInfo">
          <div className="afterSchoolLocationInfoTitle">PS 33 Chelsea Prep </div>
          <div className="contactSchoolLocationInfoText">281 9th Ave | New York, NY 10001
          <br></br> (000) 000-0000
          <br></br> Site Supervisor | Mr. Anthony Ruiz
          <br></br> Grades Pre-K through 5th</div>
          <div className="contactEmailContainer">
            <Link to="/" className="contactEmailBtn">EMAIL
            </Link>
          </div>
        </div>
        </div>
      </div>
      </div>







      </div>
    </div>





  );
};

export default Contact;
