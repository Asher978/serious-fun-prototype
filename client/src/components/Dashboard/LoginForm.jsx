import React from 'react';
import logo from '../../assets/SeriousFun_Logo.jpg';

const LoginForm = props => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 col-md-offset-2'>
          <img className='img-circle' width={350} src={logo} alt="logo"/> 
          <h1>User Credentials</h1><br/>
          <div className='well'>
            <form onSubmit={props.handleLogin}>
              <div className='form-group'>
                <span className='input-group'>
                <span className='input-group-addon main-color-bg'><i className="glyphicon glyphicon-user"></i></span>
                <input type='text' 
                      className='form-control'
                      placeholder='Please enter your User Name'
                      name='loginUsername'
                      value={props.loginUsername}
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
                      placeholder='Please enter your password'
                      name='loginPassword'
                      value={props.loginPassword}
                      onChange={props.handleInputChange}
                      required
                />
                </span>
              </div>
              <div className='checkbox'>
                <label><input type="checkbox"/>Remember Me</label>
              </div>
              <input type="submit"
                    value='Login'
                    className='btn btn-danger main-color-bg'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;