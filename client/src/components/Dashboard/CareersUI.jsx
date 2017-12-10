import React, { Component } from 'react';
import axios from 'axios';

class CareersUI extends Component{
    state = {
        careers: null,
        dataLoaded : false,
        newTitle : '',
        newCity : '',
        newState: '',
        jobLink : ''
    } 
    componentDidMount() {
        axios.get('/careers').then(res=>{
            this.setState({
                careers: res.data.jobs,
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

    handleNewJob = (e) => {
        let { newTitle, newCity, newState, jobLink } = this.state,
            concatLocation = {
                'city' : newCity,
                'state' : newState
            };
        e.preventDefault();
        axios.post('/careers',{
            'location': JSON.stringify(concatLocation),
            'title': newTitle,
            jobLink
        }).then(res => {
            let newArr = this.state.careers;
                newArr.push(res.data.savedJob);
            this.setState({
                newState :'',
                newCity : '',
                newTitle: '',
                jobLink: ''
            });
        }).catch(err => console.log(err));
    }
    removeJob = (id) => {
        axios.delete(`/careers/${id}`).then(res => {
 
            let { _id } = res.data.job,
            newArr = this.state.careers;
            newArr = newArr.filter(job => job._id !== _id);
            this.setState({
                careers: newArr
            });
        });
    }

    renderCareersPortal = ()=> {
        let { newTitle, newCity, newState, jobLink } = this.state;
        return(
            <div>
                <div>
                    <h3>Active Listings</h3>
                    {this.state.careers.map((job)=>{
                        let splitLocation = JSON.parse(job.location);
                        return (
                        <div key={job._id}>{job.title} : {splitLocation.city}, {splitLocation.state} 
                        <button onClick={() => this.removeJob(job._id)}>X</button>
                        </div>)
                    })}
                </div>


                <div>
                    <h3>Add a new career</h3>
                    <form onSubmit={this.handleNewJob}>
                        Job Title: <br/>
                        <input name="newTitle" value={newTitle} onChange={this.handleInputChange}/><br/>
                        City : <br/>
                        <input name="newCity" value={newCity} onChange={this.handleInputChange}/><br/>
                        State : <br/>
                        <input name="newState" value={newState} onChange={this.handleInputChange}/><br/>
                        Paste Job URL : <br/>
                        <input name="jobLink" value={jobLink} onChange={this.handleInputChange}/><br/>
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
            {dataLoaded ? this.renderCareersPortal() : <h1>Loading.....</h1> }
          </div>
        )
    }
}

export default CareersUI;