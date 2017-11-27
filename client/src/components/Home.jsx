import React from 'react';
import bgImage from '../assets/SeriousFun_Pattern.jpg';
import logo from '../assets/SeriousFun_Logo.jpg';
import kidsA from '../assets/kidsA.jpg';
import kidsB from '../assets/kidsB.jpg';

const Home = props => {
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
                <h1>-----WHO WE ARE-----</h1>
                <h2>Serious Fun After School, Inc. is a non-profit organization dedicated to providing arts enrichment during out of school time at affordable rates, so that our children have the opportunity to participate in the best that New York has to offer.</h2>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up your kids today</a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <img className="second-slide" src={kidsA} alt="Second slide" />
            <div className="container">
              <div className="carousel-caption">
              <h1>-----WHAT WE DO-----</h1>
                <h2>The Serious Fun After School program is open on all public school days, except for District holidays, ½ days and clerical days.  Please visit our Calendar page to view the Serious Fun 2017-18 Program Calendar.  We partner with a bus company for one way pickup from local Astoria schools</h2>
                <p><a className="btn btn-lg btn-primary" href="/classes" role="button">View Our Classes</a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <img className="third-slide" src={kidsB} alt="Third slide" />
            <div className="container">
              <div className="carousel-caption">
              <h1>-----WHY US-----</h1>
                <h2>Unlike traditional drop-off classes, Serious Fun is registered with New York State as a licensed School Age Child Care (SACC) center.  Registration as a licensed SACC center requires that all of our staff, both Supervisory Staff and Teaching Artists, undergo a thorough background and fingerprint check through the New York State Central Register, and participate in ongoing child care training, including child abuse recognition and reporting.</h2>
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
            <h3 className="featurette-heading">The 2017-18 SERIOUS FUN program began Monday, Sep 11, 2017. <span className="text-muted">Ongoing Registration Available on the Schedule Below:</span></h3>
          </div>

          <div className="col-md-5">
            <img className="featurette-image img-responsive center-block" src={kidsA} alt="Generic placeholder" />
          </div>
        </div>
        
        <div className='container'>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>Registration Schedule</h3>
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

export default Home;