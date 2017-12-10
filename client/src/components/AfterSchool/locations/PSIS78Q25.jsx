import React from "react";
import { Link } from "react-router-dom";

const PSIS78Q25 = props => {
  return (
    <div className="PSContainer PSIS78Q25Container">
      <Link to="/locations" className="PSAllLocations PSIS78Q25AllLocation">
        <span className="PSLeftArrow PSIS78Q25LeftArrow">&#8249;</span> All
        Locations
      </Link>

      <div className="PSInnerContainerTop PSIS78Q25InnerContainerTop">
        <div className="PSLocationBox PSIS78Q25LocationBox">
          <p className="PSLocationTitle PSIS78Q25LocationTitle">
            Serious Fun @ <br></br>PS/IS 78 Q
          </p>
          <Link
            to=""
            id="PSLocationBtn"
            className="PSLocationBtn PSIS78Q25LocationBtn"
          >
            REGISTER
          </Link>
        </div>
        <div className="PSLocationBox PSIS78Q25LocationBox">
          <p className="PSLocationSubTitle PSIS78Q25LocationSubTitle PSSubTitles">
            Queens
          </p>
          <p className="PSLocationText PSIS78Q25LocationText">
          46-08 Fifth Street 
          Long Island City, NY 11101  
          (PS/IS 78 students only)<br></br>
           (000) 000-0000
          </p>
        </div>
        <div className="PSLocationBox PSIS78Q25LocationBox">
          <p className="PSLocationSubTitle PSIS78Q25LocationSubTitle PSSubTitles">
            Grades
          </p>
          <p className="PSLocationText PSIS78Q25LocationText">2 to 5</p>
        </div>
        <div className="PSLocationBox PSIS78Q25LocationBox">
          <div className="linkBox">
            <div className="PSLocationDropMenuTitle PSIS78Q25LocationDropMenuTitle navLinks">
              Choose Another Location<span className="PSDownArrow PSIS78Q25DownArrow">
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

      <div className="PSInnerContainerMid PSIS78Q25InnerContainerMid">
        <div className="PSLocationImageContainer PSIS78Q25LocationImageContainer">
          <div className="PSLocationImage PSIS78Q25LocationImage" />
          <Link to="" className="PSMapImage" />
        </div>

        <div className="PSInfoMidContainer PSIS78Q25InfoMidContainer">
          <div className="AnnouncementBox PSIS78Q25AnnouncementBox">
            <div className="AnnounceTitle PSIS78Q25AnnounceTitle">
              ANNOUNCEMENTS
            </div>
            <div className="AnnouncementInnerContainer PSIS78Q25AnnouncementInnerContainer">
              <div className="AnnounceGeneral PSIS78Q25AnnounceGeneral">
                <div className="AnnounceSubTitle PSIS78Q25AnnounceSubTitle">
                  GENERAL
                </div>
                <ul className="AnnounceLists PSIS78Q25AnnounceLists">
                  <li>
                    <p className="AnnounceGeneralHere PSIS78Q25AnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceGeneralHere PSIS78Q25AnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceGeneralHere PSIS78Q25AnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                </ul>
              </div>
              <div className="AnnounceSchool PSIS78Q25AnnouncePSIS78Q25">
                <div className="AnnounceSubTitle PSIS78Q25AnnounceSubTitle">
                PS/IS 78 Q
                </div>
                <ul className="AnnounceLists PSIS78Q25AnnounceLists">
                  <li>
                    <p className="AnnounceSchoolHere PSIS78Q25AnnouncePSIS78Q25Here" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceSchoolHere PSIS78Q25AnnouncePSIS78Q25Here" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceSchoolHere PSIS78Q25AnnouncePSIS78Q25Here" />(insert
                    announcement here)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="PSInnerClassInfoBox PSIS78Q25InnerClassInfoBox">
            <div className="PSClassInfoTitle PSIS78Q25ClassInfoTitle PSSubTitles">
              Enrichment Classes Offered
            </div>
            <div className="PSClassInfoBottom PSIS78Q25ClassInfoBottom">
              <div className="PSClassInfoImage PSIS78Q25ClassInfoImage" />
              <div className="PSClassInfoContainer PSIS78Q25ClassInfoContainer">
                <p className="PSClassInfoText PSIS78Q25ClassInfoText">
                  Each location offers a unique set of daily enrichment classes.
                  From art to music and theater, all Serious Fun programs aim to
                  get arts back into schools for children.
                </p>
                <Link
                  to=""
                  id="PSClassInfoTextBtn"
                  className="PSClassInfoTextBtn PSIS78Q25ClassInfoTextBtn PSLinkBtn"
                >
                  CLASSES @ PS/IS 78 Q
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="PSInnerContainerBottom PSIS78Q25InnerContainerBottom">
        <div className="PSOutterContainer PSIS78Q25OutterContainer">
          <div className="PSContactInfo PSIS78Q25ContactInfo">
            <p className="PSContactInfoTitle PSIS78Q25ContactInfoTitle PSSubTitles">
              Site Director
            </p>

            <div className="PSContactInnerBox PSIS78Q25ContactInnerBox">
              <div className="PSContactInfoLeftSec PSIS78Q25ContactInfoLeftSec">
                <div className="PSContactInfoImage PSIS78Q25ContactInfoImage SiteDirector" />
                <Link
                  to=""
                  id="PSContactInfoEmail"
                  className="PSContactInfoEmail PSIS78Q25ContactInfoEmail PSLinkBtn"
                >
                  EMAIL
                </Link>
              </div>
              <div className="PSContactInfoRightSec PSIS78Q25ContactInfoRightSec">
                <p className="PSContactInfoName PSIS78Q25ContactInfoName">
                  Ms. Josette Jimenez
                </p>
                <p className="PSContactInfoText PSIS78Q25ContactInfoText">
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

          <div className="PSContactInfo PSIS78Q25ContactInfo">
            <p className="PSIS78Q25ContactInfoTitle PSSubTitles">Site Supervisor</p>

            <div className="PSContactInnerBox PSIS78Q25ContactInnerBox">
              <div className="PSContactInfoLeftSec PSIS78Q25ContactInfoLeftSec">
                <div className="PSContactInfoImage PSIS78Q25ContactInfoImage SiteSupervisor" />
                <Link
                  to=""
                  id="PSContactInfoEmail"
                  className="PSContactInfoEmail PSIS78Q25ContactInfoEmail PSLinkBtn"
                >
                  EMAIL
                </Link>
              </div>
              <div className="PSContactInfoRightSec PSIS78Q25ContactInfoRightSec">
                <p className="PSContactInfoName PSIS78Q25ContactInfoName">
                  Ms. Ana Holguin
                </p>
                <p className="PSContactInfoText PSIS78Q25ContactInfoText">
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

        <div className="PSBottomContainer PSIS78Q25BottomContainer">
          <div className="PSCalendar PSIS78Q25Calendar">
            <p className="PSCalendarTitle PSIS78Q25CalendarTitle PSSubTitles">
              Calendar
            </p>
            <p className="PSCalendarText PSIS78Q25CalendarText">
              Click below to access our after school calendar and calendar by
              site.
            </p>
            <Link
              to=""
              id="PSCalendarLink"
              className="PSIS78Q25CalendarLink PSLinkBtn"
            >
              CALENDAR
            </Link>
          </div>

          <div className="PSReminder PSIS78Q25Reminder">
            <p className="PSReminderTitle PSIS78Q25ReminderTitle PSSubTitles">
              Reminders
            </p>
            <p className="PSReminderText PSIS78Q25ReminderText">
              With REMIND, you can receive reminders for this specific location.
            </p>
            <Link
              to=""
              id="PSReminderLink"
              className="PSReminderLink PSIS78Q25ReminderLink PSLinkBtn"
            >
              SIGN UP FOR REMIND
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PSIS78Q25;
