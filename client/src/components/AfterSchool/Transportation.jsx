import React from "react";
import { Link } from "react-router-dom";

const Transportation = props => {
  return (
    <div className="transportationContainer">
    <p className="transportationMainTitle">Transportation</p>
    <div className="transportationInnerContainer">
    
    <div className="transportationInnerTop">
    <div className="transportationInnerLeftSec">
    
    <p className="transportationInnerTopText">All bussing costs and agreements (including cost of transportation) are made directly between the transportation company and the parent.  Any child being transported by bus will need a School Authorization Letter.</p>
    <p className="transportationInnerTopText">Serious Fun’s Transportation Coordinator rides on the bus with the children every day to make sure all children are accounted for and have a safe and happy ride to their Serious Fun site!</p>
    <p className="transportationInnerMidTile">Astoria Express Transit</p>
    <p className="transportationInnerMidText">Please contact Astoria Express directly for  information regarding service and pricing on bus transportation.</p>
    <p className="transportationInnerContactTitle">Contact</p>
    <p className="transportationInnerContactPhone">(718) 626-3369</p>
    <Link to="http://www.astoriaexpress.com" id="transportationContactLink"className="transportationInnerContactLink">Visit their website</Link>
    </div>
    <div className="transportationInnerRightSec">
    <div className="transportationInnerImage"></div>
    </div>
    </div>

    <div className="transportationInnerBottom">
    <p className="transportationInnerBottomTitle">School Authorization Letter</p>
    <p className="transportationInnerBottomText">A School Authorization Letter is available from Serious Fun upon receipt of your registration.  Please note that the transportation company cannot pick up your child without the School Authorization Letter.</p>
    <p className="transportationInnerBottomSubText">It is the responsibility of the parent to arrange transportation for his/her child at the conclusion of the Serious Fun program.</p>
    <Link to="" id="transportationAuthorizationBtn" className="transportationInnerBottomBtn">OPEN PDF LETTER</Link>
    
    </div>
    </div>
     



    </div>
  );
};

export default Transportation;