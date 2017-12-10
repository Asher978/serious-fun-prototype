import React from "react";
import { Link } from "react-router-dom";

const Classes = props => {
  return (
    <div className="classContainer">
    <div className="classTop">
    <div className="classTopTitle">
        <p>Classes</p>
    </div>
    <div className="classTopPicContainer">
    <div className="classTopPicContainerTOP">
    
    
    <div className="classTopPictures music">
    <Link to="/music"><p className="classTopPicText"> Music </p></Link>
    </div>
    <div className="classTopPictures language">    <Link to="/language"><p className="classTopPicText"> Language & Writing </p></Link>
    </div>
    <div className="classTopPictures visualarts">    <Link to="/visualarts"><p className="classTopPicText"> Visual Arts </p></Link>
    </div>
    </div>
    <div className="classTopPicContainerBottom">
    <div className="classTopPictures performingarts">    <Link to="/performingarts"><p className="classTopPicText"> Performing Arts </p></Link>
    </div>
    <div className="classTopPictures sportandfitness">    <Link to="/sportandfitness"><p className="classTopPicText"> Sport & Fitness </p></Link>
    </div>
    <div className="classTopPictures other">    <Link to="/other"><p className="classTopPicText"> Other </p></Link>
    </div>
    </div>
    </div>

    </div>
    <div className="classBottom">
    <div className="classBottomTitle">
        <p>Our Partners</p>
    </div>
    <div className="classBottomPicContainer">
    

    <Link to="/" id="writopiaLab" className="classBottomPictures"></Link>
    
      <Link to="/" id="educationArt" className="classBottomPictures"></Link>
    
   
    

    </div>
    </div>


    </div>
  );
};

export default Classes;
