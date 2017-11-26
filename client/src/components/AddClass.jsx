import React from 'react';

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
              name="className"
              placeholder="Enter the Class Name"
              value={props.className}
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
          <input type="submit" value="Submit!" className="main-color-bg btn-lg btn-block" />
      </form>
    </div>
  )
}

export default AddClass;