
import React from "react";
import { Link } from "react-router-dom";

const PS150Q = props => {
  return (
    <div className="PSContainer PS150QContainer">
      <Link to="/locations" className="PSAllLocations PS150QAllLocation">
        <span className="PSLeftArrow PS150QLeftArrow">&#8249;</span> All
        Locations
      </Link>

      <div className="PSInnerContainerTop PS150QInnerContainerTop">
        <div className="PSLocationBox PS150QLocationBox">
          <p className="PSLocationTitle PS150QLocationTitle">
            Serious Fun @ PS 150 Q
          </p>
          <Link
            to=""
            id="PSLocationBtn"
            className="PSLocationBtn PS150QLocationBtn"
          >
            REGISTER
          </Link>
        </div>
        <div className="PSLocationBox PS150QLocationBox">
          <p className="PSLocationSubTitle PS150QLocationSubTitle PSSubTitles">
            Queens
          </p>
          <p className="PSLocationText PS150QLocationText">
          41-01 43rd Ave 
          Sunnyside, NY 11104   
          (PS 150 students only)<br></br>
           (000) 000-0000
          </p>
        </div>
        <div className="PSLocationBox PS150QLocationBox">
          <p className="PSLocationSubTitle PS150QLocationSubTitle PSSubTitles">
            Grades
          </p>
          <p className="PSLocationText PS150QLocationText">Pre-K through 5th </p>
        </div>
        <div className="PSLocationBox PS150QLocationBox">
          <div className="linkBox">
            <div className="PSLocationDropMenuTitle PS150QLocationDropMenuTitle navLinks">
              Choose Another Location<span className="PSDownArrow PS150QDownArrow">
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

      <div className="PSInnerContainerMid PS150QInnerContainerMid">
        <div className="PSLocationImageContainer PS150QLocationImageContainer">
          <div className="PSLocationImage PS150QLocationImage" />
          <Link to="" className="PSMapImage" />
        </div>

        <div className="PSInfoMidContainer PS150QInfoMidContainer">
          <div className="AnnouncementBox PS150QAnnouncementBox">
            <div className="AnnounceTitle PS150QAnnounceTitle">
              ANNOUNCEMENTS
            </div>
            <div className="AnnouncementInnerContainer PS150QAnnouncementInnerContainer">
              <div className="AnnounceGeneral PS150QAnnounceGeneral">
                <div className="AnnounceSubTitle PS150QAnnounceSubTitle">
                  GENERAL
                </div>
                <ul className="AnnounceLists PS150QAnnounceLists">
                  <li>
                    <p className="AnnounceGeneralHere PS150QAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceGeneralHere PS150QAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceGeneralHere PS150QAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                </ul>
              </div>
              <div className="AnnounceSchool PS150QAnnouncePS150Q">
                <div className="AnnounceSubTitle PS150QAnnounceSubTitle">
                PS 150 Q
                </div>
                <ul className="AnnounceLists PS150QAnnounceLists">
                  <li>
                    <p className="AnnounceSchoolHere PS150QAnnouncePS150QHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceSchoolHere PS150QAnnouncePS150QHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceSchoolHere PS150QAnnouncePS150QHere" />(insert
                    announcement here)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="PSInnerClassInfoBox PS150QInnerClassInfoBox">
            <div className="PSClassInfoTitle PS150QClassInfoTitle PSSubTitles">
              Enrichment Classes Offered
            </div>
            <div className="PSClassInfoBottom PS150QClassInfoBottom">
              <div className="PSClassInfoImage PS150QClassInfoImage" />
              <div className="PSClassInfoContainer PS150QClassInfoContainer">
                <p className="PSClassInfoText PS150QClassInfoText">
                  Each location offers a unique set of daily enrichment classes.
                  From art to music and theater, all Serious Fun programs aim to
                  get arts back into schools for children.
                </p>
                <Link
                  to=""
                  id="PSClassInfoTextBtn"
                  className="PSClassInfoTextBtn PS150QClassInfoTextBtn PSLinkBtn"
                >
                  CLASSES @ PS 150 Q
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="PSInnerContainerBottom PS150QInnerContainerBottom">
        <div className="PSOutterContainer PS150QOutterContainer">
          <div className="PSContactInfo PS150QContactInfo">
            <p className="PSContactInfoTitle PS150QContactInfoTitle PSSubTitles">
              Site Director
            </p>

            <div className="PSContactInnerBox PS150QContactInnerBox">
              <div className="PSContactInfoLeftSec PS150QContactInfoLeftSec">
                <div className="PSContactInfoImage PS150QContactInfoImage SiteDirector" />
                <Link
                  to=""
                  id="PSContactInfoEmail"
                  className="PSContactInfoEmail PS150QContactInfoEmail PSLinkBtn"
                >
                  EMAIL
                </Link>
              </div>
              <div className="PSContactInfoRightSec PS150QContactInfoRightSec">
                <p className="PSContactInfoName PS150QContactInfoName">
                  Ms. Josette Jimenez
                </p>
                <p className="PSContactInfoText PS150QContactInfoText">
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

          <div className="PSContactInfo PS150QContactInfo">
            <p className="PS150QContactInfoTitle PSSubTitles">Site Supervisor</p>

            <div className="PSContactInnerBox PS150QContactInnerBox">
              <div className="PSContactInfoLeftSec PS150QContactInfoLeftSec">
                <div className="PSContactInfoImage PS150QContactInfoImage SiteSupervisor" />
                <Link
                  to=""
                  id="PSContactInfoEmail"
                  className="PSContactInfoEmail PS150QContactInfoEmail PSLinkBtn"
                >
                  EMAIL
                </Link>
              </div>
              <div className="PSContactInfoRightSec PS150QContactInfoRightSec">
                <p className="PSContactInfoName PS150QContactInfoName">
                  Ms. Ana Holguin
                </p>
                <p className="PSContactInfoText PS150QContactInfoText">
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

        <div className="PSBottomContainer PS150QBottomContainer">
          <div className="PSCalendar PS150QCalendar">
            <p className="PSCalendarTitle PS150QCalendarTitle PSSubTitles">
              Calendar
            </p>
            <p className="PSCalendarText PS150QCalendarText">
              Click below to access our after school calendar and calendar by
              site.
            </p>
            <Link
              to=""
              id="PSCalendarLink"
              className="PS150QCalendarLink PSLinkBtn"
            >
              CALENDAR
            </Link>
          </div>

          <div className="PSReminder PS150QReminder">
            <p className="PSReminderTitle PS150QReminderTitle PSSubTitles">
              Reminders
            </p>
            <p className="PSReminderText PS150QReminderText">
              With REMIND, you can receive reminders for this specific location.
            </p>
            <Link
              to=""
              id="PSReminderLink"
              className="PSReminderLink PS150QReminderLink PSLinkBtn"
            >
              SIGN UP FOR REMIND
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PS150Q;
