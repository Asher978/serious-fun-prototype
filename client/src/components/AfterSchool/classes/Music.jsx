import React from "react";
import { Link } from "react-router-dom";

const Music = props => {
  return (
    <div className="ClassesContainer musicContainer">
      <Link to="/classes" className="AllClassesLinks">
        <span className="ClassesLeftArrow">&#8249;</span>
        All Classes
      </Link>

      <div className="ClassesTopInnerContainer musicTopInnerContainer">
        <p className="ClassesMainTitle musicMainTitle">Music Classes</p>

        <div className="ClassesRightTop musicRightTop">
          <p className="ClassesRightTopText musicRightTopText">
            View the classes offered at a specific school with the Serious Fun
            program nearest you!
          </p>
          <Link
            to=""
            className="ClassesRightTopLocationBtn musicRightTopLocationBtn"
          >
            CLASSES BY LOCATION
          </Link>
        </div>
      </div>

      <div className="ClassesMidInnerContainer musicMidInnerContainer">
        <div className="ClassesBox musicBox">
          <p className="ClassesSubTitle musicSubTitle">Guitar</p>

          <Link
            to="https://seriousfunnyc.asapconnected.com/#CourseIndex"
            className="ClassesMidImages musicMidImages MusicGuiter"
          />

          <div className="ClassesBoxBottom musicBoxBottom">
            <div className="ClassesInnerTextBox musicInnerTextBox">
              <p className="ClassesInnerSubTitle musicInnerSubTitle">Grades:</p>
              <p className="ClassesInnerSubText musicInnerSubText">
                PK-K, K, 1, K-1, K-2, K-5, 1-2, 1-5, 2-5, 3-5 (differs by
                location)
              </p>
            </div>
            <div className="ClassesInnerTextBox musicInnerTextBox">
              <p className="ClassesInnerSubTitle musicInnerSubTitle">Fees:</p>
              <p className="ClassesInnerSubText musicInnerSubText">
                Standard Class | $700 annually
              </p>
            </div>
            <p className="ClassesInnerBottomPara musicInnerBottomPara">
              Students will learn skills and techniques that can immediately be
              turned into fun on the guitar! Students will be introduced to the
              basics of the Guitar: correct holding of the instrument and
              posture, identifying strings and parts of the guitar, as well as
              rhythm exercises.
            </p>
          </div>
        </div>
        <div className="ClassesBox musicBox">
          <p className="ClassesSubTitle musicSubTitle">Making Music</p>

          <Link
            to="https://seriousfunnyc.asapconnected.com/#CourseIndex"
            className="ClassesMidImages musicMidImages MusicMakingMusic"
          />

          <div className="ClassesBoxBottom musicBoxBottom">
            <div className="ClassesInnerTextBox musicInnerTextBox">
              <p className="ClassesInnerSubTitle musicInnerSubTitle">Grades:</p>
              <p className="ClassesInnerSubText musicInnerSubText">
                PK-K, K, 1, K-1, K-2, K-5, 1-2, 1-5, 2-5, 3-5 (differs by
                location)
              </p>
            </div>
            <div className="ClassesInnerTextBox musicInnerTextBox">
              <p className="ClassesInnerSubTitle musicInnerSubTitle">Fees:</p>
              <p className="ClassesInnerSubText musicInnerSubText">
                Standard Class | $700 annually
              </p>
            </div>
            <p className="ClassesInnerBottomPara musicInnerBottomPara">
              Making Music is an introductory class to the language of music.
              Musical experience at an early age is important for a child’s
              developmental process. Our young students will be exposed to a
              variety of instruments, which will help them to develop meaningful
              relationships with music.
            </p>
          </div>
        </div>
        <div className="ClassesBox musicBox">
          <p className="ClassesSubTitle musicSubTitle">Keyboards</p>

          <Link
            to="https://seriousfunnyc.asapconnected.com/#CourseIndex"
            className="ClassesMidImages musicMidImages MusicKeyboards"
          />

          <div className="ClassesBoxBottom musicBoxBottom">
            <div className="ClassesInnerTextBox musicInnerTextBox">
              <p className="ClassesInnerSubTitle musicInnerSubTitle">Grades:</p>
              <p className="ClassesInnerSubText musicInnerSubText">
                PK-K, K, 1, K-1, K-2, K-5, 1-2, 1-5, 2-5, 3-5 (differs by
                location)
              </p>
            </div>
            <div className="ClassesInnerTextBox musicInnerTextBox">
              <p className="ClassesInnerSubTitle musicInnerSubTitle">Fees:</p>
              <p className="ClassesInnerSubText musicInnerSubText">
                Standard Class | $700 annually
              </p>
            </div>
            <p className="ClassesInnerBottomPara musicInnerBottomPara">
              Keyboard students learn proper positioning of the hands, posture,
              note names and chords. Learning simple songs allows students to
              play scales, and prepare them to learn chords. Students then
              progress to playing melody and harmony with both right and left
              hands.
            </p>
          </div>
        </div>
      </div>
      <div className="ClassesMidInnerContainer musicMidInnerContainer">
        <div className="ClassesBox musicBox">
          <p className="ClassesSubTitle musicSubTitle">Violin</p>

          <Link
            to="https://seriousfunnyc.asapconnected.com/#CourseIndex"
            className="ClassesMidImages musicMidImages MusicViolin"
          />

          <div className="ClassesBoxBottom musicBoxBottom">
            <div className="ClassesInnerTextBox musicInnerTextBox">
              <p className="ClassesInnerSubTitle musicInnerSubTitle">Grades:</p>
              <p className="ClassesInnerSubText musicInnerSubText">
                PK-K, K, 1, K-1, K-2, K-5, 1-2, 1-5, 2-5, 3-5 (differs by
                location)
              </p>
            </div>
            <div className="ClassesInnerTextBox musicInnerTextBox">
              <p className="ClassesInnerSubTitle musicInnerSubTitle">Fees:</p>
              <p className="ClassesInnerSubText musicInnerSubText">
                Standard Class | $700 annually
              </p>
            </div>
            <p className="ClassesInnerBottomPara musicInnerBottomPara">
              This music education applies the basic principles of language
              acquisition to music instruction as developed by Japanese
              violinist Shinichi Suzuki. Students learn the correct hold of the
              instrument and bow, and their proper care and maintenance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
