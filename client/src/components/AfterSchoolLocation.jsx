import React from "react";
import { Link } from "react-router-dom";

const AfterSchoolLocations = props => {
  return (
    <div className="afterSchoolContainer">
      <div className="afterSchoolTop">
      <div className="afterSchoolTitle">Serious Fun Locations</div>
      <Link to="/" className="afterSchoolBtn">Select Location</Link>

      </div>

      <div className="afterSchoolLocationContainer">
      <div className="afterSchoolLocation first">
        <div className="afterSchoolLocationTitle">Queens</div>


        <div className="afterSchoolLocationInfoColumnContainer">
        <div className="afterSchoolLocationInfoColumn ">
        <div className="afterSchoolLocationInfo">
          <div className="afterSchoolLocationInfoTitle">PS 17 Q</div>
          <div className="afterSchoolLocationInfoText">28-37 29th Street <br></br> Astoria, NY 11102 <br></br> Grades Pre-K through 5th</div>
        </div>
        <div className="afterSchoolLocationInfo">
          <div className="afterSchoolLocationInfoTitle">PS/IS 78 Q (Grades K-1)</div>
          <div className="afterSchoolLocationInfoText">48-09 Center Blvd <br></br> Long Island City, NY 11109 <br></br> Grades K through 1st <br></br> (PS/IS 78 students only)</div>
        </div>
        <div className="afterSchoolLocationInfo last">
          <div className="afterSchoolLocationInfoTitle">PS 150 Q</div>
          <div className="afterSchoolLocationInfoText">41-01 43rd Ave <br></br> Sunnyside, NY 11104 <br></br> Grades Pre-K through 5th <br></br> (PS 150 students only)</div>
        </div>
        </div>
        <div className="afterSchoolLocationInfoColumn second ">
        <div className="afterSchoolLocationInfo">
          <div className="afterSchoolLocationInfoTitle">PS 85 Q</div>
          <div className="afterSchoolLocationInfoText">23-70 31st Street <br></br> Astoria, NY 11105 <br></br> Grades K through 5th</div>
        </div>
        <div className="afterSchoolLocationInfo">
          <div className="afterSchoolLocationInfoTitle">PS/IS 78 Q (Grades 2-5)</div>
          <div className="afterSchoolLocationInfoText">46-08 Fifth Street <br></br> Long Island City, NY 11101 <br></br> Grades 2nd through 5th <br></br> (PS/IS 78 students only)</div>
        </div>
        <div className="afterSchoolLocationInfo last">
          <div className="afterSchoolLocationInfoTitle">PS 166 Q </div>
          <div className="afterSchoolLocationInfoText">33-09 35th <br></br> Ave Astoria, NY 11106 <br></br> Grades Pre-K through 5th</div>
        </div>
        
      </div>
      </div>
      </div>
      <hr className="hrVerticalLine"/>

      <div className="afterSchoolLocation">
      <div className="afterSchoolLocationTitle">Manhattan</div>

      <div className="afterSchoolLocationInfoColumn second secLast">
      <div className="afterSchoolLocationInfo">
        <div className="afterSchoolLocationInfoTitle">PS 33 Chelsea Prep </div>
        <div className="afterSchoolLocationInfoText">281 9th Ave <br></br> New York, NY 10001 <br></br> Grades Pre-K through 5th</div>
      </div>
      </div>
    </div>
    </div>

    <div className="infoLocationBottomText">Serious Fun has programs at these sites, but will accept children from other locations provided they coordinate their transportation.</div>
    <div className="infoLocationBottomMap"></div>





    </div>

  );
};

export default AfterSchoolLocations;
