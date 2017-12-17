import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class OurTeam extends Component {
  state={
    pageTitle:'OurTeam',
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
  
  renderTeamPage = () => {
    let { content } = this.state;
    return (
      <div className="ourTeam">
      <div className="ourTeamContainer">
      <div className="ourTeamTop">
  
      <div className="ourTeamTitle">{content.mainH}</div>
  
      <div className="ourTeamFounderInfo">
  
      <div className="ourTeamFounderPicContainer">
      <div className="ourTeamFounderPic"></div>
      <div className="ourTeamMemberPicCap">
      <p>{content.founderName}</p>
      <p>{content.founderTitle}</p>
      </div>
      </div>
      <div className="ourTeamFounderText">{content.founderBio}</div>
      </div>
      </div>
  
      <div className="ourTeamMid">
      <div className="ourTeamTitle">{content.mainH2}</div>
      <div className="ourTeamMemberInfo">
  
      <div className="ourTeamMemberPicContainer">
      <div className="ourTeamMemberPic"></div>
      <div className="ourTeamMemberPicCap">
      <p>Name</p>
      <p>Title</p>
      </div>
      </div>
      <div className="ourTeamMemberPicContainer">
      <div className="ourTeamMemberPic"></div>
      <div className="ourTeamMemberPicCap">
      <p>Name</p>
      <p>Title</p>
      </div>
      </div>
      <div className="ourTeamMemberPicContainer">
      <div className="ourTeamMemberPic"></div>
      <div className="ourTeamMemberPicCap">
      <p>Name</p>
      <p>Title</p>
      </div>
      </div>
      
      </div>
      </div>
  
      <div className="ourTeamBottom">
      <div className="ourTeamTitle">{content.mainH3}</div>
      <div className="ourTeamMemberInfo">
  
      <div className="ourTeamMemberPicContainer">
      <div className="ourTeamMemberPic"></div>
      <div className="ourTeamMemberPicCap">
      <p>Name</p>
      <p>Title</p>
      </div>
      </div>
      <div className="ourTeamMemberPicContainer">
      <div className="ourTeamMemberPic"></div>
      <div className="ourTeamMemberPicCap">
      <p>Name</p>
      <p>Title</p>
      </div>
      </div>
      <div className="ourTeamMemberPicContainer">
      <div className="ourTeamMemberPic"></div>
      <div className="ourTeamMemberPicCap">
      <p>Name</p>
      <p>Title</p>
      </div>
      </div>
      
      </div>
      </div>
  
      <div className="ourTeamInfo">
      <div className="ourTeamInfoText">{content.lastContent}</div>
      <Link to="/locations" className="ourTeamInfoBtn">LOCATIONS</Link>
      
      </div>
      </div>
      </div>
    );
  }

  render(){
    let { dataLoaded } = this.state;
    return (
      <div>
        {dataLoaded ? this.renderTeamPage() : <h1>Loading.....</h1> }
      </div>
    )
  }
  
};

export default OurTeam;
