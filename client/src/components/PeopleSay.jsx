import React from "react";
import { Link } from "react-router-dom";

const PeopleSay = props => {
  return (
    <div className="peopleSayContainer">
    <div className="peopleSayTitle">What Parents Say</div>
    
    <div className="peopleSayFeedBox">
    <div className="peopleSayFeedBoxArrow LeftArrow"> &#8249; </div>
    <div className="peopleSayFeedText">“It’s a fantastic after school program and offers so much for the price. It’s worth every penny… The teachers are caring, compassionate and creative. I know my daughter is in good hands – and I appreciate the active nature of the program as well.”</div>
    <div className="peopleSayFeedBoxArrow RightArrow"> &#8250; </div>
    </div>

    <div className="peopleSayMidContainer">
    <div className="peopleSayTop">
    
    <div className="peopleSayLeftSec">
    <div className="peopleSaySubTitles">What Parents Say About Serious Fun</div>
    <p className="peopleSayText">“It’s a fantastic after school program and offers so much for the price. It’s worth every penny… The teachers are caring, creative, compassionate. I know my daughter is in good hands – and I appreciate the active nature of the program as well.”</p>
    <p className="peopleSayTextCredit">–Randi, mother of J., 5 years old.</p>
    <p className="peopleSayText">“I recommend it because the homework help is better than other after school programs, and the scheduling is flexible, unlike other programs.  My child enjoys the classes, and the company of the children, and the staff.”</p>
    <p className="peopleSayTextCredit">–Tammie, mother of R., 8 years old</p>
    <p className="peopleSayText">“A fantastic program with  interesting activities and a great staff who treat our daughter well and take good care of her.  We know she’s in good hands and that makes the day so much easier for us!”</p>
    <p className="peopleSayTextCredit">–Randi, mother of J., 5 years old.</p>
    </div>

    <div className="peopleSayRightSec">
    <div className="peopleSayImage RightImage"></div>
    </div>
    
    </div>
    <div className="peopleSayMid">
    <div className="peopleSaySubTitles">What Parents Say About Our Classes</div>
    <p className="peopleSayText">“He loved Soccer! He especially liked the games they played…Good experience for kids to meet kids from different schools and have activities that are not offered through school- a great experience overall!”</p>
    <p className="peopleSayTextCredit">–Karen, mother of H., 5 years old</p>
    </div>
    <div className="peopleSayBottom">
    <div className="peopleSaySubTitles">What Parents Say about Our Homewok Help</div>  
    
    <div className="peopleSayBottomSec">
    
    <div className="peopleSayLeftBottom">
    <div className="peopleSayImage LeftImage"></div>
    </div>

    <div className="peopleSayRightBottom">
    <p className="peopleSayText">“My third grader is usually very reluctant about doing school work. I was concerned that he would not get the reinforcement he often needs to complete his school work.  In fact he developed a great working relationship with the homework tutors at Serious Fun, thanks to their warmth, humor, support and attention. Thank you!”</p>
    <p className="peopleSayTextCredit">–Morganne, mother of F. and O., 8 years old</p>
    <p className="peopleSayText">“Homework is always completed and when in the rare case it isn’t they tell you what is left over to do.”</p>
    <p className="peopleSayTextCredit">–Angela, mother of Z., 6 years old</p>
    </div>


    </div>  
    
    </div>
    </div>
    </div>
  );
};

export default PeopleSay;
