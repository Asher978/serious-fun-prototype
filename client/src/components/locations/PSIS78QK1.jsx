import React from "react";
import { Link } from "react-router-dom";

const PSIS78QK1 = props => {
  return (
    <div className="PSContainer PSIS78QK1Container">
      <Link to="/locations" className="PSAllLocations PSIS78QK1AllLocation">
        <span className="PSLeftArrow PSIS78QK1LeftArrow">&#8249;</span> All
        Locations
      </Link>

      <div className="PSInnerContainerTop PSIS78QK1InnerContainerTop">
        <div className="PSLocationBox PSIS78QK1LocationBox">
          <p className="PSLocationTitle PSIS78QK1LocationTitle">
            Serious Fun @ <br></br>PS/IS 78 Q
          </p>
          <Link
            to=""
            id="PSLocationBtn"
            className="PSLocationBtn PSIS78QK1LocationBtn"
          >
            REGISTER
          </Link>
        </div>
        <div className="PSLocationBox PSIS78QK1LocationBox">
          <p className="PSLocationSubTitle PSIS78QK1LocationSubTitle PSSubTitles">
            Queens
          </p>
          <p className="PSLocationText PSIS78QK1LocationText">
          48-09 Center Blvd 
          Long Island City, NY 11109 
          (PS/IS 78 students only)<br></br>
           (000) 000-0000
          </p>
        </div>
        <div className="PSLocationBox PSIS78QK1LocationBox">
          <p className="PSLocationSubTitle PSIS78QK1LocationSubTitle PSSubTitles">
            Grades
          </p>
          <p className="PSLocationText PSIS78QK1LocationText">Pre-K through 5th</p>
        </div>
        <div className="PSLocationBox PSIS78QK1LocationBox">
          <div className="linkBox">
            <div className="PSLocationDropMenuTitle PSIS78QK1LocationDropMenuTitle navLinks">
              Choose Another Location<span className="PSDownArrow PSIS78QK1DownArrow">
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

      <div className="PSInnerContainerMid PSIS78QK1InnerContainerMid">
        <div className="PSLocationImageContainer PSIS78QK1LocationImageContainer">
          <div className="PSLocationImage PSIS78QK1LocationImage" />
          <Link to="" className="PSMapImage" />
        </div>

        <div className="PSInfoMidContainer PSIS78QK1InfoMidContainer">
          <div className="AnnouncementBox PSIS78QK1AnnouncementBox">
            <div className="AnnounceTitle PSIS78QK1AnnounceTitle">
              ANNOUNCEMENTS
            </div>
            <div className="AnnouncementInnerContainer PSIS78QK1AnnouncementInnerContainer">
              <div className="AnnounceGeneral PSIS78QK1AnnounceGeneral">
                <div className="AnnounceSubTitle PSIS78QK1AnnounceSubTitle">
                  GENERAL
                </div>
                <ul className="AnnounceLists PSIS78QK1AnnounceLists">
                  <li>
                    <p className="AnnounceGeneralHere PSIS78QK1AnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceGeneralHere PSIS78QK1AnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceGeneralHere PSIS78QK1AnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                </ul>
              </div>
              <div className="AnnounceSchool PSIS78QK1AnnouncePSIS78QK1">
                <div className="AnnounceSubTitle PSIS78QK1AnnounceSubTitle">
                PS/IS 78 Q
                </div>
                <ul className="AnnounceLists PSIS78QK1AnnounceLists">
                  <li>
                    <p className="AnnounceSchoolHere PSIS78QK1AnnouncePSIS78QK1Here" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceSchoolHere PSIS78QK1AnnouncePSIS78QK1Here" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceSchoolHere PSIS78QK1AnnouncePSIS78QK1Here" />(insert
                    announcement here)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="PSInnerClassInfoBox PSIS78QK1InnerClassInfoBox">
            <div className="PSClassInfoTitle PSIS78QK1ClassInfoTitle PSSubTitles">
              Enrichment Classes Offered
            </div>
            <div className="PSClassInfoBottom PSIS78QK1ClassInfoBottom">
              <div className="PSClassInfoImage PSIS78QK1ClassInfoImage" />
              <div className="PSClassInfoContainer PSIS78QK1ClassInfoContainer">
                <p className="PSClassInfoText PSIS78QK1ClassInfoText">
                  Each location offers a unique set of daily enrichment classes.
                  From art to music and theater, all Serious Fun programs aim to
                  get arts back into schools for children.
                </p>
                <Link
                  to=""
                  id="PSClassInfoTextBtn"
                  className="PSClassInfoTextBtn PSIS78QK1ClassInfoTextBtn PSLinkBtn"
                >
                  CLASSES @ PS/IS 78 Q
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="PSInnerContainerBottom PSIS78QK1InnerContainerBottom">
        <div className="PSOutterContainer PSIS78QK1OutterContainer">
          <div className="PSContactInfo PSIS78QK1ContactInfo">
            <p className="PSContactInfoTitle PSIS78QK1ContactInfoTitle PSSubTitles">
              Site Director
            </p>

            <div className="PSContactInnerBox PSIS78QK1ContactInnerBox">
              <div className="PSContactInfoLeftSec PSIS78QK1ContactInfoLeftSec">
                <div className="PSContactInfoImage PSIS78QK1ContactInfoImage SiteDirector" />
                <Link
                  to=""
                  id="PSContactInfoEmail"
                  className="PSContactInfoEmail PSIS78QK1ContactInfoEmail PSLinkBtn"
                >
                  EMAIL
                </Link>
              </div>
              <div className="PSContactInfoRightSec PSIS78QK1ContactInfoRightSec">
                <p className="PSContactInfoName PSIS78QK1ContactInfoName">
                  Ms. Josette Jimenez
                </p>
                <p className="PSContactInfoText PSIS78QK1ContactInfoText">
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

          <div className="PSContactInfo PSIS78QK1ContactInfo">
            <p className="PSIS78QK1ContactInfoTitle PSSubTitles">Site Supervisor</p>

            <div className="PSContactInnerBox PSIS78QK1ContactInnerBox">
              <div className="PSContactInfoLeftSec PSIS78QK1ContactInfoLeftSec">
                <div className="PSContactInfoImage PSIS78QK1ContactInfoImage SiteSupervisor" />
                <Link
                  to=""
                  id="PSContactInfoEmail"
                  className="PSContactInfoEmail PSIS78QK1ContactInfoEmail PSLinkBtn"
                >
                  EMAIL
                </Link>
              </div>
              <div className="PSContactInfoRightSec PSIS78QK1ContactInfoRightSec">
                <p className="PSContactInfoName PSIS78QK1ContactInfoName">
                  Ms. Ana Holguin
                </p>
                <p className="PSContactInfoText PSIS78QK1ContactInfoText">
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

        <div className="PSBottomContainer PSIS78QK1BottomContainer">
          <div className="PSCalendar PSIS78QK1Calendar">
            <p className="PSCalendarTitle PSIS78QK1CalendarTitle PSSubTitles">
              Calendar
            </p>
            <p className="PSCalendarText PSIS78QK1CalendarText">
              Click below to access our after school calendar and calendar by
              site.
            </p>
            <Link
              to=""
              id="PSCalendarLink"
              className="PSIS78QK1CalendarLink PSLinkBtn"
            >
              CALENDAR
            </Link>
          </div>

          <div className="PSReminder PSIS78QK1Reminder">
            <p className="PSReminderTitle PSIS78QK1ReminderTitle PSSubTitles">
              Reminders
            </p>
            <p className="PSReminderText PSIS78QK1ReminderText">
              With REMIND, you can receive reminders for this specific location.
            </p>
            <Link
              to=""
              id="PSReminderLink"
              className="PSReminderLink PSIS78QK1ReminderLink PSLinkBtn"
            >
              SIGN UP FOR REMIND
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PSIS78QK1;
