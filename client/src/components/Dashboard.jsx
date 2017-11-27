import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import superagent from 'superagent';
import sha1 from 'sha1';

import AddSchool from '../components/AddSchool';
import AddClass from '../components/AddClass';
import EditForm from './EditForm';

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
      description: '',
      picture_url: '',
      classname: '',
      desc: '',
      price: '',
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
      'zipcode': this.state.zipcode,
      'description': this.state.description,
      'picture_url': this.state.picture_url
    }).then(res => {
      console.log(res);
      this.setState({
        schoolName: '',
        st_Addr: '',
        city: '',
        state: '',
        zipcode: '',
        description: '',
        picture_url: '',
      })
    }).catch(err => {
      console.log(err);
    })
  }

  handleAddClass = e => {
    e.preventDefault();
    axios.post('/classes', {
      'className': this.state.classname,
      'desc': this.state.desc,
      'price': this.state.price,
      'picture_url': this.state.picture_url
    }).then(res => {
      console.log(res);
      this.setState({
        classname: '',
        desc: '',
        price: '',
        picture_url: ''
      })
    }).catch(err => {
      console.log(err);
    })
  }

  handleDrop = file => {
    const image = file[0]

    const cloudName = 'dnixq4nvb';
    const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload';

    // cloudinary API requires timestamp in milli seconds
    const timestamp = Date.now()/1000;
    const uploadPreset = 'gsolnxvn';

    // prepping the string for the upload
    const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'e-1DajckQfu24NBJcwTcAvNtlYM';
    
    //encrypting the string before sending it to API
    const signature = sha1(paramsStr); 
    const params = {
      'api_key': '862335133837131',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
    }

    let uploadRequest = superagent.post(url)
    uploadRequest.attach('file', image)

    Object.keys(params).forEach((key) => {
      uploadRequest.field(key, params[key])
    })

    uploadRequest.end((err, res) => {
      if (err) {
        console.log(err)
        return
      } else {
        var imgUrl = res.body.secure_url
        console.log(imgUrl)
        this.setState({ picture_url: imgUrl })
      }
    })
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
                    description={this.state.description}
                    picture_url={this.state.picture_url}
                    handleAddSchool={this.handleAddSchool}
                    handleDrop={this.handleDrop}
                 /> )
      case 'class':
        return ( <AddClass 
                    handleInputChange={this.handleInputChange}
                    classname={this.state.classname}
                    desc={this.state.desc}
                    price={this.state.price}
                    picture_url={this.state.picture_url}
                    handleAddClass={this.handleAddClass}
                    handleDrop={this.handleDrop}
                 /> )
      case 'home': 
          return ( <EditForm />)
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
                    <li><a type='button' onClick={() => this.setState({ page: 'home' })}>Edit Home Page</a></li>
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