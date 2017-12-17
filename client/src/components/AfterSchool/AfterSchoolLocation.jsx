import React , { Component }from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class AfterSchoolLocations extends Component {
  state={
    pageTitle:'Locations',
    content: null,
    dataLoaded:false
  }

  componentDidMount() {
    axios.get(`/api/page/${this.state.pageTitle}`).then(res => {
      let { pageContent } = res.data;
      console.log(pageContent);
      this.setState({
        content: pageContent,
        dataLoaded: true
      });
    });
  }

  renderLocationsPage = () => {
    let { content } = this.state;
    return (
      <div className="afterSchoolContainer">
        <div className="afterSchoolTop">
        <div className="afterSchoolTitle">{content.mainH}</div>



        <div className="linkBox">
        <div className="afterSchoolBtn navLinks">Select Location <span className="downMenuArrow">&#8250;</span></div>

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
            <Link to="/ps33chelseaprep" id="PS33ChelseaPrepDrop" className="dropLinks">
            PS 33 Chelsea Prep
            </Link>
          </div>
        </div>
      </div>



        </div>

        <div className="afterSchoolLocationContainer">
        <div className="afterSchoolLocation first">
          <div className="afterSchoolLocationTitle">{content.location1}</div>


          <div className="afterSchoolLocationInfoColumnContainer">
          <div className="afterSchoolLocationInfoColumn ">
          <div className="afterSchoolLocationInfo">
            <div className="afterSchoolLocationInfoTitle">PS 17 Q</div>
            <div className="afterSchoolLocationInfoText">28-37 29th Street <br></br> Astoria, NY 11102 <br></br> Grades Pre-K through 5th</div>
          </div>
          <div className="afterSchoolLocationInfo">
            <div className="afterSchoolLocationInfoTitle">PS/IS 78 Q (Grades K-1)</div>
            <div className="afterSchoolLocationInfoText">48-09 Center Blvd <br></br> Long Island City, NY 11109 <br></br> Grades K through 1st <br></br> (PS/IS 78 students only)</div>
          </div>
          <div className="afterSchoolLocationInfo last">
            <div className="afterSchoolLocationInfoTitle">PS 150 Q</div>
            <div className="afterSchoolLocationInfoText">41-01 43rd Ave <br></br> Sunnyside, NY 11104 <br></br> Grades Pre-K through 5th <br></br> (PS 150 students only)</div>
          </div>
          </div>
          <div className="afterSchoolLocationInfoColumn second ">
          <div className="afterSchoolLocationInfo">
            <div className="afterSchoolLocationInfoTitle">PS 85 Q</div>
            <div className="afterSchoolLocationInfoText">23-70 31st Street <br></br> Astoria, NY 11105 <br></br> Grades K through 5th</div>
          </div>
          <div className="afterSchoolLocationInfo">
            <div className="afterSchoolLocationInfoTitle">PS/IS 78 Q (Grades 2-5)</div>
            <div className="afterSchoolLocationInfoText">46-08 Fifth Street <br></br> Long Island City, NY 11101 <br></br> Grades 2nd through 5th <br></br> (PS/IS 78 students only)</div>
          </div>
          <div className="afterSchoolLocationInfo last">
            <div className="afterSchoolLocationInfoTitle">PS 166 Q </div>
            <div className="afterSchoolLocationInfoText">33-09 35th <br></br> Ave Astoria, NY 11106 <br></br> Grades Pre-K through 5th</div>
          </div>
          
        </div>
        </div>
        </div>
        <hr className="hrVerticalLine"/>

        <div className="afterSchoolLocation">
        <div className="afterSchoolLocationTitle">{content.location2}</div>

        <div className="afterSchoolLocationInfoColumn second secLast">
        <div className="afterSchoolLocationInfo">
          <div className="afterSchoolLocationInfoTitle">PS 33 Chelsea Prep </div>
          <div className="afterSchoolLocationInfoText">281 9th Ave <br></br> New York, NY 10001 <br></br> Grades Pre-K through 5th</div>
        </div>
        </div>
      </div>
      </div>

      <div className="infoLocationBottomText">{content.mapMessage}</div>
      <div className="infoLocationBottomMap"></div>





      </div>

    );
  }
  
  render(){
    let { dataLoaded } = this.state;
    return (
      <div>
        {dataLoaded ? this.renderLocationsPage() : <h1>Loading.....</h1> }
      </div>
    )
  }
};

export default AfterSchoolLocations;
