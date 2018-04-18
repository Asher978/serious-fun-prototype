import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import superagent from 'superagent';
import sha1 from 'sha1';

class EditSchool extends Component {
  constructor () {
    super();
    this.state ={
      schoolName: '',
      st_Addr: '',
      city: '',
      state: '',
      zipcode: '',
      description: '',
      picture_url: '',
      fireRedirect: false,
    }
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleDrop = file => {
    const image = file[0]

    const cloudName = 'dnixq4nvb';
    const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload';

    
    const timestamp = Date.now()/1000;
    const uploadPreset = 'gsolnxvn';

    
    const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'e-1DajckQfu24NBJcwTcAvNtlYM';
    
    
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

  editSchool = e => {
    e.preventDefault();
    axios
      .put(`/api/schools/${this.props.match.params.school_id}`, {
        schoolName: this.state.schoolName,
        st_Addr: this.state.st_Addr,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        description: this.state.description,
        picture_url: this.state.picture_url
      })
      .then(res => {
        this.setState({
          newId: res.data.school._id,
          fireRedirect: true,
        });
      })
      .catch(err => console.log(err));
    e.target.reset();
  }

  componentDidMount() {
    axios.get(`/api/schools/${this.props.match.params.school_id}`)
      .then(res => {
        console.log(res);
        const school = res.data.school;
        this.setState({
          schoolName: school.schoolName,
          st_Addr: school.st_Addr,
          city: school.city,
          state: school.state,
          zipcode: school.zipcode,
          description: school.description,
          picture_url: school.picture_url,
          newId: '',
        })
      }).catch(err => {
        console.log(err);
      })
  }

  render () {
    return (
      <div className="editSchool">
        <div className="container">
            <ol className="breadcrumb main-color-bg">
                <li>Please review/update the required info to edit this school</li>
            </ol>
        </div>
        <form className="container" onSubmit={this.editSchool}>
            <div className='form-group'>
            <span className='input-group'>
                <span className='input-group-addon main-color-bg'>School Name</span>
                <input 
                className='form-control' 
                type="text"
                name="schoolName"
                placeholder="Enter the School Name"
                value={this.state.schoolName}
                onChange={this.handleInputChange}
                required />
            </span>
            </div>
            <div className='form-group'>
            <span className='input-group'>
                <span className='input-group-addon main-color-bg'>School Description</span>
                <input 
                className='form-control' 
                type="text"
                name="description"
                placeholder="Enter the School description"
                value={this.state.description}
                onChange={this.handleInputChange}
                required />
            </span>
            </div>
            <div className='form-group'>
            <span className='input-group'>
                <span className='input-group-addon main-color-bg'>Street Address</span>
                <input 
                className='form-control' 
                type="text"
                placeholder="Enter the street address | e.g: 90 Lafayette St"
                name="st_Addr"
                value={this.state.st_Addr}
                onChange={this.handleInputChange}
                required />
            </span>
            </div>
            <div className='form-group'>
            <span className='input-group'>
                <span className='input-group-addon main-color-bg'>City</span>
                <input 
                className='form-control' 
                type="text"
                placeholder="Enter the city"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChange}
                required />
            </span>
            </div>
            <div className='form-group'>
            <span className='input-group'>
                <span className='input-group-addon main-color-bg'>State</span>
                <input 
                className='form-control' 
                type="text"
                placeholder="Enter the State Code  |  e.g: NY for New York"
                name="state"
                value={this.state.state}
                onChange={this.handleInputChange}
                required />
            </span>
            </div>
            <div className='form-group'>
            <span className='input-group'>
                <span className='input-group-addon main-color-bg'>Zip Code</span>
                <input 
                className='form-control' 
                type="text"
                placeholder="Enter the zipcode"
                name="zipcode"
                value={this.state.zipcode}
                onChange={this.handleInputChange}
                required />
            </span>
            </div>
            <div className='form-group'>
              <span className='input-group'>
                  <li className='breadcrumb main-color-bg'>School Image: Click on the box below to ONLY update/change the image for this school</li>
              </span>
              <Dropzone onDrop={this.handleDrop} accept="image/jpeg, image/png, image/jpg">
                  <p>If you are keeping the original image, then nothing needs to happen here...</p>
              </Dropzone>
             </div>
            <input type="submit" value="Update!" className="main-color-bg btn-lg btn-block" />
        </form>

        {this.state.fireRedirect ? <Redirect push to={`/detailedSchool/${this.state.newId}`} /> : '' }

      </div>
    )
  }
}

export default EditSchool;