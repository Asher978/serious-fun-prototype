import React from "react";
import { Link } from "react-router-dom";

const Tuition = props => {
  return (
    <div className="tuitionContainer">
    <div className="tuitionMainTitle">Tuition - After School</div>

    <div className="tuitionInnerContainer">
    <div className="tuitionInnerTop">

    <div className="tuitionLeftSec">
    <p className="tuitionLeftTitle">Annual Program Tuition</p>
    <p className="tuitionLeftSubTitle tuitionTextTitles">Each day at Serious Fun includes:</p>
    <p className="tuitionLeftText">1 class, homework help, and a snack</p>

    <p className="tuitionLeftClassesTitle">Standard Classes (ALL locations):</p>

    <div className="tuitionLeftMidContainer">
    
    <table className="tuitionLeftMidTable">
    <tbody>
    <tr className="MidContainerTopHR">
      <th><p className="tuitionTHLeftP">Per Week</p><p className="tuitionTHRightP">Annual Cost</p></th>

    </tr>
    </tbody>
    <tbody>
    <tr>
      <td>1 day</td>
      <td>$700.00</td>
      </tr>
      <tr>
      <td>2 day</td>
      <td>$1,400.00</td>
      </tr>
      <tr>
      <td>3 day</td>
      <td>$2,100.00</td>
      </tr>
      <tr>
      <td>4 day</td>
      <td>$2,800.00</td>
      </tr>
      <tr>
      <td>5 day</td>
      <td>$3,500.00</td>
    </tr>
    </tbody>
  </table>
    </div>


    
    <p className="tuitionLeftClassesTitle">Material & Premium Partner Fees:</p>

    <div className="tuitionLeftMidContainer">
    <table className="tuitionLeftMidTable">
    <tbody>
    <tr className="MidContainerTopHR BottomHR">
      <th><p className="tuitionTHLeftP">Class</p><p className="tuitionTHRightP">Additional Cost</p></th>
    </tr>
    <tr>
      <td>A2S</td>
      <td>$350.00</td>
      </tr>
      <tr>
      <td>BEAT</td>
      <td>$350.00</td>
      </tr>
      <tr>
      <td>Chess</td>
      <td>$350.00</td>
      </tr>
      <tr>
      <td>Maker</td>
      <td>$350.00</td>
      </tr>
      <tr>
      <td>Writopia</td>
      <td>$800.00</td>
    </tr>
    </tbody>
  </table>

    </div>

    <p className="tuitionLeftMidText"> Material and Premium Partner annual fees are non discountable and non refundable.</p>
    <Link to="/classes" id="tuitionClassesBtn" className="tuitionTextBtn">SEE CLASSES</Link>
    </div>


    <div className="tuitionRightSec">
    <p className="tuitionRightTitle">Additional Program Fees</p>

    <div className="tuitionRightInfo">
    <p className="tuitionRightSubTitle tuitionTextTitles">Registration:</p>
    <p className="tuitionRightSubTitleText">$50.00 per family</p>
    <p className="tuitionRightText">Non-Refundable <br></br>Due in full at time of registration</p>
    </div>
    <div className="tuitionRightInfo">
    <p className="tuitionRightSubTitle tuitionTextTitles">Drop-In:</p>
    <p className="tuitionRightSubTitleText">$25.00 per day</p>
    <p className="tuitionRightText">Must be requested 2 school days in advance<br></br>5 drop-in day limit per month</p>
    </div>
    <div className="tuitionRightInfo">
    <p className="tuitionRightSubTitle tuitionTextTitles">Administration:</p>
    <p className="tuitionRightSubTitleText">$25.00 per class change or cancellation</p>
    </div>

    <p className="tuitionRightTitle rightBottom">Cancellation Policy</p>
    <p className="tuitionRightCancelSubTitle">Must be submitted in writing by 1st of month prior to cancellation month.</p>
    <p className="tuitionRightCancelSubText">No cash or credit card refunds will be provided. Credits may be applied to child care services for up to one year following cancellation.</p>
    <Link to="/policies" id="tuitionPolicyBtn" className="tuitionTextBtn">READ POLICIES</Link>
    </div>
    </div>



    <div className="tuitionInnerBottom">
    <p className="tuitionTextTitles">Current Program Dates:</p>
    <p className="tuitionTextDate">Sept 11, 2017 - June 1, 2018</p>
    <p className="tuitionTextPara">You may register your child at any point throughout the school year. The tuition will be pro-rated.</p>
    <Link to="/registerhowto" id="tuitionRegisterBtn" className="tuitionTextBtn">REGISTER NOW</Link>
    </div>
    </div>
    
    </div>
  );
};

export default Tuition;
