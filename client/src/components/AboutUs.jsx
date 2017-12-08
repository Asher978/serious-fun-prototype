import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class AboutUs extends Component {
  state={
    pageTitle:'AboutUs',
    content: null,
    dataLoaded:false
  }
  componentDidMount() {
    axios.get(`/page/${this.state.pageTitle}`).then(res => {
      let { pageContent } = res.data;
      console.log(pageContent);
      this.setState({
        content: pageContent,
        dataLoaded: true
      });
    });
  }
  renderAboutPage = ()=>{
    let { content } = this.state;
      return (
        <div className="aboutUs">
          <div className="aboutUsPic" />

          <div className="aboutUsInfoContainer">
            <div className="aboutUsInfoMission">
              <div className="infoOurTitle">{content.mainH}</div>
              <div className="infoOurText">{content.subCont}</div>
            </div>

            <div className="aboutUsInfoStaff">
              <div className="infoOurTitle">{content.mainH2}</div>
              <div className="infoOurText">{content.subCont2}</div>
            </div>

            <div className="aboutUsInfoDifference">
              <div className="infoOurTitle">{content.mainH2}</div>
              <div className="infoOurText">{content.subCont3}</div>
            </div>

            <div className="infoOurMoreInfo">{content.lastCont}<Link to="" className="infoOurMoreInfoLinks">Click Here</Link>{content.lastCont2}<Link to="" className="infoOurMoreInfoLinks">Click Here</Link>{content.lastCont3}</div>
          </div>
        </div>
      );
  }
  
  render(){
    let { dataLoaded } = this.state;
    return (
      <div>
        {dataLoaded ? this.renderAboutPage() : <h1>Loading.....</h1> }
      </div>
    )
  }
    
};

export default AboutUs;
