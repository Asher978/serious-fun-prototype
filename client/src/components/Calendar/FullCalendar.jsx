import React, { Component } from "react";

var $ = window.$;
let allEvents = [
  {
    googleCalendarId: "l9dlc6er0krfdqto253o5384r4@group.calendar.google.com"
  },
  {
    googleCalendarId: "55161l7ed74nkj2ifm41mcu8ao@group.calendar.google.com",
    className: "nice-event"
  }
];

class FullCalendar extends Component {
  constructor(props) {
    super(props);

    this.SchoolCalendar = this.SchoolCalendar.bind(this);
  }

  componentDidMount() {
    this.SchoolCalendar(allEvents);
    console.log(allEvents)

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value === "PS17Q") {
      this.SchoolCalendar([allEvents[0]]);
    } else if (nextProps.value === "PS85Q") {
      this.SchoolCalendar([allEvents[1]]);
    }
  }

  SchoolCalendar(e) {
    $("#fullCalendar").remove();
    $("#fullCalendarContainer").append('<div id="fullCalendar"></div>');

    $("#fullCalendar").fullCalendar({
      googleCalendarApiKey: "AIzaSyDU_CakcARBmp2KzTSfDe7TO2Ta5jzaLS4",
      eventSources: e
    });
  }

  render() {
    console.log("about to render!!!!");
    // console.log(this.state.value);
    return (
      <div id="fullCalendarContainer">
        <div id="fullCalendar" />
      </div>
    );
  }
}

export default FullCalendar;
