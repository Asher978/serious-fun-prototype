import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleSChool  extends Component {
    constructor(){
        super();
    }
    handleButton = () =>{
        console.log('this button works');
    }
    render(){

      return (
      <div>
          <h1>{this.props.data.schoolName}</h1>
          <p>
              {this.props.data.st_Addr}<br/>
              {this.props.data.city} {this.props.data.state} {this.props.data.zipcode}
          </p>
          <Link to={`/detailedSchool/${this.props.data._id}`}>See Classes</Link>
          <Link to={`/editSchool/${this.props.data._id}`}>Edit School</Link>
      </div>
      )
    }
}
export default SingleSChool;