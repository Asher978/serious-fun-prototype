import React from "react";
import { Link } from "react-router-dom";

const Overview = props => {
  return (
    <div className="overViewContainer">
      <div className="overViewTitle">
        <p>Program Overview</p>
      </div>

      <div className="overViewSmallContainer">
      <div className="overViewLeftSec">
        <div className="overViewSubTitle">
          <p>After School Arts Program</p>
        </div>

        <div className="overViewTextColumn">
          <p className="overViewTextColumnSubTitle">Current Program Dates:</p>
          <p className="overViewTextColumnSubTextDate">
            Sept 11, 2017 - June 1, 2018
          </p>
          <p className="overViewTextColumnSubText">
            Open on all public school days, except for District holidays, ½ days
            and clerical days.
          </p>
          <p className="overViewTextColumnSubTextCalendar">
            View our 2017-2018 Program Calendar
          </p>
          <Link to="" className="overViewTextColumnBtn">
            CALENDAR
          </Link>
        </div>
        <div className="overViewTextColumn">
          <p className="overViewTextColumnSubTitle">Transportation</p>
          <p className="overViewTextColumnSubText TransportationText">
            Your child can participate in Serious Fun’s after school program
            even if it is not offered in their school. We partner with a bus
            company for one way pickup from local Astoria schools that do not
            have Serious Fun on-site.
          </p>
          <Link to="" className="overViewTextColumnBtn">
            LEARN MORE
          </Link>
        </div>
        <div className="overViewTextColumn">
          <p className="overViewTextColumnSubTitle register">Register Your Child</p>
          <p className="overViewTextColumnSubText registerText">
            To see classes by location and start your child’s enrollment, click
            below for more information.
          </p>
          <Link to="" className="overViewTextColumnBtn">
            REGISTER NOW
          </Link>
        </div>
        <div className="overViewTextColumn">
          <p className="overViewTextColumnSubText moreInfo">
            At this time, we do not provide full day camps for the mid-winter
            recess in December/January, the Winter Recess in February, or the
            Spring Recess for Passover, Good Friday and Easter.
          </p>
        </div>
      </div>

      <div className="overViewRightSec">
        <div className="overViewSubTitle">
          <p>A Typical Day at Serious Fun</p>
          <p className="overViewSubTitleSubTitle">
            (individual programs may vary)
          </p>
        </div>

        <div className="overViewTextColumn">
          <p className="overViewTextColumnSubTitle">2:30 - 3:25 PM</p>
          <p className="overViewTextColumnSubText">
            Children arrive (including bus children), snack, social time
          </p>
        </div>
        <hr className="overViewHR" />
        <div className="overViewTextColumn">
          <p className="overViewTextColumnSubTitle">2:45 - 3:15 PM</p>
          <p className="overViewTextColumnSubText">
            Indoor table or indoor/outdoor active play (all ages together as
            they arrive)
          </p>
        </div>
        <hr className="overViewHR" />
        <div className="overViewTextColumn">
          <p className="overViewTextColumnSubTitle">3:15 - 4:15 PM</p>
          <p className="overViewTextColumnSubText">
            Grades Pre-K through 1st:<br></br> Enrichment class
          </p>
          <p className="overViewTextColumnSubText Group">
            Grades 2nd through 5th:<br></br> Homework help and quiet time
          </p>
        </div>
        <hr className="overViewHR" />
        <div className="overViewTextColumn">
          <p className="overViewTextColumnSubTitle">4:15 - 5:00 PM</p>
          <p className="overViewTextColumnSubText">
            Grades Pre-K through 1st:<br></br> Homework help and quiet time
          </p>
          <p className="overViewTextColumnSubText Group">
            Grades 2nd through 5th:<br></br> Homework help and quiet time
          </p>
        </div>
        <hr className="overViewHR" />
        <div className="overViewTextColumn">
          <p className="overViewTextColumnSubTitle">5:00 - 5:30 PM</p>
          <p className="overViewTextColumnSubText">
            Indoor or outdoor play (divided by age)
          </p>
        </div>
        <hr className="overViewHR" />
        <div className="overViewTextColumn">
          <p className="overViewTextColumnSubTitle">5:30 - 3:15 PM</p>
          <p className="overViewTextColumnSubText">Program ends, pick-ups</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Overview;
