import React from "react";

import FullCalendar from "./FullCalendar";

const CampCalendar = props => {
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
        >
          <option value="Select Location" selected>
            Select Season
          </option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>

          <option value="Spring">Spring</option>
        </select>
      </div>

      <FullCalendar />
    </div>
  );
};

export default CampCalendar;