import React from 'react';

const AddSchool = props => {
  return (
    <div className="register">
        <div className="container">
            <ol className="breadcrumb main-color-bg">
                <li>Please enter the required info to add a school</li>
            </ol>
        </div>
        <form className="container" onSubmit={props.handleAddSchool}>
            <div className='form-group'>
            <span className='input-group'>
                <span className='input-group-addon main-color-bg'>School Name</span>
                <input 
                className='form-control' 
                type="text"
                name="schoolName"
                placeholder="Enter the School Name"
                value={props.schoolName}
                onChange={props.handleInputChange}
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
                value={props.st_Addr}
                onChange={props.handleInputChange}
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
                value={props.city}
                onChange={props.handleInputChange}
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
                value={props.state}
                onChange={props.handleInputChange}
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
                value={props.zipcode}
                onChange={props.handleInputChange}
                required />
            </span>
            </div>
            <input type="submit" value="Submit!" className="main-color-bg btn-lg btn-block" />
        </form>
    </div>
  )
}

export default AddSchool;