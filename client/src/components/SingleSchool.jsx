import React, { Component } from 'react';

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
          <button onClick={this.handleButton}>More info</button>
      </div>
      )
    }
}
export default SingleSChool;