import React from 'react';
import Dropzone from 'react-dropzone';

const AddClass = props => {
  return (
    <div className="register">
      <div className="container">
          <ol className="breadcrumb main-color-bg">
              <li>Please enter the required info to add a class</li>
          </ol>
      </div>
      <form className="container" onSubmit={props.handleAddClass}>
          <div className='form-group'>
          <span className='input-group'>
              <span className='input-group-addon main-color-bg'>Class Name</span>
              <input 
              className='form-control' 
              type="text"
              name="classname"
              placeholder="Enter the Class Name"
              value={props.classname}
              onChange={props.handleInputChange}
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
              value={props.desc}
              onChange={props.handleInputChange}
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
              value={props.price}
              onChange={props.handleInputChange}
              required />
          </span>
          </div>
          <div className='form-group'>
            <span className='input-group'>
                <li className='breadcrumb main-color-bg'>Class Image: Click on the box below to add an image for this class</li>
            </span>
            <Dropzone onDrop={props.handleDrop} accept="image/jpeg, image/png, image/jpg">
                <p>Drop your files or click here to upload</p>
            </Dropzone>
          </div>
          <input type="submit" value="Submit!" className="main-color-bg btn-lg btn-block" />
      </form>
    </div>
  )
}

export default AddClass;