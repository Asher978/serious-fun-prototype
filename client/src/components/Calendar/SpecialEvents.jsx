import React from "react";

const SpecialEvents = props => {
  return (
    <div className="eventInfoContainer">
      <p className="eventInfoMainTitle">Special Events</p>

      <div className="eventInfoInnerContainer">
        <p className="eventInfoSubTitle">Placeholder text</p>

        <div className="eventInfoBox">
          <p className="eventInfoTextTitle">Events:</p>

          <div className="eventInfoEvents">

            <ul className="eventInfoText">
            <li>
            <p>Fri. Dec 1, 4:00 PM</p>
            <p>PS 85 Violin and Guitar Show</p>
            <p>PS 85 Cafeteria</p>
                                    </li>
            </ul>
            <ul className="eventInfoText">
            <li>
            <p>Tues. Dec 12, 5:00 PM</p>
            <p>PS 166 School Gym</p>
            <p>PS 166 Piano Concert</p></li>
            </ul>
            

          </div>


        </div>
      </div>
    </div>
  );
};

export default SpecialEvents;
