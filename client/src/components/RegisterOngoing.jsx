import React from "react";
// import { Link } from "react-router-dom";

const registerOngoing = props => {
  return(
    <div className="registerOngoingContainer">
      <h1 className="ongoing-Registration">Ongoing Registration</h1>
      <div className="registerLeftColumn">
        <h4 className="registerOngoingSubtitleSmall">Current Program Dates:</h4>
        <p className="registerOngoingText">Sept 11, 2017 - June 1, 2018</p>
      </div>
      <div className="registerRightColumn">
        <h4 className="registerOngoingSubtitleSmall">2018-2019 Pre-Registration Dates:</h4>
        <p className="registerOngoingText">Coming soon!</p>
      </div>
      <div className="registerLeftColumn">
        <h4 className="registerOngoingSubtitleSmall">Ongoing Registration:</h4>
        <p className="registerOngoingText">Children can start in a Serious Fun program at any point during the school year at a prorated tuition. The start dates for ongoing registration are every 1st and 15th of the month (or the following Monday if the 1st or 15th falls during the weekend).</p>
      </div>
      <table className="registerTable registerRightColumn">
        <thead>
          <tr>
            <th>Registration Dates</th>
            <th>In-Person Meeting Dates</th>
            <th>Start Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nov 18-24</td>
            <td>Nov 21-22, 27-28</td>
            <td>Dec 1</td>
          </tr>
          <tr>
            <td>Dec 2-6</td>
            <td>Dec 5-8</td>
            <td>Dec 15</td>
          </tr>
          <tr>
            <td>Dec 18-20</td>
            <td>Dec 20-22</td>
            <td>Jan 2</td>
          </tr>
          <tr>
            <td>Jan 6-10</td>
            <td>Jan 9-12</td>
            <td>Jan 15</td>
          </tr>
        </tbody>
      </table>

      <div className="registerLeftColumn">
        <button className="registerOngoingBtn"><a href="https://seriousfunnyc.asapconnected.com/Login">REGISTER NOW</a></button>
        <h4 className="registerOngoingSubtitleSmall">Tuition:</h4>
        <p className="registerOngoingText">You may register your child at any point throughout the school year. The tuition will be pro-rated. Contact Serious Fun to find out your rates.</p>
        <button className="registerOngoingBtn">EMAIL</button>
      </div>

    </div>
    );
};

export default registerOngoing;
