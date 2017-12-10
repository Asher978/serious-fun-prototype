import React, { Component } from 'react';
import axios from 'axios';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import AddSchool from '../components/AddSchool';
import AddClass from '../components/AddClass';
import EditForm from './EditForm';
import Upload from '../modules/Upload';


class Dashboard extends Component {
 state = {
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
      schools: null,
      schoolsLoaded: true,
      ids: [],
      coordinates: [],
      coordsLoaded: false
    }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleRadioChange = e => {
    const isChecked = e.target.checked;
    const value = e.target.value;
    const id = this.state.ids;
    if(isChecked && !id.includes(value)) {
      id.push(value);
      this.setState({
        ids: id
      });
    } else if (!isChecked && id.includes(value)) {
      var unCheckedIndex = id.indexOf(value);
      id.splice(unCheckedIndex, 1);
      this.setState({ ids: id });
    }
  }

  handleAddSchool = (e) => {
    e.preventDefault();
    
    this.getSchoolCoords();

    if (this.state.coordsLoaded) {
      axios.post('/schools/add', {
        'schoolName': this.state.schoolName,
        'st_Addr': this.state.st_Addr,
        'city': this.state.city,
        'state': this.state.state,
        'zipcode': this.state.zipcode,
        'description': this.state.description,
        'picture_url': this.state.picture_url,
        'coordinates': this.state.coordinates
      }).then(res => {
        console.log(res);
        this.setState({
          schoolName: '',
          st_Addr: '',
          city: '',
          state: '',
          zipcode: '',
          description: '',
          picture_url: Upload.removeUrl(),
          coordinates: [],
          coordsLoaded: false
        })
      }).catch(err => {
        console.log(err);
      })
    }
  }

  handleAddClass = e => {
    e.preventDefault();
    axios.post('/classes', {
      'className': this.state.classname,
      'desc': this.state.desc,
      'price': this.state.price,
      'picture_url': this.state.picture_url,
      'schoolIds': this.state.ids
    }).then(res => {
      console.log(res);
      this.setState({
        classname: '',
        desc: '',
        price: '',
        picture_url: Upload.removeUrl()
      })
    }).catch(err => {
      console.log(err);
    })
  }

  getSchoolCoords = () => {
    
    let schoolAddress = `${this.state.st_Addr} ${this.state.city} ${this.state.state} ${this.state.zipcode}`;

    geocodeByAddress(schoolAddress)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          coordinates: [latLng.lat, latLng.lng],
          coordsLoaded: true
        });
      }).catch(error => console.log('Error', error))
  }

  componentDidMount() {
    axios.get('/schools/').then(res => {
      this.setState({
        schools : res.data,
        schoolsLoaded: true
      });
    }).catch(err=>{
      console.log(err);
    })
  }

  handleDropImg = (file) => {
    this.setState({ picture_url: Upload.getUrl(file) });
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
                    handleDrop={this.handleDropImg}
                 /> )
      case 'class':
        return ( <AddClass 
                    handleInputChange={this.handleInputChange}
                    classname={this.state.classname}
                    desc={this.state.desc}
                    price={this.state.price}
                    picture_url={this.state.picture_url}
                    handleAddClass={this.handleAddClass}
                    handleDrop={this.handleDropImg}
                    schools={this.state.schools}
                    handleRadioChange={this.handleRadioChange}
                 /> )
      case 'Page': 
          return ( <EditForm pages={this.props.pages} />)
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
                    <li><a type='button' onClick={() => this.setState({ page: 'Page' })}>Edit a Page</a></li>
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
                  <a href="" className="list-group-item"><span className='glyphicon glyphicon-education' aria-hidden='true'></span>&nbsp; Schools <span className='badge'> 7 </span></a>
                  <a href="" className="list-group-item"><span className='glyphicon glyphicon-folder-open' aria-hidden='true'></span>&nbsp; Classes <span className='badge'> 10 </span></a>
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