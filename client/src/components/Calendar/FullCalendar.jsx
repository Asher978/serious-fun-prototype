import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import $ from 'jquery';

// import * as $ from 'jquery';
// window['jQuery'] = window['$'] = $;
var $ = window.$;

class FullCalendar extends Component {
  componentDidMount() {
    $("#fullCalendar").fullCalendar({
      googleCalendarApiKey: "AIzaSyDU_CakcARBmp2KzTSfDe7TO2Ta5jzaLS4",
      events: {
        googleCalendarId: "l9dlc6er0krfdqto253o5384r4@group.calendar.google.com"
      }
    });
  }

  render() {
    return <div id="fullCalendar" />;
  }
}

export default FullCalendar;
