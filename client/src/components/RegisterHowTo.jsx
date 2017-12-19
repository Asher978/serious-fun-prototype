import React from "react";
import { Link } from "react-router-dom";

const registerHowTo = props => {
  return(
    <div className="registerHowToContainer">
      <h1 className="how-To-Register">HOW TO REGISTER</h1>
      <h2 className="sign-up-your-child">Sign Your Child Up For Serious Fun After School</h2>
      <div className="registerHowToLogos">
        <div>
          <a href="#regisIDOne"><img alt='' src={require("../assets/register/image-dskp-reg-registration-icon.png")}/>
          <p className="registerLogosSteps">Step 1</p>
          <p className="registerLogosStepsText">Register</p></a>
        </div>
        <img alt='' src={require("../assets/register/image-dskp-reg-arrow-icon.png")}/>
        <div>
        <a href="#regisIDTwo"><img alt='' src={require("../assets/register/image-dskp-reg-enroll-icon.png")}/>
          <p className="registerLogosSteps">Step 2</p>
          <p className="registerLogosStepsText">Enroll</p></a>
        </div>
        <img alt='' src={require("../assets/register/image-dskp-reg-arrow-icon.png")}/>
        <div>
        <a href="#regisIDThree">
          <img alt='' src={require("../assets/register/image-dskp-reg-meet-icon.png")}/>
          <p className="registerLogosSteps">Step 3</p>
          <p className="registerLogosStepsText">Meet</p></a>
        </div>
      </div>

      <hr className="line-2"/>

      <div className="registerMainTextContainer">
        <h3 className="registerSubtitle">Serious Fun Program Dates</h3>
        <h4 className="registerSubtitleSmall">Current Program Dates:</h4>
        <p className="registerText">Sept 11, 2017 - June 1, 2018</p>
        <br></br>
        <h4 className="registerSubtitleSmall">Ongoing Registration:</h4>
        <p className="registerText">Children can start in a Serious Fun program at any point during the school year at a prorated tuition. The start dates for ongoing registration are every 1st and 15th of the month (or the following Monday if the 1st or 15th falls during the weekend.</p>
        <button  className="registerBtn"><Link to="/registerOngoing">ONGOING REGISTRATION</Link></button>
      </div>

      <hr className="line-2"/>

      <div className="registerMainTextContainer">
        <div className="registerNumberContainer">
          <img alt='' src={require("../assets/register/image-dsktp-step-1.png")}/>
          <span id="regisIDOne" className="registerSubtitleBig">Register Your Child</span>
        </div>
        <div className="registerMainInnerTextContainer">
          <p className="registerText">You must first complete a full Registration Packet before enrolling your child in a Serious Fun After School Program. This step should be completed online. To register your child, you will need to provide the following:</p>
          <ul className="registerListItems">
            <li>Completed Registration Form</li>
            <li>Payment Agreement</li>
            <li>Statememet of Understanding</li>
            <li>Payment Authorization Form</li>
            <li>Medical Form</li>
          </ul>
          <h3 className="registerSubtitle">Additional Healthcare Needs</h3>
          <p className="registerText">If your child has any special healthcare needs, especially if they require emergency allergy medication, please have your doctor also complete and sign the following forms:</p>
          <ul className="registerListItems">
            <li>Individual Health Care Plan</li>
            <li>Medication Consent Form</li>
          </ul>
          <button  className="registerBtn"><Link to="/registerOngoing">REGISTER NOW</Link></button>
        </div>
      </div>


      <hr className="line-2"/>

      <div className="registerMainTextContainer">
        <div className="registerNumberContainer">
          <img alt='' src={require("../assets/register/image-dsktp-step-2.png")}/>
          <span id="regisIDTwo" className="registerSubtitleBig">Enroll in Enrichment Classes</span>
        </div>
        <div className="registerMainInnerTextContainer">
          <p className="registerText">Once you have completed the full Registration Packet, you should review and select the daily enrichment classes you would like to enroll your child in. </p>
          <button class="registerBtn"><Link to="/registerOngoing">CHOOSE CLASSES</Link></button>
        </div>
      </div>


      <hr className="line-2"/>


      <div className="registerMainTextContainer">
        <div className="registerNumberContainer">
          <img alt='' src={require("../assets/register/image-dsktp-step-3.png")}/>
          <span id="regisIDThree" className="registerSubtitleBig">Meet the Site Director</span>
        </div>
        <div className="registerMainInnerTextContainer">
          <p className="registerText">To complete signing your child up, book an in-person appointment to meet with the site director of the Serious Fun location your child will attend.</p>
          <button class="registerBtn"><a href="http://seriousfunnyc.simplybook.me/v2"> BOOK APPOINTMENT</a></button>
        </div>
      </div>

      <hr className="line-2"/>
      <div className="registerMainTextContainer">
        <p className="registerBottomText">State law requires that we have a full Registration Packet on file containing all documents above before a child can attend our program. Even if your tuition is paid in full, tour child  will not be admitted to the program until all documents are submitted and all three steps are completed.</p>
      </div>
    </div>
  );
};

export default registerHowTo;
