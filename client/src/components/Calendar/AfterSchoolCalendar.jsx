import React, { Component } from "react";

var $ = window.$;
let allEvents = [
  {
    googleCalendarId: "l9dlc6er0krfdqto253o5384r4@group.calendar.google.com"
  },
  {
    googleCalendarId: "55161l7ed74nkj2ifm41mcu8ao@group.calendar.google.com",
    className: "nice-event"
  },
  {
    googleCalendarId: "l9dlc6er0krfdqto253o5384r4@group.calendar.google.com"
  },
  {
    googleCalendarId: "l9dlc6er0krfdqto253o5384r4@group.calendar.google.com"
  },
  {
    googleCalendarId: "l9dlc6er0krfdqto253o5384r4@group.calendar.google.com"
  },
  {
    googleCalendarId: "l9dlc6er0krfdqto253o5384r4@group.calendar.google.com"
  },
  {
    googleCalendarId: "l9dlc6er0krfdqto253o5384r4@group.calendar.google.com"
  }
];

class AfterSchoolCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.afterSchoolCalendar = this.afterSchoolCalendar.bind(this);
  }
  componentDidMount() {
    this.SchoolFullCalendar(allEvents);
    console.log(allEvents);
  }

  afterSchoolCalendar(e) {
    this.setState({
      value: e
    });
  }

  componentWillUpdate(newProps, newState) {
    if (newState.value === "SelectOrAll") {
      this.SchoolFullCalendar(allEvents);
    } else if (newState.value === "PS17Q") {
      this.SchoolFullCalendar([allEvents[0]]);
    } else if (newState.value === "PS85Q") {
      this.SchoolFullCalendar([allEvents[1]]);
    }
     else if (newState.value === "PSIS78QK1") {
      this.SchoolFullCalendar([allEvents[2]]);
    }
     else if (newState.value === "PSIS78Q25") {
      this.SchoolFullCalendar([allEvents[3]]);
    }
     else if (newState.value === "PS150Q") {
      this.SchoolFullCalendar([allEvents[4]]);
    }
     else if (newState.value === "PS166Q") {
      this.SchoolFullCalendar([allEvents[5]]);
    
    } else if (newState.value === "PS33ChelseaPrep") {
      this.SchoolFullCalendar([allEvents[6]]);
    }
  }

  SchoolFullCalendar(e) {
    $("#fullCalendar").remove();
    $("#fullCalendarContainer").append('<div id="fullCalendar"></div>');

    $("#fullCalendar").fullCalendar({
      googleCalendarApiKey: "AIzaSyDU_CakcARBmp2KzTSfDe7TO2Ta5jzaLS4",
      eventSources: e
    });
  }

  render() {
    console.log(this.state.value, "Value");
    return (
      <div className="CalendarContainer afterSchoolCalendar">
        <p className="CalendarMainTitle afterSchoolCalendarMainTitle">
          Calendar - After School
        </p>

        <div className="CalendarTopInnerContainer afterSchoolCalendarTopInnerContainer">
          <p className="CalendarSubDate afterSchoolCalendarSubDate">
            <b>Current Program Dates:</b> September 11, 2017 - June 1, 2018
          </p>

          <select
            name="CalendarAfterSchool"
            className="CalendarLocationDropMenu afterSchoolCalendarLocationDropMenu"
            onChange={e => this.afterSchoolCalendar(e.target.value)}
            value={this.state.value}
          >
            <option value="SelectOrAll" defaultValue>
              Select All Locations
            </option>
            <option value="PS17Q">PS 17 Q</option>
            <option value="PS85Q">PS 85 Q</option>
            <option value="PSIS78QK1">PS/IS 78 Q (K-1)</option>

            <option value="PSIS78Q25">PS/IS 78 Q (2-5)</option>
            <option value="PS150Q">PS 150 Q</option>
            <option value="PS166Q">PS 166 Q</option>

            <option value="PS33ChelseaPrep">PS 33 Chelsea Prep</option>
          </select>
        </div>
        <div id="fullCalendarContainer">
          <div id="fullCalendar" />
        </div>
      </div>
    );
  }
}

export default AfterSchoolCalendar;
