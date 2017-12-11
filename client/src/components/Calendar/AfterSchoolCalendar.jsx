import React from "react";
import { Link } from "react-router-dom";

import FullCalendar from "./FullCalendar";

const AfterSchoolCalendar = props => {
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
        >
          <option value="Select Location" selected>
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

      <FullCalendar />
    </div>
  );
};

export default AfterSchoolCalendar;

// <iframe
// src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=l9dlc6er0krfdqto253o5384r4%40group.calendar.google.com&amp;color=%23A32929&amp;ctz=America%2FNew_York"
// width="400"
// height="415"
// />

// <div className="eventInfoContainer">
//   <div className="eventOffBox">
//     <div className="eventOffTitle">Closures:</div>
//     <div className="eventOffText">
//       <ul>
//         <li>
//           <p>Mon., Dec 25 - Mon., Jan 1</p>
//           <p>Winter Recess</p>
//           <p>ALL Locations</p>
//         </li>
//       </ul>
//     </div>
//   </div>

//   <div className="eventBox">
//     <div className="eventTitle">Events:</div>
//     <div className="eventText">
//       <ul>
//         <li>
//           <p>Fri. Dec 1, 4:00 PM</p>
//           <p>PS 85 Violin and Guitar Show</p>
//           <p>PS 85 Cafeteria</p>
//         </li>
//         <li>
//           <p>Tues. Dec 12, 5:00 PM</p>
//           <p>PS 166 School Gym</p>
//           <p>PS 166 Piano Concert</p>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>;
