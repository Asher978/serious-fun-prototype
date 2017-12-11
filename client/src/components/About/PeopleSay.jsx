import React, { Component } from "react";
import axios from 'axios';
// import { Link } from "react-router-dom";

class PeopleSay extends Component{
  state={
    pageTitle:'PeopleSay',
    content: null,
    dataLoaded:false,
    reviews: []
  }

  componentDidMount() {
      axios.all([
        axios.get(`/page/${this.state.pageTitle}`),
        axios.get('/reviews')
      ])
      .then(axios.spread((pageRes, revRes) => {
          this.setState({
            content: pageRes.data.pageContent,
            reviews : revRes.data.reviews,
            dataLoaded: true
          })
      }));
  }

  handleReviews = () =>{
    let { content, reviews } = this.state;
    return(
      <div className="peopleSayMidContainer">
      <div className="peopleSayTop">
      
        <div className="peopleSayLeftSec">
          <div className="peopleSaySubTitles">{content.subH}</div>
            {reviews.map((review) => review.typeOfR == 'SeriousFun' ? <div key={review._id}><p className="peopleSayText">"{review.quote}"</p><p className="peopleSayTextCredit">-{review.reviewer}</p></div> : null)}
        </div>

      <div className="peopleSayRightSec">
      <div className="peopleSayImage RightImage"></div>
      </div>
      </div>
      <div className="peopleSayMid">
      <div className="peopleSaySubTitles">{content.subH2}</div>
        {reviews.map((review) => review.typeOfR == 'Classes' ? <div key={review._id}><p className="peopleSayText">"{review.quote}"</p><p className="peopleSayTextCredit">-{review.reviewer}</p></div> : null)}

      </div>
      <div className="peopleSayBottom">
      <div className="peopleSaySubTitles">{content.subH3}</div>  
      
      <div className="peopleSayBottomSec">
      
      <div className="peopleSayLeftBottom">
      <div className="peopleSayImage LeftImage"></div>
      </div>

      <div className="peopleSayRightBottom">
        {reviews.map((review) => review.typeOfR == 'HW' ? <div key={review._id}><p className="peopleSayText">"{review.quote}"</p><p className="peopleSayTextCredit">-{review.reviewer}</p></div> : null)}

      </div>


      </div>  
      
      </div>
      </div>
    )
  }
  renderPeopleSayPage = ()=> {
    let { content, reviews } = this.state;
    return (
      <div className="peopleSayContainer">
        <div className="peopleSayTitle">{content.mainH}</div>
      
        <div className="peopleSayFeedBox">
          <div className="peopleSayFeedBoxArrow LeftArrow"> &#8249; </div>
          <div className="peopleSayFeedText">“It’s a fantastic after school program and offers so much for the price. It’s worth every penny… The teachers are caring, compassionate and creative. I know my daughter is in good hands – and I appreciate the active nature of the program as well.”</div>
          <div className="peopleSayFeedBoxArrow RightArrow"> &#8250; </div>
        </div>
        {reviews.length == 0 ? <h3>No reviews posted</h3> : this.handleReviews()}
       
      </div>
    );
  }

  render(){
    let { dataLoaded } = this.state;
    return (
      <div>
        {dataLoaded ? this.renderPeopleSayPage() : <h1>Loading.....</h1> }
      </div>
    )
  }
};

export default PeopleSay;
