import React from "react";
import { Link } from "react-router-dom";

const PS17Q = props => {
  return (
    <div className="PS17QContainer">
    <Link to="/locations" className="PS17QAllLocation"><span className="PS17QLeftArrow">&#8249;</span> All Locations</Link>



    <div className="PS17QInnerContainerTop">
    <div className="PS17QLocationBox">
    <p className="PS17QLocationTitle">Serious Fun @ PS 17 Q</p>
    <Link to="PS17QLocationBtn" className="PS17QLocationBtn PS17QLinkBtn">REGISTER</Link>
    </div>
    <div className="PS17QLocationBox">
    <p className="PS17QLocationSubTitle PS17QSubTitles">Queens</p>
    <p className="PS17QLocationText">28-37 29th Street Astoria, NY 11102  (000) 000-0000</p>

    </div>
    <div className="PS17QLocationBox">
    <p className="PS17QLocationSubTitle PS17QSubTitles">Grades</p>
    <p className="PS17QLocationText">Pre-K through 5th</p>

    </div>
    <div className="PS17QLocationBox">
    <div className="PS17QLocationDropMenuTitle">Choose Another Location <span className="PS17QDownArrow">&#8249;</span></div>
    </div>
    </div>

    <div className="PS17QInnerContainerMid">

    <div className="PS17QLocationImageContainer">
    <div className="PS17QLocationImage"></div>
    <Link to="" className="PS17QMapImage"></Link>

    </div>
    
    <div className="PS17QInfoMidContainer">

    <div className="PS17QAnnouncementBox">


    <div className="PS17QAnnounceTitle">ANNOUNCEMENTS</div>
    <div className="PS17QAnnouncementInnerContainer">
    <div className="PS17QAnnounceGeneral">
    <div className="PS17QAnnounceSubTitle">GENERAL</div>
    <ul className="PS17QAnnounceLists">
    <li><p className="PS17QAnnounceGeneralHere"></p>(insert announcement here)</li>
    <li><p className="PS17QAnnounceGeneralHere"></p>(insert announcement here)</li>
    <li><p className="PS17QAnnounceGeneralHere"></p>(insert announcement here)</li>
    </ul>
    </div>
    <div className="PS17QAnnouncePS17Q">
    <div className="PS17QAnnounceSubTitle">PS 17 Q</div>
    <ul className="PS17QAnnounceLists">
    <li><p className="PS17QAnnouncePS17QHere"></p>(insert announcement here)</li>
    <li><p className="PS17QAnnouncePS17QHere"></p>(insert announcement here)</li>
    <li><p className="PS17QAnnouncePS17QHere"></p>(insert announcement here)</li>
    </ul>
    </div>
    
    </div>
    </div>
    <div className="PS17QInnerClassInfoBox">
    <div className="PS17QClassInfoTitle PS17QSubTitles">Enrichment Classes Offered</div>
    <div className="PS17QClassInfoBottom">
    <div className="PS17QClassInfoImage"></div>
    <div className="PS17QClassInfoContainer">
    <p className="PS17QClassInfoText">Each location offers a unique set of daily enrichment classes. From art to music and theater, all Serious Fun programs aim to get arts back into schools for children.</p>
    <Link to="" id="PS17QClassInfoTextBtn" className="PS17QClassInfoTextBtn PS17QLinkBtn">CLASSES @ PS 166 Q</Link>
    </div>
    </div>
    </div>
    </div>
    </div>

    <div className="PS17QInnerContainerBottom">
   
    <div className="PS17QContactInfo">
    <p className="PS17QContactInfoTitle PS17QSubTitles">Site Director</p>
    <div className="PS17QContactInfoLeftSec">
    <div className="PS17QContactInfoImage SiteDirector"></div>
    <Link to="" id="PS17QContactInfoEmail" className="PS17QContactInfoEmail PS17QLinkBtn">EMAIL</Link>
    </div>
    <div className="PS17QContactInfoRightSec">
    <p className="PS17QContactInfoName">Ms. Josette Jimenez</p>
    <p className="PS17QContactInfoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
    </div>
    </div>

    <div className="PS17QContactInfo">
    <p className="PS17QContactInfoTitle PS17QSubTitles">Site Supervisor</p>
    <div className="PS17QContactInfoLeftSec">
    <div className="PS17QContactInfoImage SiteSupervisor"></div>
    <Link to="" id="PS17QContactInfoEmail" className="PS17QContactInfoEmail PS17QLinkBtn">EMAIL</Link>
    </div>
    <div className="PS17QContactInfoRightSec">
    <p className="PS17QContactInfoName">Ms. Ana Holguin</p>
    <p className="PS17QContactInfoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
    </div>
    </div>



    <div className="PS17QCalendar">
    <p className="PS17QCalendarTitle PS17QSubTitles">Calendar</p>
    <p className="PS17QCalendarText">Click below to access our after school calendar and calendar by site.</p>
    <Link to="" id="PS17QCalendarLink" className="PS17QCalendarLink PS17QLinkBtn">CALENDAR</Link>
    </div>

    <div className="PS17QReminder">
    <p className="PS17QReminderTitle PS17QSubTitles">Reminders</p>
    <p className="PS17QReminderText">With REMIND, you can receive reminders for this specific location.</p>
    <Link to="" id="PS17QReminderLink" className="PS17QReminderLink PS17QLinkBtn">SIGN UP FOR REMIND</Link>
    </div>



    
    </div>






    </div>
  );
};

export default PS17Q;
