import React, { Component } from 'react';
import axios from 'axios';

class ReviewsUI extends Component{
    state = {
        reviews: null,
        dataLoaded : false,
        newQuote : '',
        newReviewer : '',
        newType: 'SeriousFun',
    } 
    componentDidMount() {
        axios.get('/api/reviews').then(res=>{
            this.setState({
                reviews: res.data.reviews,
                dataLoaded: true
            });
        });
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
          [name]: value,
        });
    }

    handleNewReview = (e) => {
        let { newQuote, newReviewer, newType} = this.state;
        
        e.preventDefault();
        axios.post('/api/reviews', {
            quote: newQuote,
            reviewer: newReviewer,
            typeOfR : newType
        }).then(res => {
            let newArr = this.state.reviews;
            newArr.push(res.data.review);
            this.setState({
                newQuote :'',
                newReviewer : ''
            });
        }).catch(err => console.log(err)); 
    }
    removeReview = (id) => {
        axios.delete(`/api/reviews/${id}`).then(res => {
 
            let { _id } = res.data.review,
            newArr = this.state.reviews;
            newArr = newArr.filter(rev => rev._id !== _id);
            this.setState({
                reviews: newArr
            });
        });
    }
    handleSelect = (e) => {
        this.setState({
            newType: e.target.value    
        });
    }
    renderReviewsPortal = ()=> {
        let { newQuote, newReviewer} = this.state;
        return(
            <div>
                <div>
                    <h3>Active Reviews</h3>
                    {this.state.reviews.map((rev)=>{
                        return (
                        <div key={rev._id}>{rev.quote} : {rev.reviewer}
                        <button onClick={() => this.removeReview(rev._id)}>X</button>
                        </div>)
                    })}
                </div>


                <div>
                    <h3>Add a New Review</h3>
                    <form onSubmit={this.handleNewReview}>
                        Quote <br/>
                        <input name="newQuote" value={newQuote} onChange={this.handleInputChange}/><br/>
                        Reviewer : <br/>
                        <input name="newReviewer" value={newReviewer} onChange={this.handleInputChange}/><br/>
                        <select name="newType" onChange={this.handleInputChange}>
                            <option value="SeriousFun">SeriousFun</option>
                            <option value="HW">HW</option>
                            <option value="Classes">Classes</option>
                        </select>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    render(){
        let { dataLoaded } = this.state;
        return (
          <div>
            {dataLoaded ? this.renderReviewsPortal() : <h1>Loading.....</h1> }
          </div>
        )
    }
}

export default ReviewsUI;