import React, { Component } from 'react';
import axios from 'axios';
class DetailedSChool  extends Component {
    constructor(){
        super();
        this.state = {
            data: null,
            classes: null,
            dataLoaded : false
        }
    }

    componentDidMount() {
        let id = this.props.match.params.school_id;
        axios.get(`/api/schools/${id}`).then(response => {
            console.log(response)
            this.setState({
                data: response.data.school,
                classes: response.data.school.classes,
                dataLoaded : true
            });
        }).catch(err => {
            console.log(err);
        });
    }

    renderClasses = () => {
       return this.state.classes.map(cls => {
            return (
                <div className='col-md-12'>
                    <div className="panel panel-default">
                        <div className="panel-heading main-color-bg">
                            <h3 className="panel-title">{cls.className}</h3>
                        </div>
                        <div className="panel-body">
                            <div className='col-md-4'>
                                <div className='well overview'>
                                    <h2>{cls.desc}</h2>
                                    <h4>${cls.price}</h4>
                                    <img className='img-thumbnail' src={cls.picture_url} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }


    renderSchool = () => {
        return (
            <div className='container'>    
                <div className="jumbotron">
                    <h1>{this.state.data.schoolName}</h1>
                    <h3>
                    {this.state.data.st_Addr}<br/>
                    {this.state.data.city}, {this.state.data.state} {this.state.data.zipcode}    
                    </h3>
                </div>

                { this.renderClasses() }

                {/* <h1>{this.state.data.schoolName}</h1>
                <p>
                    {this.state.data.st_Addr}<br/>
                    {this.state.data.city} {this.state.data.state} {this.state.data.zipcode}
                </p>
                <ul>
                    <li>class1</li>
                    <li>class2</li>
                    <li>class3</li>
                </ul> */}
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