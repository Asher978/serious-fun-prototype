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
        const school = this.props.data;
      return (
        <div class="col-sm-6 col-md-4">        
          <div class="thumbnail">
            <img src={school.picture_url} alt="..." />
            <div class="caption">
                <h3>{school.schoolName}</h3>
                <p>
                    {this.props.data.st_Addr}<br/>
                    {this.props.data.city} {this.props.data.state} {this.props.data.zipcode}</p>
                <p>
                    <Link className='btn btn-primary main-color-bg' to={`/detailedSchool/${this.props.data._id}`}>See Classes</Link>&nbsp;
                    <Link className='btn btn-primary main-color-bg' to={`/editSchool/${this.props.data._id}`}>Edit School</Link>
                </p>
            </div>
        </div>
        </div>
      
      )
    }
}
export default SingleSChool;