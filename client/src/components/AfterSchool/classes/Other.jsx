import React from "react";
import { Link } from "react-router-dom";

const Other = props => {
  return (
    <div className="ClassesContainer otherContainer">
      <Link to="/classes" className="AllClassesLinks">
        <span className="ClassesLeftArrow">&#8249;</span>
        All Classes
      </Link>

      <div className="ClassesTopInnerContainer otherTopInnerContainer">
        <p className="ClassesMainTitle otherMainTitle">Other Classes</p>

        <div className="ClassesRightTop otherRightTop">
          <p className="ClassesRightTopText otherRightTopText">
            View the classes offered at a specific school with the Serious Fun
            program nearest you!
          </p>
          <Link
            to=""
            className="ClassesRightTopLocationBtn otherRightTopLocationBtn"
          >
            CLASSES BY LOCATION
          </Link>
        </div>
      </div>

      <div className="ClassesMidInnerContainer otherMidInnerContainer">
        <div className="ClassesBox otherBox">
          <p className="ClassesSubTitle otherSubTitle">Allergic to Salad</p>

          <Link
            to="https://seriousfunnyc.asapconnected.com/#CourseIndex"
            className="ClassesMidImages otherMidImages otherAllergicSalad"
          />

          <div className="ClassesBoxBottom otherBoxBottom">
            <div className="ClassesInnerTextBox otherInnerTextBox">
              <p className="ClassesInnerSubTitle otherInnerSubTitle">Grades:</p>
              <p className="ClassesInnerSubText otherInnerSubText">
                K, K-1, K-2, K-5, 1, 2-5 (differs by location)
              </p>
            </div>
            <div className="ClassesInnerTextBox otherInnerTextBox">
              <p className="ClassesInnerSubTitle otherInnerSubTitle">Fees:</p>
              <p className="ClassesInnerSubText otherInnerSubText">
                Premium Class | $1050 annually
              </p>
            </div>
            <p className="ClassesInnerBottomPara otherInnerBottomPara">
              Allergic to Salad works to increase life-skills and familiarity
              with healthy foods while developing a platform of exploration and
              passion for adventurous eating through hands-on STEM-based cooking
              classes. We utilize fresh, local, seasonal, and organic
              ingredients whenever possible.
            </p>
          </div>
        </div>
        <div className="ClassesBox otherBox">
          <p className="ClassesSubTitle otherSubTitle">Chess</p>

          <Link
            to="https://seriousfunnyc.asapconnected.com/#CourseIndex"
            className="ClassesMidImages otherMidImages otherChess"
          />

          <div className="ClassesBoxBottom otherBoxBottom">
            <div className="ClassesInnerTextBox otherInnerTextBox">
              <p className="ClassesInnerSubTitle otherInnerSubTitle">Grades:</p>
              <p className="ClassesInnerSubText otherInnerSubText">
                K-1, K-5, 2-5 (differs by location)
              </p>
            </div>
            <div className="ClassesInnerTextBox otherInnerTextBox">
              <p className="ClassesInnerSubTitle otherInnerSubTitle">Fees:</p>
              <p className="ClassesInnerSubText otherInnerSubText">
                Premium Class | $1050 annually
              </p>
            </div>
            <p className="ClassesInnerBottomPara otherInnerBottomPara">
              Chess has been shown to help improve critical thinking skills,
              spatial analysis and non-verbal reasoning. Our chess program
              endeavors to encourage focus and develop concentration while
              having fun! After an initial assessment, lessons are customized to
              fit the needs of the particular group.
            </p>
          </div>
        </div>
        <div className="ClassesBox otherBox">
          <p className="ClassesSubTitle otherSubTitle">Maker Space</p>

          <Link
            to="https://seriousfunnyc.asapconnected.com/#CourseIndex"
            className="ClassesMidImages otherMidImages otherMakerSpace"
          />

          <div className="ClassesBoxBottom otherBoxBottom">
            <div className="ClassesInnerTextBox otherInnerTextBox">
              <p className="ClassesInnerSubTitle otherInnerSubTitle">Grades:</p>
              <p className="ClassesInnerSubText otherInnerSubText">
                K, K-1, K-2, K-5, 1, 2-3, 2-5, 4-5 (differs by location)
              </p>
            </div>
            <div className="ClassesInnerTextBox otherInnerTextBox">
              <p className="ClassesInnerSubTitle otherInnerSubTitle">Fees:</p>
              <p className="ClassesInnerSubText otherInnerSubText">
                Standard Class | $700 annually
              </p>
            </div>
            <p className="ClassesInnerBottomPara otherInnerBottomPara">
              Introducing Serious Fun Maker: a class for creators! What makes a
              light turn on? Or what it is about a motor that makes some cars go
              faster than others? Serious Fun’s Maker Space will follow the
              invention cycle of Create, Play, Remix, and Share, to encourage
              questions of the inquisitive mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
