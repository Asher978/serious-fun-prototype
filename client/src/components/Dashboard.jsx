import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddSchool from '../components/AddSchool';
import AddClass from '../components/AddClass';

class Dashboard extends Component {
  constructor () {
    super ();
    this.state = {
      page: '',
      schoolName: '',
      st_Addr: '',
      city: '',
      state: '',
      zipcode: '',
    }
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleAddSchool = (e) => {
    e.preventDefault();
    axios.post('/schools/add', {
      'schoolName': this.state.schoolName,
      'st_Addr': this.state.st_Addr,
      'city': this.state.city,
      'state': this.state.state,
      'zipcode': this.state.zipcode
    }).then(res => {
      console.log(res);
      this.setState({
        schoolName: '',
        st_Addr: '',
        city: '',
        state: '',
        zipcode: '',
      })
    }).catch(err => {
      console.log(err);
    })
  }

  handleAddClass = e => {
    e.preventDefault();
    axios.post('/classes')
  }

  decideWhichForm = () => {
    switch(this.state.page) {
      case 'school':
        return ( <AddSchool 
                    handleInputChange={this.handleInputChange}
                    schoolName={this.state.schoolName}
                    st_Addr={this.state.st_Addr}
                    city={this.state.city}
                    state={this.state.state}
                    zipcode={this.state.zipcode}
                    handleAddSchool={this.handleAddSchool}
                 /> )
      case 'class':
        return ( <AddClass /> )
      default:
        break
    }
  }

  render () {
    return (
      <div>
        <header id='header'>
          <div className='container'>
            <div className='row'> 
              <div className='col-md-10'>
                <h1><span className='glyphicon glyphicon-cog' aria-hidden='true'></span>&nbsp;Dashboard <small>Manage Your Site</small></h1>
              </div>
              <div className='col-md-2'>
                <div className="dropdown create">
                  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Create Content
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a type='button' onClick={() => this.setState({ page: 'school' })}>Add a School</a></li>
                    <li><a type='button' onClick={() => this.setState({ page: 'class' })}>Add a Class</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
  
        <section id='breadcrumb'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='active'>Dashboard</li>
            </ol>
          </div>
        </section>
  
        <section id='main'>
          <div className='container'>
            <div className='row'>
              
              <div className='col-md-3'>
                <div className="list-group">
                  <li className="list-group-item main-color-bg">
                  <span className='glyphicon glyphicon-arrow-down' aria-hidden='true'></span>&nbsp;Link To
                  </li>
                  <a href="#" className="list-group-item"><span className='glyphicon glyphicon-education' aria-hidden='true'></span>&nbsp; Schools <span className='badge'> 7 </span></a>
                  <a href="#" className="list-group-item"><span className='glyphicon glyphicon-folder-open' aria-hidden='true'></span>&nbsp; Classes <span className='badge'> 10 </span></a>
                </div>
              </div>
  
              <div className='col-md-9'>
                <div className="panel panel-default">
                  <div className="panel-heading main-color-bg">
                    <h3 className="panel-title">Website Overview</h3>
                  </div>
                  <div className="panel-body">
                    <div className='col-md-4'>
                      <div className='well overview'>
                        <h2><span className='glyphicon glyphicon-education' aria-hidden='true'></span>&nbsp; 7 </h2>
                        <h4>Schools</h4>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='well overview'>
                        <h2><span className='glyphicon glyphicon-folder-open' aria-hidden='true'></span>&nbsp; 7 </h2>
                        <h4>Classes</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </section>

        { this.decideWhichForm() }

      </div>
    )
  }
}

export default Dashboard;