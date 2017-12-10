import React from "react";
import { Link } from "react-router-dom";

const PS17Q = props => {
  return (
    <div className="PSContainer PS17QContainer">
      <Link to="/locations" className="PSAllLocations PS17QAllLocation">
        <span className="PSLeftArrow PS17QLeftArrow">&#8249;</span> All
        Locations
      </Link>

      <div className="PSInnerContainerTop PS17QInnerContainerTop">
        <div className="PSLocationBox PS17QLocationBox">
          <p className="PSLocationTitle PS17QLocationTitle">
            Serious Fun @ PS 17 Q
          </p>
          <Link
            to=""
            id="PSLocationBtn"
            className="PSLocationBtn PS17QLocationBtn"
          >
            REGISTER
          </Link>
        </div>
        <div className="PSLocationBox PS17QLocationBox">
          <p className="PSLocationSubTitle PS17QLocationSubTitle PSSubTitles">
            Queens
          </p>
          <p className="PSLocationText PS17QLocationText">
            28-37 29th Street Astoria, NY 11102 (000) 000-0000
          </p>
        </div>
        <div className="PSLocationBox PS17QLocationBox">
          <p className="PSLocationSubTitle PS17QLocationSubTitle PSSubTitles">
            Grades
          </p>
          <p className="PSLocationText PS17QLocationText">Pre-K through 5th</p>
        </div>
        <div className="PSLocationBox PS17QLocationBox">
          <div className="linkBox">
            <div className="PSLocationDropMenuTitle PS17QLocationDropMenuTitle navLinks">
              Choose Another Location<span className="PSDownArrow PS17QDownArrow">
                &#8249;
              </span>
            </div>

            <div className="dropdownMenu">
              <div className="locationDrop">
                <Link to="/ps17q" id="PS17QDrop" className="dropLinks">
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

      <div className="PSInnerContainerMid PS17QInnerContainerMid">
        <div className="PSLocationImageContainer PS17QLocationImageContainer">
          <div className="PSLocationImage PS17QLocationImage" />
          <Link to="" className="PSMapImage" />
        </div>

        <div className="PSInfoMidContainer PS17QInfoMidContainer">
          <div className="AnnouncementBox PS17QAnnouncementBox">
            <div className="AnnounceTitle PS17QAnnounceTitle">
              ANNOUNCEMENTS
            </div>
            <div className="AnnouncementInnerContainer PS17QAnnouncementInnerContainer">
              <div className="AnnounceGeneral PS17QAnnounceGeneral">
                <div className="AnnounceSubTitle PS17QAnnounceSubTitle">
                  GENERAL
                </div>
                <ul className="AnnounceLists PS17QAnnounceLists">
                  <li>
                    <p className="AnnounceGeneralHere PS17QAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceGeneralHere PS17QAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceGeneralHere PS17QAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                </ul>
              </div>
              <div className="AnnounceSchool PS17QAnnouncePS17Q">
                <div className="AnnounceSubTitle PS17QAnnounceSubTitle">
                  PS 17 Q
                </div>
                <ul className="AnnounceLists PS17QAnnounceLists">
                  <li>
                    <p className="AnnounceSchoolHere PS17QAnnouncePS17QHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceSchoolHere PS17QAnnouncePS17QHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceSchoolHere PS17QAnnouncePS17QHere" />(insert
                    announcement here)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="PSInnerClassInfoBox PS17QInnerClassInfoBox">
            <div className="PSClassInfoTitle PS17QClassInfoTitle PSSubTitles">
              Enrichment Classes Offered
            </div>
            <div className="PSClassInfoBottom PS17QClassInfoBottom">
              <div className="PSClassInfoImage PS17QClassInfoImage" />
              <div className="PSClassInfoContainer PS17QClassInfoContainer">
                <p className="PSClassInfoText PS17QClassInfoText">
                  Each location offers a unique set of daily enrichment classes.
                  From art to music and theater, all Serious Fun programs aim to
                  get arts back into schools for children.
                </p>
                <Link
                  to=""
                  id="PSClassInfoTextBtn"
                  className="PSClassInfoTextBtn PS17QClassInfoTextBtn PSLinkBtn"
                >
                  CLASSES @ PS 17 Q
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="PSInnerContainerBottom PS17QInnerContainerBottom">
        <div className="PSOutterContainer PS17QOutterContainer">
          <div className="PSContactInfo PS17QContactInfo">
            <p className="PSContactInfoTitle PS17QContactInfoTitle PSSubTitles">
              Site Director
            </p>

            <div className="PSContactInnerBox PS17QContactInnerBox">
              <div className="PSContactInfoLeftSec PS17QContactInfoLeftSec">
                <div className="PSContactInfoImage PS17QContactInfoImage SiteDirector" />
                <Link
                  to=""
                  id="PSContactInfoEmail"
                  className="PSContactInfoEmail PS17QContactInfoEmail PSLinkBtn"
                >
                  EMAIL
                </Link>
              </div>
              <div className="PSContactInfoRightSec PS17QContactInfoRightSec">
                <p className="PSContactInfoName PS17QContactInfoName">
                  Ms. Josette Jimenez
                </p>
                <p className="PSContactInfoText PS17QContactInfoText">
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

          <div className="PSContactInfo PS17QContactInfo">
            <p className="PS17QContactInfoTitle PSSubTitles">Site Supervisor</p>

            <div className="PSContactInnerBox PS17QContactInnerBox">
              <div className="PSContactInfoLeftSec PS17QContactInfoLeftSec">
                <div className="PSContactInfoImage PS17QContactInfoImage SiteSupervisor" />
                <Link
                  to=""
                  id="PSContactInfoEmail"
                  className="PSContactInfoEmail PS17QContactInfoEmail PSLinkBtn"
                >
                  EMAIL
                </Link>
              </div>
              <div className="PSContactInfoRightSec PS17QContactInfoRightSec">
                <p className="PSContactInfoName PS17QContactInfoName">
                  Ms. Ana Holguin
                </p>
                <p className="PSContactInfoText PS17QContactInfoText">
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

        <div className="PSBottomContainer PS17QBottomContainer">
          <div className="PSCalendar PS17QCalendar">
            <p className="PSCalendarTitle PS17QCalendarTitle PSSubTitles">
              Calendar
            </p>
            <p className="PSCalendarText PS17QCalendarText">
              Click below to access our after school calendar and calendar by
              site.
            </p>
            <Link
              to=""
              id="PSCalendarLink"
              className="PS17QCalendarLink PSLinkBtn"
            >
              CALENDAR
            </Link>
          </div>

          <div className="PSReminder PS17QReminder">
            <p className="PSReminderTitle PS17QReminderTitle PSSubTitles">
              Reminders
            </p>
            <p className="PSReminderText PS17QReminderText">
              With REMIND, you can receive reminders for this specific location.
            </p>
            <Link
              to=""
              id="PSReminderLink"
              className="PSReminderLink PS17QReminderLink PSLinkBtn"
            >
              SIGN UP FOR REMIND
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PS17Q;
