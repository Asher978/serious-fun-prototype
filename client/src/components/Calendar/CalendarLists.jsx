import React, { Component } from "react";

var API_KEY = "AIzaSyDU_CakcARBmp2KzTSfDe7TO2Ta5jzaLS4";
var discoveryDocs = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
];
var CLIENT_ID =
  "981678339715-j3nk504vphs1v4tvcgjf61et7ied2bhr.apps.googleusercontent.com";
var SCOPES = "https://www.googleapis.com/auth/calendar";
class CalendarLists extends Component {
  constructor(props) {
    super(props);

    this.authenticate = this.authenticate.bind(this);
    this.loadClient = this.loadClient.bind(this);
    this.execute = this.execute.bind(this);
  }


  componentDidMount() {
    console.log("about to render gapi calendar");

    window.gapi.load("client:auth2", function() {
        window.gapi.auth2.init({client_id: CLIENT_ID,"scope": SCOPES});
      });



  }







   authenticate() {
   return  window.gapi.auth2.getAuthInstance().signIn()
        .then(function() {
          console.log("Sign-in successful");
          this.loadClient();
        }, function(error) {
          console.error("Error signing in", error);
        });


  }
   loadClient() {
       console.log('asdb')
    return window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
        .then(function() {
          console.log("GAPI client loaded for API");
        }, function(error) {
          console.error("Error loading GAPI client for API");
        });
  }

  // Make sure the client is loaded and sign-in is complete before calling this method.
   execute() {
    return window.gapi.client.calendar.calendarList.list({})
        .then(function(response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
        }, function(error) {
          console.error("Execute error", error);
        });
  }
















  render() {
    return (
        <div id="authorize-div" style={{display: ""}}>
        <span>Authorize access to Google Calendar API</span>
        <button onClick={this.authenticate}>authorize and load</button>
        <button onClick={this.execute}>execute</button>
      </div>
    )
  }
}

export default CalendarLists;
