import React from "react";
import { Link } from "react-router-dom";

const VisualArts = props => {
  return (
    <div className="ClassesContainer visualArtsContainer">
      <Link to="/classes" className="AllClassesLinks">
        <span className="ClassesLeftArrow">&#8249;</span>
        All Classes
      </Link>

      <div className="ClassesTopInnerContainer visualArtsTopInnerContainer">
        <p className="ClassesMainTitle visualArtsMainTitle">
          Visual Arts Classes
        </p>

        <div className="ClassesRightTop visualArtsRightTop">
          <p className="ClassesRightTopText visualArtsRightTopText">
            View the classes offered at a specific school with the Serious Fun
            program nearest you!
          </p>
          <Link
            to=""
            className="ClassesRightTopLocationBtn visualArtsRightTopLocationBtn"
          >
            CLASSES BY LOCATION
          </Link>
        </div>
      </div>

      <div className="ClassesMidInnerContainer visualArtsMidInnerContainer">
        <div className="ClassesBox visualArtsBox">
          <p className="ClassesSubTitle visualArtsSubTitle">Cartooning</p>

          <Link
            to="https://seriousfunnyc.asapconnected.com/#CourseIndex"
            className="ClassesMidImages visualArtsMidImages visualArtsCartooning"
          />

          <div className="ClassesBoxBottom visualArtsBoxBottom">
            <div className="ClassesInnerTextBox visualArtsInnerTextBox">
              <p className="ClassesInnerSubTitle visualArtsInnerSubTitle">
                Grades:
              </p>
              <p className="ClassesInnerSubText visualArtsInnerSubText">
                K-1, K-2, 2-5, 3-5 (differs by location)
              </p>
            </div>
            <div className="ClassesInnerTextBox visualArtsInnerTextBox">
              <p className="ClassesInnerSubTitle visualArtsInnerSubTitle">
                Fees:
              </p>
              <p className="ClassesInnerSubText visualArtsInnerSubText">
                Standard Class | $700 annually
              </p>
            </div>
            <p className="ClassesInnerBottomPara visualArtsInnerBottomPara">
              Through the use of step by step instruction, students will learn
              how to draw some well known and less familiar characters, while
              being introduced to a variety of mediums: pencils, micron pens,
              markers and watercolors.
            </p>
          </div>
        </div>
        <div className="ClassesBox visualArtsBox">
          <p className="ClassesSubTitle visualArtsSubTitle">
            Drawing & Painting
          </p>

          <Link
            to="https://seriousfunnyc.asapconnected.com/#CourseIndex"
            className="ClassesMidImages visualArtsMidImages visualArtsDrawing"
          />

          <div className="ClassesBoxBottom visualArtsBoxBottom">
            <div className="ClassesInnerTextBox visualArtsInnerTextBox">
              <p className="ClassesInnerSubTitle visualArtsInnerSubTitle">
                Grades:
              </p>
              <p className="ClassesInnerSubText visualArtsInnerSubText">
                PK-K, K-1, 1-5, 2-3, 2-5, 4-5 (differs by location)
              </p>
            </div>
            <div className="ClassesInnerTextBox visualArtsInnerTextBox">
              <p className="ClassesInnerSubTitle visualArtsInnerSubTitle">
                Fees:
              </p>
              <p className="ClassesInnerSubText visualArtsInnerSubText">
                Standard Class | $700 annually
              </p>
            </div>
            <p className="ClassesInnerBottomPara visualArtsInnerBottomPara">
              All children love being creative when given the chance! In this
              class students will be shown a basic approach to and knowledge of
              drawing and painting. Focus will be given to the materials
              involved, how to draw, and how to view and interpret the world
              within different visual mediums.
            </p>
          </div>
        </div>
        <div className="ClassesBox visualArtsBox">
          <p className="ClassesSubTitle visualArtsSubTitle">Sculpture</p>

          <Link
            to="https://seriousfunnyc.asapconnected.com/#CourseIndex"
            className="ClassesMidImages visualArtsMidImages visualArtsDrawing"
          />

          <div className="ClassesBoxBottom visualArtsBoxBottom">
            <div className="ClassesInnerTextBox visualArtsInnerTextBox">
              <p className="ClassesInnerSubTitle visualArtsInnerSubTitle">
                Grades:
              </p>
              <p className="ClassesInnerSubText visualArtsInnerSubText">
                K-1, K-5 (differs by location)
              </p>
            </div>
            <div className="ClassesInnerTextBox visualArtsInnerTextBox">
              <p className="ClassesInnerSubTitle visualArtsInnerSubTitle">
                Fees:
              </p>
              <p className="ClassesInnerSubText visualArtsInnerSubText">
                Standard Class | $700 annually
              </p>
            </div>
            <p className="ClassesInnerBottomPara visualArtsInnerBottomPara">
              The art of sculpture encourages our students to work with their
              hands fostering self-exploration and imagination through their
              three dimensional mini creations. Working with multiple materials
              students will be exposed to a vast variety of mediums, colors and
              subject matter that can express different themes, sensibilities,
              feelings, motifs, cultures or seasons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualArts;
