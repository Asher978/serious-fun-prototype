import React from 'react';
import logo from '../assets/SeriousFun_Logo.jpg';

const RegisterForm = props => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 col-md-offset-2'>
          <img className='img-circle' width={350} src={logo} alt="logo"/> 
          <h1>User Account Registration</h1><br/>
          <div className='well'>
            <form onSubmit={props.handleRegister}>
              <div className='form-group'>
                <span className='input-group'>
                <span className='input-group-addon main-color-bg'><i className="glyphicon glyphicon-user"></i></span>
                <input type='text' 
                      className='form-control'
                      placeholder='Please select a User Name'
                      name='registerUsername'
                      value={props.registerUsername}
                      onChange={props.handleInputChange}
                      required     
                />
                </span>
              </div>
              <div className='form-group'>
                <span className='input-group'>
                <span className='input-group-addon main-color-bg'><i className="glyphicon glyphicon-lock"></i></span>
                <input type='password'
                      className='form-control'
                      placeholder='Please select a password'
                      name='registerPassword'
                      value={props.registerPassword}
                      onChange={props.handleInputChange}
                      required
                />
                </span>
              </div>
              <input type="submit"
                    value='Register'
                    className='btn btn-danger main-color-bg'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm;