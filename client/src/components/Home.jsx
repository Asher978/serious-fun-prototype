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
            <img alt='' />
          </div>
          <div>
            <img alt='' />
          </div>
          <div>
            <img alt='' />
          </div>
        </Carousel>
      </div>

      <div className="ourInfo">
      <div className="textTitle">{content.mainH}</div>
      <div className="textPara">{content.mainB}</div>

      <div className="ourContainer">

      <div className="ourClass">
      <div className="ourTitle">{content.subH}</div>
      <div className="ourPic"></div>
      <div className="ourText">{content.subBod}</div>

      </div>
      <div className="ourHomeTeam">
      <div className="ourTitle">{content.subH2}</div>
      <div className="ourPic"></div>
      <div className="ourText">{content.subBod2}</div>
      </div>
      <div className="ourDifference">
      <div className="ourTitle">{content.subH3}</div>
      <div className="ourPic"></div>
      <div className="ourText">{content.subBod3}</div>
      </div>

      </div>

      <div className="ourMoreInfo">
      <div className="ourMoreInfoText">{content.lastH}</div>
      <Link to="" className="ourMoreInfoBtn">PROGRAM OVERVIEW</Link>
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
