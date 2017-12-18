import React, { Component } from "react";

var CLIENT_ID =
  "981678339715-j3nk504vphs1v4tvcgjf61et7ied2bhr.apps.googleusercontent.com";
var SCOPES = "https://www.googleapis.com/auth/calendar";
class CalendarLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarListIDs: []
    };

    this.authenticate = this.authenticate.bind(this);
    this.loadClient = this.loadClient.bind(this);
    this.execute = this.execute.bind(this);
  }

  componentDidMount() {
    window.gapi.load("client:auth2", function() {
      window.gapi.auth2.init({ client_id: CLIENT_ID, scope: SCOPES });
      console.log("auth2 CLient ID");
    });
  }

  authenticate() {
    return window.gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(
        function() {
          console.log("Sign-in successful");
          this.loadClient();
        },
        function(error) {
          console.error("Error signing in", error);
        }
      );
  }
  loadClient() {
    console.log("asdb");
    return window.gapi.client
      .load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
      .then(
        function() {
          console.log("GAPI client loaded for API");
        },
        function(error) {
          console.error("Error loading GAPI client for API");
        }
      );
  }

  // Make sure the client is loaded and sign-in is complete before calling this method.
  execute() {
    return window.gapi.client.calendar.calendarList.list({}).then(
      function(response) {
        // Handle the results here (response.result has the parsed body).
        response.result.items.map(function(ids) {
          console.log(ids.id);

          this.setState({
            calendarListIDs: ids.id
          });
        });
        console.log("Response", this.state.calendarListIDs);
      },
      function(error) {
        console.error("Execute error", error);
      }
    );
  }

  render() {
    return (
      <div id="authorize-div" style={{ display: "" }}>
        <span>Authorize access to Google Calendar API</span>
        <button onClick={this.authenticate ? this.loadClient : ""}>
          authorize and load
        </button>
        <button onClick={this.execute}>execute</button>
      </div>
    );
  }
}

export default CalendarLists;
