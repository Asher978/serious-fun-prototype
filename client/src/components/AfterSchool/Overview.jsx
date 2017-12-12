import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class Overview extends Component {
  state={
    pageTitle:'Overview',
    content: null,
    dataLoaded:false
  }

  componentDidMount() {
    axios.get(`/page/${this.state.pageTitle}`).then(res => {
      let { pageContent } = res.data;
      console.log(pageContent);
      this.setState({
        content: pageContent,
        dataLoaded: true
      });
    });
  }

  renderOverviewPage = () => {
    let { content } = this.state;
    return (
      <div className="overViewContainer">
        <div className="overViewTitle">
          <p>{content.mainH}</p>
        </div>

        <div className="overViewSmallContainer">
        <div className="overViewLeftSec">
          <div className="overViewSubTitle">
            <p>{content.secondaryH}</p>
          </div>

          <div className="overViewTextColumn">
            <p className="overViewTextColumnSubTitle">{content.subH}</p>
            <p className="overViewTextColumnSubTextDate">
              {content.subDate}
            </p>
            <p className="overViewTextColumnSubText">
             {content.subpageContent}
            </p>
            <p className="overViewTextColumnSubTextCalendar">
              {content.subCalendar}
            </p>
            <Link to="/afterschoolcalendar" className="overViewTextColumnBtn">
              CALENDAR
            </Link>
          </div>
          <div className="overViewTextColumn">
            <p className="overViewTextColumnSubTitle">{content.subH2}</p>
            <p className="overViewTextColumnSubText TransportationText">
              {content.subpageContent2}
            </p>
            <Link to="/transportation" className="overViewTextColumnBtn">
              LEARN MORE
            </Link>
          </div>
          <div className="overViewTextColumn">
            <p className="overViewTextColumnSubTitle register">{content.subH3}</p>
            <p className="overViewTextColumnSubText registerText">
              {content.subpageContent3}
            </p>
            <a href="https://seriousfunnyc.asapconnected.com/Login" className="overViewTextColumnBtn">
              REGISTER NOW
            </a>
          </div>
          <div className="overViewTextColumn">
            <p className="overViewTextColumnSubText moreInfo">
              {content.lastParagraph}
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
  }

  render(){
    let { dataLoaded } = this.state;
    return (
      <div>
        {dataLoaded ? this.renderOverviewPage() : <h1>Loading.....</h1> }
      </div>
    )
  }
};

export default Overview;
