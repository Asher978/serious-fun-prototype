import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class Transportation extends Component {
  state={
    pageTitle:'Transportation',
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

  renderTransportationPage = () => {
    let { content } = this.state;
    return (
      <div className="transportationContainer">
      <p className="transportationMainTitle">{content.mainH}</p>
      <div className="transportationInnerContainer">
      
      <div className="transportationInnerTop">
      <div className="transportationInnerLeftSec">
      
      <p className="transportationInnerTopText">{content.mainPara}</p>
      <p className="transportationInnerTopText">{content.mainPara2}</p>
      <p className="transportationInnerMidTile">{content.subH}</p>
      <p className="transportationInnerMidText">{content.subcont}</p>
      <p className="transportationInnerContactTitle">{content.contactH}t</p>
      <p className="transportationInnerContactPhone">{content.contactNumber}</p>
      <Link to="http://www.astoriaexpress.com" id="transportationContactLink"className="transportationInnerContactLink">Visit their website</Link>
      </div>
      <div className="transportationInnerRightSec">
      <div className="transportationInnerImage"></div>
      </div>
      </div>

      <div className="transportationInnerBottom">
      <p className="transportationInnerBottomTitle">{content.subH2}</p>
      <p className="transportationInnerBottomText">{content.subcont2}</p>
      <p className="transportationInnerBottomSubText">{content.disclaimer}</p>
      <Link to="" id="transportationAuthorizationBtn" className="transportationInnerBottomBtn">OPEN PDF LETTER</Link>
      
      </div>
      </div>
      



      </div>
    );
  }

  render(){
    let { dataLoaded } = this.state;
    return (
      <div>
        {dataLoaded ? this.renderTransportationPage() : <h1>Loading.....</h1> }
      </div>
    )
  }
};

export default Transportation;