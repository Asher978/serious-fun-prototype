import React from "react";
import { Link } from "react-router-dom";

const Careers = props => {
  return (
    <div className="career">
    <div className="careerPic"></div>
    <div className="careerContainer">
    <div className="careerInfoBox">
    <div className="careerInfoTitle">Who We’re Looking For…</div>
    <div className="careerInfoText">
    <p>Serious Fun After School, Inc. is a non-profit organization dedicated to providing arts enrichment during out of school time at affordable rates so that our children have the opportunity to participate in the best that New York has to offer.</p>
    <p>Our priority is providing our students with the highest quality content while overseeing the safety and security of our students. To provide the highest quality content, Serious Fun partners with professional artists who are dedicated to providing age-appropriate experiences for our students and class sizes are limited for more individualized attention. Daily enrichment includes Dance, Drama, Music, STEM, Science, and Art, as well as academic support, social engagement and active play, during out of school time.</p>
    <p>Our passion is to provide the children in our care a chance to explore their creativity, move and stretch their bodies, and engage with their peers in a safe, caring and fun environment.</p>
    </div>
    </div>

    <div className="careerInfoBox">
    <div className="careerInfoTitle currentJob">Current Job Openings</div>
    <div className="careerInfoText">

    <div className="careerInfoTextLocation">
    <div className="careerInfoTextLocationTitle">ASTORIA, NY</div>
    <Link to="" className="careerInfoTextLocationText">Drawing and Painting Specialist</Link>
    <Link to="" className="careerInfoTextLocationText">Traditional Dance Specialist</Link>
    
    </div>
    </div>
    
    </div>
    
    </div>
    

    </div>
  );
};

export default Careers;
