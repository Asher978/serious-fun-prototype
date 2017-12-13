import React, { Component } from "react";

var $ = window.$;

class FullCalendar extends Component {
  componentDidMount() {
    $("#fullCalendar").fullCalendar({
      googleCalendarApiKey: "AIzaSyDU_CakcARBmp2KzTSfDe7TO2Ta5jzaLS4",

      eventSources: [
        {
          googleCalendarId:
            "l9dlc6er0krfdqto253o5384r4@group.calendar.google.com"
        },
        {
          googleCalendarId:
            "55161l7ed74nkj2ifm41mcu8ao@group.calendar.google.com",
          className: "nice-event"
        }
      ]
    });
  }




  SchoolCalendar(){
    let firstCalendar = "l9dlc6er0krfdqto253o5384r4@group.calendar.google.com";
    let secCalendar = "55161l7ed74nkj2ifm41mcu8ao@group.calendar.google.com"; 
    // $("#fullCalendar").fullCalendar({
    //   googleCalendarApiKey: "AIzaSyDU_CakcARBmp2KzTSfDe7TO2Ta5jzaLS4",
        
    //   eventSources: [
    //     {
    //       googleCalendarId: firstCalendar,
            
    //     },
    //     {
    //       googleCalendarId:
    //         secCalendar,
    //       className: "nice-event"
    //     }
    //   ]
    // });



    console.log(this.props.value, "Value")

  }

  render() {
    return <div id="fullCalendar" />;
  }
}

export default FullCalendar;
