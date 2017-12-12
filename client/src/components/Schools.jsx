import React, {Component} from 'react';
import axios from 'axios';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

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
  componentDidMount(){
    axios.get('/api/schools/').then(schools => {
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

        {this.renderMap(this.state.schools)}

        {this.state.schools.map(element => {
          return <SingleSchool key= {element._id} data= {element} />
        })}
      </div>
    )
  }

  renderMap = (schools) => {
    const firstSchool = schools[0].coordinates;
    // const lastSchool = schools[schools.length-1];
    return (
        <Map center={firstSchool} zoom={14}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {this.generateSchoolMarkers()}
        </Map>
    )
  }

  generateSchoolMarkers = () => {
    if (this.state.dataLoaded) {
      return this.state.schools.map(school => {
        if(school.coordinates.length > 0) {
          const position = school.coordinates;
          const schoolName = school.schoolName
          return (
            <Marker position={position} key={school._id}>
              <Popup>
                <span>
                  {schoolName}
                </span>
              </Popup>
            </Marker>
        )
        } else return null;
      })
    }
  }

  render(){
    return (
      <div>
        {this.state.dataLoaded ? this.renderSchools(): <h2>loading.....</h2>} 
      </div>
    )
  }
}


export default Schools;