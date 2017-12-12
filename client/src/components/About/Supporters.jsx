import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

class Supporters extends Component{
  state={
    pageTitle:'Supporters',
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

  renderSupportersPage = ()=> {
    let { content } = this.state;
    return (
      <div className="supportersContainer">
      
      <div className="supportersTop">
      <div className="supportTitle">{content.mainH}</div>
      <p className="supportTitleText">{content.subCont}</p>
      </div>

      <div className="supportersMid">
      <div className="supportLogos"></div>
      <div className="supportLogos"></div>
      </div>

      <div className="supportersBottom">
      <p className="supportBottomTitle">{content.mainH2}</p>

      <div className="supportBottomContainer">

      <hr className="supportBottomHR"></hr>
      <div className="supportDonors">
      <p className="supportBottomSubTitle">SERIOUS FUN BENEFACTOR!</p>
      <p className="supportBottomTextTop">($101+)</p>
      <p className="supportBottomTextBottom">First and last name</p>
      </div>
      <hr className="supportBottomHR"></hr>
      <div className="supportDonors">
      <p className="supportBottomSubTitle">SERIOUS FUN!</p>
      <p className="supportBottomTextTop">($51-101)</p>
      <p className="supportBottomTextBottom">First and last name</p>
      </div>
      <hr className="supportBottomHR"></hr>
      <div className="supportDonors">
      <p className="supportBottomSubTitle">SERIOUS!</p>
      <p className="supportBottomTextTop">($26-50)</p>
      <p className="supportBottomTextBottom">First and last name</p>
      </div>
      <hr className="supportBottomHR"></hr>
      <div className="supportDonors">
      <p className="supportBottomSubTitle">FUN!</p>
      <p className="supportBottomTextTop">(up to $25)</p>
      <p className="supportBottomTextBottom">First and last name</p>
      </div>
      </div>

      </div>

      </div>
    );
  }

  render(){
    let { dataLoaded } = this.state;
    return (
      <div>
        {dataLoaded ? this.renderSupportersPage() : <h1>Loading.....</h1> }
      </div>
    )
  }
};

export default Supporters;
