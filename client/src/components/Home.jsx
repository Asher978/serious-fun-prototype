import React, { Component } from 'react';
import axios from 'axios';

import bgImage from '../assets/SeriousFun_Pattern.jpg';
import logo from '../assets/SeriousFun_Logo.jpg';
import kidsA from '../assets/kidsA.jpg';
import kidsB from '../assets/kidsB.jpg';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      data: null,
      dataLoaded: false
    }
  }
  componentDidMount(){
    axios.get('/home_page').then(data => {
      this.setState({
        data: data.data.homePage[0],
        dataLoaded : true
      });
    }).catch(err => {
      console.log(err);
    });
  }
  renderData = () => {
    return (
      <div>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img className="first-slide" src={bgImage} alt="First slide" />
            <div className="container">
              <div className="carousel-caption">
                <h1>{this.state.data.title1}</h1>
                <h2>{this.state.data.content1}</h2>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up your kids today</a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <img className="second-slide" src={kidsA} alt="Second slide" />
            <div className="container">
              <div className="carousel-caption">
              <h1>{this.state.data.title2}</h1>
                <h2>{this.state.data.content2}</h2>
                <p><a className="btn btn-lg btn-primary" href="/classes" role="button">View Our Classes</a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <img className="third-slide" src={kidsB} alt="Third slide" />
            <div className="container">
              <div className="carousel-caption">
              <h1>{this.state.data.title3}</h1>
                <h2>{this.state.data.content3}</h2>
                <p><a className="btn btn-lg btn-primary" href="/schools" role="button">View Our Schools</a></p>
              </div>
            </div>
          </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <img className='img-responsive center-block' src={logo} alt='Serious Fun'/>

      <div className='container'>
        <div className="row featurette">
          <div className="col-md-7">
            <h3 className="featurette-heading">{this.state.data.bodyTitle1}</h3>
          </div>

          <div className="col-md-5">
            <img className="featurette-image img-responsive center-block" src={kidsA} alt="Generic placeholder" />
          </div>
        </div>
        
        <div className='container'>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>{this.state.data.bodyTitle2}</h3>
            </div>
            <div className='panel-body'>
              <table className="table table-striped table-hover">
                <tbody>
                <tr>
                  <th>Start Date</th>
                  <th>Online Registration Dates</th>
                  <th>In-Person Appoint Dates</th>
                </tr>
                <tr>
                  <td>Dec 1st</td>
                  <td>Nov 18th-24th</td>
                  <td>Nov 21st-22nd, 27th-28th</td>
                </tr>
                <tr>
                  <td>Dec 15th</td>
                  <td>Dec 2nd-6th</td>
                  <td>Dec 5th-8th</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
      
  )
  }
  render(){
    return(
      <div>
        {this.state.dataLoaded ? this.renderData() : <h1>Loading.....</h1>}
      </div>
    )
  }
}


export default Home;