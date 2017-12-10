import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
class Careers extends Component {
  state={
    pageTitle:'Careers',
    content: null,
    dataLoaded:false
  }

  componentDidMount() {
    axios.get(`/page/${this.state.pageTitle}`).then(res => {
      let { pageContent } = res.data;
      this.setState({
        content: pageContent,
        dataLoaded: true
      });
    });
  }

  renderCareersPage = () => {
    let { content } = this.state;
    return (
      <div className="career">
      <div className="careerPic"></div>
      <div className="careerContainer">
      <div className="careerInfoBox">
      <div className="careerInfoTitle">{content.mainH}</div>
      <div className="careerInfoText">
      <p>{content.paragraph}</p>
      <p>{content.paragraph2}</p>
      <p>{content.paragraph3}</p>
      </div>
      </div>

      <div className="careerInfoBox">
      <div className="careerInfoTitle currentJob">{content.Heading2}</div>
      <div className="careerInfoText">

      <div className="careerInfoTextLocation">
      <div className="careerInfoTextLocationTitle">ASTORIA, NY</div>
      <Link to="" className="careerInfoTextLocationText">Drawing and Painting Specialist</Link>
      <Link to="" className="careerInfoTextLocationText">Traditional Dance Specialist</Link>
      
      </div>
      </div>
      
      </div>
      
      </div>
      

      </div>
    )
  }

  render(){
    let { dataLoaded } = this.state;
    return (
      <div>
        {dataLoaded ? this.renderCareersPage() : <h1>Loading.....</h1> }
      </div>
    )
  }
};

export default Careers;
