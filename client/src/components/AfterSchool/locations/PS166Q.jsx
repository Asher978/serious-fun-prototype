
import React from "react";
import { Link } from "react-router-dom";

const PS166Q = props => {
  return (
    <div className="PSContainer PS166QContainer">
      <Link to="/locations" className="PSAllLocations PS166QAllLocation">
        <span className="PSLeftArrow PS166QLeftArrow">&#8249;</span> All
        Locations
      </Link>

      <div className="PSInnerContainerTop PS166QInnerContainerTop">
        <div className="PSLocationBox PS166QLocationBox">
          <p className="PSLocationTitle PS166QLocationTitle">
            Serious Fun @ PS 166 Q
          </p>
          <Link
            to=""
            id="PSLocationBtn"
            className="PSLocationBtn PS166QLocationBtn"
          >
            REGISTER
          </Link>
        </div>
        <div className="PSLocationBox PS166QLocationBox">
          <p className="PSLocationSubTitle PS166QLocationSubTitle PSSubTitles">
            Queens
          </p>
          <p className="PSLocationText PS166QLocationText">
          33-09 35th  
          Ave Astoria, NY 11106  
           (000) 000-0000
          </p>
        </div>
        <div className="PSLocationBox PS166QLocationBox">
          <p className="PSLocationSubTitle PS166QLocationSubTitle PSSubTitles">
            Grades
          </p>
          <p className="PSLocationText PS166QLocationText">Pre-K through 5th </p>
        </div>
        <div className="PSLocationBox PS166QLocationBox">
          <div className="linkBox">
            <div className="PSLocationDropMenuTitle PS166QLocationDropMenuTitle navLinks">
              Choose Another Location<span className="PSDownArrow PS166QDownArrow">
                &#8249;
              </span>
            </div>

            <div className="dropdownMenu">
              <div className="locationDrop">
                <Link to="/ps17q" id="PS17QDrop" className="dropLinks">
                  PS 17 Q
                </Link>
                <Link to="/Ps85q" id="PS85QDrop" className="dropLinks">
                  PS 85 Q
                </Link>
                <Link to="/psis78qk1" id="PSIS78QK1Drop" className="dropLinks">
                  PS/IS 78 Q (K-1)
                </Link>
                <Link to="/psis78q" id="PSIS78Q25Drop" className="dropLinks">
                  PS/IS 78 Q (2-5)
                </Link>
                <Link to="/ps150q" id="PS150QDrop" className="dropLinks">
                  PS 150 Q
                </Link>
                <Link to="ps166q" id="PS166QDrop" className="dropLinks">
                  PS 166 Q
                </Link>
                <Link
                  to="/ps33chelseaprep"
                  id="PS33ChelseaPrepDrop"
                  className="dropLinks"
                >
                  PS 33 Chelsea Prep
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="PSInnerContainerMid PS166QInnerContainerMid">
        <div className="PSLocationImageContainer PS166QLocationImageContainer">
          <div className="PSLocationImage PS166QLocationImage" />
          <Link to="" className="PSMapImage" />
        </div>

        <div className="PSInfoMidContainer PS166QInfoMidContainer">
          <div className="AnnouncementBox PS166QAnnouncementBox">
            <div className="AnnounceTitle PS166QAnnounceTitle">
              ANNOUNCEMENTS
            </div>
            <div className="AnnouncementInnerContainer PS166QAnnouncementInnerContainer">
              <div className="AnnounceGeneral PS166QAnnounceGeneral">
                <div className="AnnounceSubTitle PS166QAnnounceSubTitle">
                  GENERAL
                </div>
                <ul className="AnnounceLists PS166QAnnounceLists">
                  <li>
                    <p className="AnnounceGeneralHere PS166QAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceGeneralHere PS166QAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceGeneralHere PS166QAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                </ul>
              </div>
              <div className="AnnounceSchool PS166QAnnouncePS166Q">
                <div className="AnnounceSubTitle PS166QAnnounceSubTitle">
                PS 166 Q
                </div>
                <ul className="AnnounceLists PS166QAnnounceLists">
                  <li>
                    <p className="AnnounceSchoolHere PS166QAnnouncePS166QHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceSchoolHere PS166QAnnouncePS166QHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceSchoolHere PS166QAnnouncePS166QHere" />(insert
                    announcement here)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="PSInnerClassInfoBox PS166QInnerClassInfoBox">
            <div className="PSClassInfoTitle PS166QClassInfoTitle PSSubTitles">
              Enrichment Classes Offered
            </div>
            <div className="PSClassInfoBottom PS166QClassInfoBottom">
              <div className="PSClassInfoImage PS166QClassInfoImage" />
              <div className="PSClassInfoContainer PS166QClassInfoContainer">
                <p className="PSClassInfoText PS166QClassInfoText">
                  Each location offers a unique set of daily enrichment classes.
                  From art to music and theater, all Serious Fun programs aim to
                  get arts back into schools for children.
                </p>
                <Link
                  to=""
                  id="PSClassInfoTextBtn"
                  className="PSClassInfoTextBtn PS166QClassInfoTextBtn PSLinkBtn"
                >
                  CLASSES @ PS 166 Q
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="PSInnerContainerBottom PS166QInnerContainerBottom">
        <div className="PSOutterContainer PS166QOutterContainer">
          <div className="PSContactInfo PS166QContactInfo">
            <p className="PSContactInfoTitle PS166QContactInfoTitle PSSubTitles">
              Site Director
            </p>

            <div className="PSContactInnerBox PS166QContactInnerBox">
              <div className="PSContactInfoLeftSec PS166QContactInfoLeftSec">
                <div className="PSContactInfoImage PS166QContactInfoImage SiteDirector" />
                <Link
                  to=""
                  id="PSContactInfoEmail"
                  className="PSContactInfoEmail PS166QContactInfoEmail PSLinkBtn"
                >
                  EMAIL
                </Link>
              </div>
              <div className="PSContactInfoRightSec PS166QContactInfoRightSec">
                <p className="PSContactInfoName PS166QContactInfoName">
                  Ms. Josette Jimenez
                </p>
                <p className="PSContactInfoText PS166QContactInfoText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                </p>
              </div>
            </div>
          </div>

          <div className="PSContactInfo PS166QContactInfo">
            <p className="PS166QContactInfoTitle PSSubTitles">Site Supervisor</p>

            <div className="PSContactInnerBox PS166QContactInnerBox">
              <div className="PSContactInfoLeftSec PS166QContactInfoLeftSec">
                <div className="PSContactInfoImage PS166QContactInfoImage SiteSupervisor" />
                <Link
                  to=""
                  id="PSContactInfoEmail"
                  className="PSContactInfoEmail PS166QContactInfoEmail PSLinkBtn"
                >
                  EMAIL
                </Link>
              </div>
              <div className="PSContactInfoRightSec PS166QContactInfoRightSec">
                <p className="PSContactInfoName PS166QContactInfoName">
                  Ms. Ana Holguin
                </p>
                <p className="PSContactInfoText PS166QContactInfoText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="PSBottomContainer PS166QBottomContainer">
          <div className="PSCalendar PS166QCalendar">
            <p className="PSCalendarTitle PS166QCalendarTitle PSSubTitles">
              Calendar
            </p>
            <p className="PSCalendarText PS166QCalendarText">
              Click below to access our after school calendar and calendar by
              site.
            </p>
            <Link
              to=""
              id="PSCalendarLink"
              className="PS166QCalendarLink PSLinkBtn"
            >
              CALENDAR
            </Link>
          </div>

          <div className="PSReminder PS166QReminder">
            <p className="PSReminderTitle PS166QReminderTitle PSSubTitles">
              Reminders
            </p>
            <p className="PSReminderText PS166QReminderText">
              With REMIND, you can receive reminders for this specific location.
            </p>
            <Link
              to=""
              id="PSReminderLink"
              className="PSReminderLink PS166QReminderLink PSLinkBtn"
            >
              SIGN UP FOR REMIND
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PS166Q;
