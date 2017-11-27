import React, {Component} from 'react';
import axios from 'axios';

import SingleSchool from './SingleSchool';

// import School from './school.jsx';
class Schools extends Component{
  constructor(){
    super();
    this.state = {
      schools: null,
      dataLoaded: false
    }
  }
  componentWillMount(){
    axios.get('/schools/').then(schools => {
      this.setState({
        schools : schools.data,
        dataLoaded: true
      });
    }).catch(err=>{
      console.log(err);
    })
  }
  renderSchools = () => {
    console.log(this.state.schools);
    return (
      <div>
        {this.state.schools.map(element => {
          return <SingleSchool key= {element._id} data= {element} />
        })}
      </div>
    )
  }
  render(){
    return (
      <div>
        <h1>Schools</h1>
        {this.state.dataLoaded ? this.renderSchools(): <h2>loading.....</h2>} 
      </div>
    )
  }
}


export default Schools;