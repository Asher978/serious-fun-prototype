import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class AddClass extends Component {
    constructor (props) {
        super (props);
    }

    renderRadios = () => {
        var schools = this.props.schools;
        if(schools.length > 0) {
            return schools.map(school => {
                return (
                        <label key={school._id} className="checkbox-inline">
                            <input type="checkbox" name="optradio" value={school._id} onChange={this.handleRadioChange}/>
                            {school.schoolName}
                        </label>
                       )
                    })
                } else {
                    return <p>There are no schools to assign a class....</p>
                }
    }

    render () {
        return (
            <div className="register">
            <div className="container">
                <ol className="breadcrumb main-color-bg">
                    <li>Please enter the required info to add a class</li>
                </ol>
            </div>
            <form className="container" onSubmit={this.props.handleAddClass}>
                <div className='form-group'>
                <span className='input-group'>
                    <span className='input-group-addon main-color-bg'>Class Name</span>
                    <input 
                    className='form-control' 
                    type="text"
                    name="classname"
                    placeholder="Enter the Class Name"
                    value={this.props.classname}
                    onChange={this.props.handleInputChange}
                    required />
                </span>
                </div>
                <div className='form-group'>
                <span className='input-group'>
                    <span className='input-group-addon main-color-bg'>Description</span>
                    <input 
                    className='form-control' 
                    type="text"
                    placeholder="Enter the class description"
                    name="desc"
                    value={this.props.desc}
                    onChange={this.props.handleInputChange}
                    required />
                </span>
                </div>
                <div className='form-group'>
                <span className='input-group'>
                    <span className='input-group-addon main-color-bg'>Price</span>
                    <input 
                    className='form-control' 
                    type="number"
                    min="1"
                    step="any"
                    placeholder="Enter the class price"
                    name="price"
                    value={this.props.price}
                    onChange={this.props.handleInputChange}
                    required />
                </span>
                </div>
                <div className='form-group'>
                <span className='input-group'>
                    <span className='input-group-addon main-color-bg'>Please select the school where this class will be offered</span>
                </span>
                { this.renderRadios() }
                </div>
                <div className='form-group'>
                    <span className='input-group'>
                        <li className='breadcrumb main-color-bg'>Class Image: Click on the box below to add an image for this class</li>
                    </span>
                    <Dropzone onDrop={this.props.handleDrop} accept="image/jpeg, image/png, image/jpg">
                        <p>Drop your files or click here to upload</p>
                    </Dropzone>
                </div>
                <input type="submit" value="Submit!" className="main-color-bg btn-lg btn-block" />
            </form>
            </div>
        )
    }
}

export default AddClass;