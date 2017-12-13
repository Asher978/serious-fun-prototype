import FullCalendar from "./FullCalendar";
import React, { Component } from "react";

class AfterSchoolCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.afterSchoolCalendar = this.afterSchoolCalendar.bind(this);
  }
  componentDidMount() {}

  afterSchoolCalendar(e) {
    this.setState({
      value: e.target.value
    });
    // console.log(this.state.value, "Value");
    // console.log(e.target.value, "Event");
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
            onChange={e => this.afterSchoolCalendar(e)}
            value={this.state.value}
          >
            <option value="Select Location" defaultValue>
              Select Location
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

        <FullCalendar
          SchoolCalendar={this.props.SchoolCalendar}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default AfterSchoolCalendar;
