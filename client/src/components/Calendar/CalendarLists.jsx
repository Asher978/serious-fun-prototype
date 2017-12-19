import React, { Component } from "react";

var CLIENT_ID =
  "981678339715-j3nk504vphs1v4tvcgjf61et7ied2bhr.apps.googleusercontent.com";
var SCOPES = "https://www.googleapis.com/auth/calendar";

class CalendarLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarIds: []
    };

    this.authenticate = this.authenticate.bind(this);
    this.loadClient = this.loadClient.bind(this);
    this.execute = this.execute.bind(this);
  }

  componentDidMount() {
    window.gapi.load("client:auth2", function() {
      window.gapi.auth2.init({ client_id: CLIENT_ID });
      console.log("Gapi Auth Init");
    });
  }

  authenticate() {
    return window.gapi.auth2
      .getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/calendar.readonly"})
      .then(
        ()=> {
          console.log("Sign-in successful");
          this.loadClient();
        },
        (error) => {
          console.error("Error signing in", error);
        }
      );
  }
  loadClient() {
    return window.gapi.client
      .load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
      .then(
        () => {
          console.log("GAPI client loaded for API");
          this.execute();
        },
        function(error) {
          console.error("Error loading GAPI client for API");
        }
      );
  }

  // Make sure the client is loaded and sign-in is complete before calling this method.
  execute() {
    window.gapi.client.calendar.calendarList.list({}).then(
      response => {
        // Handle the results here (response.result has the parsed body).
        response.result.items.forEach(e => {
          return this.setState({
            calendarIds: e.id
          });
        }, this);
      },
      function(error) {
        console.error("Execute error", error);
      }
    );
  }

  render() {
    console.log("calendarIds", this.state.calendarIds);
    return (
      <div id="authorize-div" style={{ display: "" }}>
        <span>Authorize access to Google Calendar API</span>
        <button onClick={this.authenticate}>
          <h3>CLICK HERE to Console Log All THE CALENDAR IDs</h3>
        </button>
      </div>
    );
  }
}

export default CalendarLists;
