import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
class Careers extends Component {
  state={
    pageTitle:'Careers',
    content: null,
    dataLoaded:false,
    careers: [],
    cities : []
  }

  componentDidMount() {
    axios.all([
      axios.get(`/page/${this.state.pageTitle}`),
      axios.get('/careers')
    ]).then(axios.spread((pageRes, careersRes) => {
      let cities =[],
        parseCareers = careersRes.data.jobs.map((job)=>{
          job.location = JSON.parse(job.location); 
          let { city } = job.location;
          (cities.indexOf(city) == -1)? cities.push(city) : null;
          return job;
       });
       console.log(cities);
      this.setState({
        content: pageRes.data.pageContent,
        careers: parseCareers,
        cities,
        dataLoaded: true
      });
    })).catch(err => console.log(err));
  }
  renderPostings = () => {
    let { careers, cities } = this.state;
    return (
      <div className="careerInfoTextLocation">
        {cities.map((city, iterator) => {
            
          return (
            <div key={iterator}>
              <div className="careerInfoTextLocationTitle">{city}, NY</div>
          {careers.map( job => (job.location.city == city) ? <Link className="careerInfoTextLocationText" key={job._id} to={job.jobLink} target='_blank'>{job.title}</Link> : null)}
            </div>)
        })}
      </div>
    )
  }
  renderCareersPage = () => {
    let { content, careers, cities } = this.state;
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
      {(careers.length <= 0) ? <div className="careerInfoTextLocation"> No jobs Available</div> : this.renderPostings()}
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
