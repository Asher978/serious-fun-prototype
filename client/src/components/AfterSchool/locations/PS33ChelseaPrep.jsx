


import React from "react";
import { Link } from "react-router-dom";

const PS33ChelseaPrep = props => {
  return (
    <div className="PSContainer PS33ChelseaPrepContainer">
      <Link to="/locations" className="PSAllLocations PS33ChelseaPrepAllLocation">
        <span className="PSLeftArrow PS33ChelseaPrepLeftArrow">&#8249;</span> All
        Locations
      </Link>

      <div className="PSInnerContainerTop PS33ChelseaPrepInnerContainerTop">
        <div className="PSLocationBox PS33ChelseaPrepLocationBox">
          <p className="PSLocationTitle PS33ChelseaPrepLocationTitle">
            Serious Fun @ <br></br>PS 33 Chelsea Prep
          </p>
          <Link
            to=""
            id="PSLocationBtn"
            className="PSLocationBtn PS33ChelseaPrepLocationBtn"
          >
            REGISTER
          </Link>
        </div>
        <div className="PSLocationBox PS33ChelseaPrepLocationBox">
          <p className="PSLocationSubTitle PS33ChelseaPrepLocationSubTitle PSSubTitles">
            Queens
          </p>
          <p className="PSLocationText PS33ChelseaPrepLocationText">
          281 9th Ave 
          New York, NY 10001 
           (000) 000-0000
          </p>
        </div>
        <div className="PSLocationBox PS33ChelseaPrepLocationBox">
          <p className="PSLocationSubTitle PS33ChelseaPrepLocationSubTitle PSSubTitles">
            Grades
          </p>
          <p className="PSLocationText PS33ChelseaPrepLocationText">Pre-K through 5th </p>
        </div>
        <div className="PSLocationBox PS33ChelseaPrepLocationBox">
          <div className="linkBox">
            <div className="PSLocationDropMenuTitle PS33ChelseaPrepLocationDropMenuTitle navLinks">
              Choose Another Location<span className="PSDownArrow PS33ChelseaPrepDownArrow">
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
                <Link to="/ps166q" id="PS166QDrop" className="dropLinks">
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

      <div className="PSInnerContainerMid PS33ChelseaPrepInnerContainerMid">
        <div className="PSLocationImageContainer PS33ChelseaPrepLocationImageContainer">
          <div className="PSLocationImage PS33ChelseaPrepLocationImage" />
          <Link to="" className="PSMapImage" />
        </div>

        <div className="PSInfoMidContainer PS33ChelseaPrepInfoMidContainer">
          <div className="AnnouncementBox PS33ChelseaPrepAnnouncementBox">
            <div className="AnnounceTitle PS33ChelseaPrepAnnounceTitle">
              ANNOUNCEMENTS
            </div>
            <div className="AnnouncementInnerContainer PS33ChelseaPrepAnnouncementInnerContainer">
              <div className="AnnounceGeneral PS33ChelseaPrepAnnounceGeneral">
                <div className="AnnounceSubTitle PS33ChelseaPrepAnnounceSubTitle">
                  GENERAL
                </div>
                <ul className="AnnounceLists PS33ChelseaPrepAnnounceLists">
                  <li>
                    <p className="AnnounceGeneralHere PS33ChelseaPrepAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceGeneralHere PS33ChelseaPrepAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceGeneralHere PS33ChelseaPrepAnnounceGeneralHere" />(insert
                    announcement here)
                  </li>
                </ul>
              </div>
              <div className="AnnounceSchool PS33ChelseaPrepAnnouncePS33ChelseaPrep">
                <div className="AnnounceSubTitle PS33ChelseaPrepAnnounceSubTitle">
                PS 33 Chelsea Prep
                </div>
                <ul className="AnnounceLists PS33ChelseaPrepAnnounceLists">
                  <li>
                    <p className="AnnounceSchoolHere PS33ChelseaPrepAnnouncePS33ChelseaPrepHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceSchoolHere PS33ChelseaPrepAnnouncePS33ChelseaPrepHere" />(insert
                    announcement here)
                  </li>
                  <li>
                    <p className="AnnounceSchoolHere PS33ChelseaPrepAnnouncePS33ChelseaPrepHere" />(insert
                    announcement here)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="PSInnerClassInfoBox PS33ChelseaPrepInnerClassInfoBox">
            <div className="PSClassInfoTitle PS33ChelseaPrepClassInfoTitle PSSubTitles">
              Enrichment Classes Offered
            </div>
            <div className="PSClassInfoBottom PS33ChelseaPrepClassInfoBottom">
              <div className="PSClassInfoImage PS33ChelseaPrepClassInfoImage" />
              <div className="PSClassInfoContainer PS33ChelseaPrepClassInfoContainer">
                <p className="PSClassInfoText PS33ChelseaPrepClassInfoText">
                  Each location offers a unique set of daily enrichment classes.
                  From art to music and theater, all Serious Fun programs aim to
                  get arts back into schools for children.
                </p>
                <Link
                  to=""
                  id="PSClassInfoTextBtn"
                  className="PSClassInfoTextBtn PS33ChelseaPrepClassInfoTextBtn PSLinkBtn"
                >
                  CLASSES @ PS 33 Chelsea
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="PSInnerContainerBottom PS33ChelseaPrepInnerContainerBottom">
        <div className="PSOutterContainer PS33ChelseaPrepOutterContainer">
          <div className="PSContactInfo PS33ChelseaPrepContactInfo">
            <p className="PSContactInfoTitle PS33ChelseaPrepContactInfoTitle PSSubTitles">
              Site Director
            </p>

            <div className="PSContactInnerBox PS33ChelseaPrepContactInnerBox">
              <div className="PSContactInfoLeftSec PS33ChelseaPrepContactInfoLeftSec">
                <div className="PSContactInfoImage PS33ChelseaPrepContactInfoImage SiteDirector" />
                <Link
                  to=""
                  id="PSContactInfoEmail"
                  className="PSContactInfoEmail PS33ChelseaPrepContactInfoEmail PSLinkBtn"
                >
                  EMAIL
                </Link>
              </div>
              <div className="PSContactInfoRightSec PS33ChelseaPrepContactInfoRightSec">
                <p className="PSContactInfoName PS33ChelseaPrepContactInfoName">
                  Ms. Josette Jimenez
                </p>
                <p className="PSContactInfoText PS33ChelseaPrepContactInfoText">
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

          <div className="PSContactInfo PS33ChelseaPrepContactInfo">
            <p className="PS33ChelseaPrepContactInfoTitle PSSubTitles">Site Supervisor</p>

            <div className="PSContactInnerBox PS33ChelseaPrepContactInnerBox">
              <div className="PSContactInfoLeftSec PS33ChelseaPrepContactInfoLeftSec">
                <div className="PSContactInfoImage PS33ChelseaPrepContactInfoImage SiteSupervisor" />
                <Link
                  to=""
                  id="PSContactInfoEmail"
                  className="PSContactInfoEmail PS33ChelseaPrepContactInfoEmail PSLinkBtn"
                >
                  EMAIL
                </Link>
              </div>
              <div className="PSContactInfoRightSec PS33ChelseaPrepContactInfoRightSec">
                <p className="PSContactInfoName PS33ChelseaPrepContactInfoName">
                  Ms. Ana Holguin
                </p>
                <p className="PSContactInfoText PS33ChelseaPrepContactInfoText">
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

        <div className="PSBottomContainer PS33ChelseaPrepBottomContainer">
          <div className="PSCalendar PS33ChelseaPrepCalendar">
            <p className="PSCalendarTitle PS33ChelseaPrepCalendarTitle PSSubTitles">
              Calendar
            </p>
            <p className="PSCalendarText PS33ChelseaPrepCalendarText">
              Click below to access our after school calendar and calendar by
              site.
            </p>
            <Link
              to=""
              id="PSCalendarLink"
              className="PS33ChelseaPrepCalendarLink PSLinkBtn"
            >
              CALENDAR
            </Link>
          </div>

          <div className="PSReminder PS33ChelseaPrepReminder">
            <p className="PSReminderTitle PS33ChelseaPrepReminderTitle PSSubTitles">
              Reminders
            </p>
            <p className="PSReminderText PS33ChelseaPrepReminderText">
              With REMIND, you can receive reminders for this specific location.
            </p>
            <Link
              to=""
              id="PSReminderLink"
              className="PSReminderLink PS33ChelseaPrepReminderLink PSLinkBtn"
            >
              SIGN UP FOR REMIND
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PS33ChelseaPrep;
