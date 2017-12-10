import React from "react";
import { Link } from "react-router-dom";

const Supporters = props => {
  return (
    <div className="supportersContainer">
    
    <div className="supportersTop">
    <div className="supportTitle">Our Supporters</div>
    <p className="supportTitleText">Serious Fun is grateful for our private, public, foundation and government supporters.</p>
    </div>

    <div className="supportersMid">
    <div className="supportLogos"></div>
    <div className="supportLogos"></div>
    </div>

    <div className="supportersBottom">
    <p className="supportBottomTitle">Individual Donors</p>

    <div className="supportBottomContainer">

    <hr className="supportBottomHR"></hr>
    <div className="supportDonors">
    <p className="supportBottomSubTitle">SERIOUS FUN BENEFACTOR!</p>
    <p className="supportBottomTextTop">($101+)</p>
    <p className="supportBottomTextBottom">First and last name</p>
    </div>
    <hr className="supportBottomHR"></hr>
    <div className="supportDonors">
    <p className="supportBottomSubTitle">SERIOUS FUN!</p>
    <p className="supportBottomTextTop">($51-101)</p>
    <p className="supportBottomTextBottom">First and last name</p>
    </div>
    <hr className="supportBottomHR"></hr>
    <div className="supportDonors">
    <p className="supportBottomSubTitle">SERIOUS!</p>
    <p className="supportBottomTextTop">($26-50)</p>
    <p className="supportBottomTextBottom">First and last name</p>
    </div>
    <hr className="supportBottomHR"></hr>
    <div className="supportDonors">
    <p className="supportBottomSubTitle">FUN!</p>
    <p className="supportBottomTextTop">(up to $25)</p>
    <p className="supportBottomTextBottom">First and last name</p>
    </div>
    </div>

    </div>

    </div>
  );
};

export default Supporters;
