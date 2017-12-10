import React from "react";
import { Link } from "react-router-dom";

const PS85Q = props => {
  return (
    <div className="PSContainer PS85QContainer">
      <Link to="/locations" className="PSAllLocations PS85QAllLocation">
        <span className="PSLeftArrow PS85QLeftArrow">&#8249;</span> All
        Locations
      </Link>

      <div className="PSInnerContainerTop PS85QInnerContainerTop">
        <div className="PSLocationBox PS85QLocationBox">
          <p className="PSLocationTitle PS85QLocationTitle">
            Serious Fun @ PS 85 Q
          </p>
          <Link
            to=""
            id="PSLocationBtn"
            className="PSLocationBtn PS85QLocationBtn"
          >
            REGISTER
          </Link>
        </div>
        <div className="PSLocationBox PS85QLocationBox">
          <p className="PSLocationSubTitle PS85QLocationSubTitle PSSubTitles">
            Queens
          </p>
          <p className="PSLocationText PS85QLocationText">
          23-70 31st Street Astoria, NY 11105 (000) 000-0000
          </p>
        </div>
        <div className="PSLocationBox PS85QLocationBox">
          <p className="PSLocationSubTitle PS85QLocationSubTitle PSSubTitles">
            Grades
          </p>
          <p className="PSLocationText PS85QLocationText">Pre-K through 5th</p>
        </div>
        <div className="PSLocationBox PS85QLocationBox">
          <div className="linkBox">
            <div className="PSLocationDropMenuTitle PS85QLocationDropMenuTitle navLinks">
              Choose Another Location<span className="PSDownArrow PS85QDownArrow">
                &#8249;
              </span>
            </div>

            <div className="dropdownMenu">
              <div className="locationDrop">
                <Link to="/ps17q" id="PS85QDrop" className="dropLinks">
                  PS 17 Q
                </Link>
                <Link to="/ps85q" id="PS85QDrop" className="dropLinks">
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

      <div className="PSInnerContainerMid PS85QInnerContainerMid">
        <div className="PSLocationImageContainer PS85QLocationImageContainer">
          <div className="PSLocationImage PS85QLocationImage" />
          <Link to="" className="PSMapImage" />
        </div>

        <div className="PSInfoMidContainer PS85QInfoMidContainer">
          <div className="AnnouncementBox PS85QAnnouncementBox">
            <div className="AnnounceTitle PS85QAnnounceTitle">
              ANNOUNCEMENTS
            </div>
            <div className="AnnouncementInnerContainer PS85QAnnouncementInnerContainer">
              <div className="AnnounceGeneral PS85QAnnounceGeneral">
                <div className="AnnounceSubTitle PS85QAnnounceSubTitle">
                  GENERAL
                </div>
                <ul className="AnnounceLists PS85QAnnounceLists">
                  <li>
                    <p className="AnnounceGeneralHere PS85QAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceGeneralHere PS85QAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceGeneralHere PS85QAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                </ul>
              </div>
              <div className="AnnounceSchool PS85QAnnouncePS85Q">
                <div className="AnnounceSubTitle PS85QAnnounceSubTitle">
                  PS 17 Q
                </div>
                <ul className="AnnounceLists PS85QAnnounceLists">
                  <li>
                    <p className="AnnounceSchoolHere PS85QAnnouncePS85QHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceSchoolHere PS85QAnnouncePS85QHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceSchoolHere PS85QAnnouncePS85QHere" />(insert
                    announcement here)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="PSInnerClassInfoBox PS85QInnerClassInfoBox">
            <div className="PSClassInfoTitle PS85QClassInfoTitle PSSubTitles">
              Enrichment Classes Offered
            </div>
            <div className="PSClassInfoBottom PS85QClassInfoBottom">
              <div className="PSClassInfoImage PS85QClassInfoImage" />
              <div className="PSClassInfoContainer PS85QClassInfoContainer">
                <p className="PSClassInfoText PS85QClassInfoText">
                  Each location offers a unique set of daily enrichment classes.
                  From art to music and theater, all Serious Fun programs aim to
                  get arts back into schools for children.
                </p>
                <Link
                  to=""
                  id="PSClassInfoTextBtn"
                  className="PSClassInfoTextBtn PS85QClassInfoTextBtn PSLinkBtn"
                >
                  CLASSES @ PS 85 Q
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="PSInnerContainerBottom PS85QInnerContainerBottom">
        <div className="PSOutterContainer PS85QOutterContainer">
          <div className="PSContactInfo PS85QContactInfo">
            <p className="PSContactInfoTitle PS85QContactInfoTitle PSSubTitles">
              Site Director
            </p>

            <div className="PSContactInnerBox PS85QContactInnerBox">
              <div className="PSContactInfoLeftSec PS85QContactInfoLeftSec">
                <div className="PSContactInfoImage PS85QContactInfoImage SiteDirector" />
                <Link
                  to=""
                  id="PSContactInfoEmail"
                  className="PSContactInfoEmail PS85QContactInfoEmail PSLinkBtn"
                >
                  EMAIL
                </Link>
              </div>
              <div className="PSContactInfoRightSec PS85QContactInfoRightSec">
                <p className="PSContactInfoName PS85QContactInfoName">
                  Ms. Josette Jimenez
                </p>
                <p className="PSContactInfoText PS85QContactInfoText">
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

          <div className="PSContactInfo PS85QContactInfo">
            <p className="PS85QContactInfoTitle PSSubTitles">Site Supervisor</p>

            <div className="PSContactInnerBox PS85QContactInnerBox">
              <div className="PSContactInfoLeftSec PS85QContactInfoLeftSec">
                <div className="PSContactInfoImage PS85QContactInfoImage SiteSupervisor" />
                <Link
                  to=""
                  id="PSContactInfoEmail"
                  className="PSContactInfoEmail PS85QContactInfoEmail PSLinkBtn"
                >
                  EMAIL
                </Link>
              </div>
              <div className="PSContactInfoRightSec PS85QContactInfoRightSec">
                <p className="PSContactInfoName PS85QContactInfoName">
                  Ms. Ana Holguin
                </p>
                <p className="PSContactInfoText PS85QContactInfoText">
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

        <div className="PSBottomContainer PS85QBottomContainer">
          <div className="PSCalendar PS85QCalendar">
            <p className="PSCalendarTitle PS85QCalendarTitle PSSubTitles">
              Calendar
            </p>
            <p className="PSCalendarText PS85QCalendarText">
              Click below to access our after school calendar and calendar by
              site.
            </p>
            <Link
              to=""
              id="PSCalendarLink"
              className="PS85QCalendarLink PSLinkBtn"
            >
              CALENDAR
            </Link>
          </div>

          <div className="PSReminder PS85QReminder">
            <p className="PSReminderTitle PS85QReminderTitle PSSubTitles">
              Reminders
            </p>
            <p className="PSReminderText PS85QReminderText">
              With REMIND, you can receive reminders for this specific location.
            </p>
            <Link
              to=""
              id="PSReminderLink"
              className="PSReminderLink PS85QReminderLink PSLinkBtn"
            >
              SIGN UP FOR REMIND
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PS85Q;
