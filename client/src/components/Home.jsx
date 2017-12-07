import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

class Home extends Component {

    state = {
      content : null,
      pageTitle: 'Home',
      data: null,
      dataLoaded : false,


  }

  componentDidMount(){
    let pageTitle = this.state;
    axios.get(`/page/${pageTitle}`).then(res =>{
      console.log(res);
    }).catch(err => console.log(err));
  }

  renderData = () => {
    return (
      <div className="homeContainer">
      <div className="slide"></div>
      
      <div className="ourInfo">
      <div className="textTitle">A Creative Space for Curious Kids</div>
      <div className="textPara">Serious Fun is a licensed in-school after care program committed to providing a safe environment and engaging classes for children to learn, play, and have fun.</div>
      
      <div className="ourContainer">
 
      <div className="ourClass">
      <div className="ourTitle">Our Classes</div>
      <div className="ourPic"></div>
      <div className="ourText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>
      
      </div>
      <div className="ourHomeTeam">
      <div className="ourTitle">Our Team</div>
      <div className="ourPic"></div>
      <div className="ourText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>
      </div>
      <div className="ourDifference">
      <div className="ourTitle">Our Difference</div>
      <div className="ourPic"></div>
      <div className="ourText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>
      </div>
      
      </div>
      
      <div className="ourMoreInfo">
      <div className="ourMoreInfoText">Learn more about Serious Fun in-school after care programs!</div>
      <Link to="" className="ourMoreInfoBtn">PROGRAM OVERVIEW</Link>
      </div>
      
      </div>


      </div>


      
  )
  }
  render(){
    return(
      <div>
      {this.renderData()}
      </div>
    )
  }
}


export default Home;