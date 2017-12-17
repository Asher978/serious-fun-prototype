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
  }
];
class CampCalendar extends Component {



  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.campsCalendar = this.campsCalendar.bind(this);
  }
  componentDidMount() {
    this.CampFullCalendar(allEvents);
    console.log(allEvents);
  }

  campsCalendar(e) {
    this.setState({
      value: e
    });
  }

  componentWillUpdate(newProps, newState) {
    if (newState.value === "SelectOrAll") {
      this.CampFullCalendar(allEvents);
    } else if (newState.value === "Summer") {
      this.CampFullCalendar([allEvents[0]]);
    } else if (newState.value === "Autumn") {
      this.CampFullCalendar([allEvents[1]]);
    
    } else if (newState.value === "Winter") {
      this.CampFullCalendar([allEvents[2]]);
    
    } else if (newState.value === "Spring") {
      this.CampFullCalendar([allEvents[3]]);
    }
  }

  CampFullCalendar(e) {
    $("#fullCalendar").remove();
    $("#fullCalendarContainer").append('<div id="fullCalendar"></div>');

    $("#fullCalendar").fullCalendar({
      googleCalendarApiKey: "AIzaSyDU_CakcARBmp2KzTSfDe7TO2Ta5jzaLS4",
      eventSources: e
    });
  }


render(){
  return (
    <div className="CalendarContainer campCalendarCalendar">
      <p className="CalendarMainTitle campCalendarCalendarMainTitle">
      Calendar - Camp
      </p>

      <div className="CalendarTopInnerContainer campCalendarCalendarTopInnerContainer">
        <p className="CalendarSubDate campCalendarCalendarSubDate">
          <b>Current Program Dates:</b> September 11, 2017 - June 1, 2018
        </p>

        <select
          name="CalendarAfterSchool"
          className="CalendarLocationDropMenu campCalendarCalendarLocationDropMenu"
          onChange={e => this.campsCalendar(e.target.value)}
          value={this.state.value}
        >
          <option value="SelectOrAll" selected>
            Select All Seasons
          </option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>

          <option value="Spring">Spring</option>
        </select>
      </div>

      <div id="fullCalendarContainer">
      <div id="fullCalendar" />
    </div>

    </div>
  )};
};

export default CampCalendar;