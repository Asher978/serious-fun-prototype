import React from "react";
import { Link } from "react-router-dom";

const Language = props => {
  return (
    <div className="ClassesContainer languageContainer">
    
    <Link to="/classes" className="AllClassesLinks">
    <span className="ClassesLeftArrow">&#8249;</span>
    All Classes
    </Link>

    <div className="ClassesTopInnerContainer languageTopInnerContainer">
    <p className="ClassesMainTitle languageMainTitle">Language & Writing Classes</p>
    
    <div className="ClassesRightTop languageRightTop">
    <p className="ClassesRightTopText languageRightTopText">View the classes offered at a specific school with the Serious Fun program nearest you!</p>
    <Link to="" className="ClassesRightTopLocationBtn languageRightTopLocationBtn">CLASSES BY LOCATION</Link>
    </div>
    </div>

    <div className="ClassesMidInnerContainer languageMidInnerContainer">
    
    <div className="ClassesBox languageBox">
    <p className="ClassesSubTitle languageSubTitle">Spanish</p>
    
    <Link to="https://seriousfunnyc.asapconnected.com/#CourseIndex" className="ClassesMidImages languageMidImages languageSpanish"></Link>

    <div className="ClassesBoxBottom languageBoxBottom">
    
    <div className="ClassesInnerTextBox languageInnerTextBox">
    <p className="ClassesInnerSubTitle languageInnerSubTitle">Grades:</p>
    <p className="ClassesInnerSubText languageInnerSubText">K-1, 2-5 (differs by location)</p>
    </div>
    <div className="ClassesInnerTextBox languageInnerTextBox">
    <p className="ClassesInnerSubTitle languageInnerSubTitle">Fees:</p>
    <p className="ClassesInnerSubText languageInnerSubText">Standard Class | $700 annually</p>
    </div>
    <p className="ClassesInnerBottomPara languageInnerBottomPara">Spanish visual literacy, cognitive skills development, art appreciation and cultural awareness all in one fun class!</p>
    </div>
    </div>
    <div className="ClassesBox languageBox">
    <p className="ClassesSubTitle languageSubTitle">Writopia</p>
    
    <Link to="https://seriousfunnyc.asapconnected.com/#CourseIndex" className="ClassesMidImages languageMidImages languageWritopia"></Link>

    <div className="ClassesBoxBottom languageBoxBottom">
    
    <div className="ClassesInnerTextBox languageInnerTextBox">
    <p className="ClassesInnerSubTitle languageInnerSubTitle">Grades:</p>
    <p className="ClassesInnerSubText languageInnerSubText">4-5 only (check for locations)</p>
    </div>
    <div className="ClassesInnerTextBox languageInnerTextBox">
    <p className="ClassesInnerSubTitle languageInnerSubTitle">Fees:</p>
    <p className="ClassesInnerSubText languageInnerSubText">Standard Class | $700 annually</p>
    </div>
    <p className="ClassesInnerBottomPara languageInnerBottomPara">Writopia Lab is a national community of young writers, ages 6 to 18. Founded in New York City in 2007, Writopia Lab has now spread to Greater New York, Greater Washington, D.C., Chicago and Los Angeles.
    <br></br>
    <br></br>
    Parents: At Writopia, your kids enjoy individual attention, fun writing games, stellar feedback from published authors trained in our method, and, best of all, the satisfaction of completing a wonderful original story.</p>
    </div>
    </div>



    
    </div>


    </div>
  );
};

export default Language;
