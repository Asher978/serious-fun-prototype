
import React from "react";
import { Link } from "react-router-dom";

const SportAndFitness = props => {
  return (
    <div className="ClassesContainer sportandfitnessContainer">
    
    <Link to="/classes" className="AllClassesLinks">
    <span className="ClassesLeftArrow">&#8249;</span>
    All Classes
    </Link>

    <div className="ClassesTopInnerContainer sportandfitnessTopInnerContainer">
    <p className="ClassesMainTitle sportandfitnessMainTitle">Sports & Fitness Classes</p>
    
    <div className="ClassesRightTop sportandfitnessRightTop">
    <p className="ClassesRightTopText sportandfitnessRightTopText">View the classes offered at a specific school with the Serious Fun program nearest you!</p>
    <Link to="" className="ClassesRightTopLocationBtn sportandfitnessRightTopLocationBtn">CLASSES BY LOCATION</Link>
    </div>
    </div>

    <div className="ClassesMidInnerContainer sportandfitnessMidInnerContainer">
    
    <div className="ClassesBox sportandfitnessBox">
    <p className="ClassesSubTitle sportandfitnessSubTitle">Martial Arts</p>
    
    <Link to="https://seriousfunnyc.asapconnected.com/#CourseIndex" className="ClassesMidImages sportandfitnessMidImages sportandfitnessMartialArts"></Link>

    <div className="ClassesBoxBottom sportandfitnessBoxBottom">
    
    <div className="ClassesInnerTextBox sportandfitnessInnerTextBox">
    <p className="ClassesInnerSubTitle sportandfitnessInnerSubTitle">Grades:</p>
    <p className="ClassesInnerSubText sportandfitnessInnerSubText">PK-K, K, K-1, 1, 1-3, 1-5, 2-5, 3-5 (differs by location)</p>
    </div>
    <div className="ClassesInnerTextBox sportandfitnessInnerTextBox">
    <p className="ClassesInnerSubTitle sportandfitnessInnerSubTitle">Fees:</p>
    <p className="ClassesInnerSubText sportandfitnessInnerSubText">Standard Class | $700 annually</p>
    </div>
    <p className="ClassesInnerBottomPara sportandfitnessInnerBottomPara">Serious Fun Martial Arts classes are designed to teach focus and concentration, while developing muscle groups, balance, and gross motor coordination. These classes, while teaching martial arts basics, encourage behavior development, awareness of others, self-confidence, and character development.</p>
    </div>
    </div>
    <div className="ClassesBox sportandfitnessBox">
    <p className="ClassesSubTitle sportandfitnessSubTitle">Yoga</p>
    
    <Link to="https://seriousfunnyc.asapconnected.com/#CourseIndex" className="ClassesMidImages sportandfitnessMidImages sportandfitnessYoga"></Link>

    <div className="ClassesBoxBottom sportandfitnessBoxBottom">
    
    <div className="ClassesInnerTextBox sportandfitnessInnerTextBox">
    <p className="ClassesInnerSubTitle sportandfitnessInnerSubTitle">Grades:</p>
    <p className="ClassesInnerSubText sportandfitnessInnerSubText">K-1, K-5 (differs by location)</p>
    </div>
    <div className="ClassesInnerTextBox sportandfitnessInnerTextBox">
    <p className="ClassesInnerSubTitle sportandfitnessInnerSubTitle">Fees:</p>
    <p className="ClassesInnerSubText sportandfitnessInnerSubText">Standard Class | $700 annually</p>
    </div>
    <p className="ClassesInnerBottomPara sportandfitnessInnerBottomPara">Yoga is an integrative practice that helps students find a sense of calm and mind-body-heart connection by engaging the body, breath, heart and mind. Students will begin by learning basic yoga postures to develop body awareness, flexibility, strength, balance, focus and confidence.</p>
    </div>
    </div>
    <div className="ClassesBox sportandfitnessBox">
    <p className="ClassesSubTitle sportandfitnessSubTitle">Soccer</p>
    
    <Link to="https://seriousfunnyc.asapconnected.com/#CourseIndex" className="ClassesMidImages sportandfitnessMidImages sportandfitnessSoccer"></Link>

    <div className="ClassesBoxBottom sportandfitnessBoxBottom">
    
    <div className="ClassesInnerTextBox sportandfitnessInnerTextBox">
    <p className="ClassesInnerSubTitle sportandfitnessInnerSubTitle">Grades:</p>
    <p className="ClassesInnerSubText sportandfitnessInnerSubText">PK-K, K, K-1, 1, 2, 1-2, 2-3, 3-5, 4-5 (differs by location)</p>
    </div>
    <div className="ClassesInnerTextBox sportandfitnessInnerTextBox">
    <p className="ClassesInnerSubTitle sportandfitnessInnerSubTitle">Fees:</p>
    <p className="ClassesInnerSubText sportandfitnessInnerSubText">Standard Class | $700 annually</p>
    </div>
    <p className="ClassesInnerBottomPara sportandfitnessInnerBottomPara">Students learn the fundamentals of soccer, gaining the techniques of kicking, passing, shooting, dribbling and trapping. While gaining a further understanding and knowledge of the game, students will gain an understanding of teamwork, healthy competitiveness and good sportsmanship.</p>
    </div>
    </div>



    
    </div>


    </div>
  );
};

export default SportAndFitness;
