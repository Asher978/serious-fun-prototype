import React from "react";
import { Link } from "react-router-dom";

const Camps = props => {
  return (
    <div className="campsContainer">
    <div className="campsTop">
    <p className="campsMainTitle">Camp - Winter Recess</p>
    <div className="campsDropBtn">Select Season <span className="downMenuArrow">&#8250;</span></div>  
    </div>

    <div className="campsInnerContainer">
    <div className="campsInnerContainerTop">
    <p className="campsTopTitles">A. Overview</p>
    <p className="campsTopTitles">B. Dates</p>
    <p className="campsTopTitles">C. Location</p>
    <p className="campsTopTitles">D. Register</p>
    </div>
    </div>
    <hr className="campsHR"></hr>
    <div className="campsInnerContainer">
    <Link to="" id="campsRegisterBtn" className="campsRegisterBtn">REGISTER</Link>
    </div>
    <div className="campsInnerContainerBottom">
    <p className="campsTopTitles bottomTitles">A. Overview</p>
    <p className="campsTopTitlesInfo">(insert info here)</p>
    </div>

    <hr className="campsHR"></hr>
    <div className="campsInnerContainerBottom">
    <p className="campsTopTitles bottomTitles">B. Dates</p>
    <p className="campsTopTitlesInfo">(insert info here)</p>
    </div>
    <hr className="campsHR"></hr>
    <div className="campsInnerContainerBottom">
    <p className="campsTopTitles bottomTitles">C. Location</p>
    <p className="campsTopTitlesInfo">(insert info here)</p>
    </div>
    <hr className="campsHR"></hr>
    <div className="campsInnerContainerBottom">
    <p className="campsTopTitles bottomTitles">D. Register</p>
    <p className="campsTopTitlesInfo">(insert info here)</p>
    </div>

    
    </div>


  );
};

export default Camps;
