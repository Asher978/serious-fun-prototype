import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import axios from 'axios';

class Home extends Component {

  state = {
    content : null,
    pageTitle: 'Home',
    data: null,
    dataLoaded : false,
  }

  componentDidMount(){
    let { pageTitle } = this.state;
    axios.get(`/api/page/${pageTitle}`).then(res =>{
        this.setState({
          data: res.data,
          content: res.data.pageContent,
          dataLoaded : true
        });
    }).catch(err => console.log(err));
  }

  renderData = () => {
    let { content } = this.state;
    return (
      <div className="homeContainer">
      <div className="slide">
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows
          autoPlay
          infiniteLoop
          dynamicHeight >
          <div>
            <img alt='' src={require("../assets/slide/mountains.jpg")}/>
          </div>
          <div>
            <img alt='' src={require("../assets/slide/contact.jpg")}/>
          </div>
          <div>
            <img alt='' src={require("../assets/slide/bridge.jpg")}/>
          </div>
        </Carousel>
      </div>

      <div className="ourInfo">
      <div className="textTitle">{content.mainH}</div>
      <div className="textPara">{content.mainB}</div>

      <div className="ourContainer">

      <div className="ourClass">
      <div className="ourTitle">{content.subH}</div>
      <Link to="/classes" className="ourPic"></Link>
      <div className="ourText">{content.subBod}</div>

      </div>
      <div className="ourHomeTeam">
      <div className="ourTitle">{content.subH2}</div>
      <Link to="/ourteam" className="ourPic"></Link>
      <div className="ourText">{content.subBod2}</div>
      </div>
      <div className="ourDifference">
      <div className="ourTitle">{content.subH3}</div>
      <Link to="/aboutus" className="ourPic"></Link>
      <div className="ourText">{content.subBod3}</div>
      </div>

      </div>

      <div className="ourMoreInfo">
      <div className="ourMoreInfoText">{content.lastH}</div>
      <Link to="/overview" className="ourMoreInfoBtn">PROGRAM OVERVIEW</Link>
      </div>

      </div>


      </div>



  )
  }
  render(){
    let { dataLoaded } = this.state;
    return(
      <div>
        {(!dataLoaded)? <h1>....Loading </h1> : this.renderData()}
      </div>
    )
  }
}


export default Home;
