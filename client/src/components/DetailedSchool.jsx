import React, { Component } from 'react';
import axios from 'axios';
class DetailedSChool  extends Component {
    constructor(){
        super();
        this.state = {
            data: null,
            dataLoaded : false
        }
    }

    componentDidMount() {
        let id = this.props.match.params.school_id;
        axios.get(`/schools/${id}`).then(response => {
            this.setState({
                data: response.data.school,
                dataLoaded : true
            });
        }).catch(err => {
            console.log(err);
        });
    }
    renderSchool = () => {
        return (
            <div>           
                <h1>{this.state.data.schoolName}</h1>
                <p>
                    {this.state.data.st_Addr}<br/>
                    {this.state.data.city} {this.state.data.state} {this.state.data.zipcode}
                </p>
            </div>
        )
    }
    render(){
      return (
      <div>
        {this.state.dataLoaded ? this.renderSchool() : <h1>data loading..</h1>}
      </div>)
    }
}
export default DetailedSChool;