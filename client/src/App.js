import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      registerUsername: '',
      registerpassword: '',
      loginUsername: '',
      loginPassword: ''
    }
  }

  // use of arrow functions to avoid bindings
  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleRegister = (e) => {
    e.preventDefault();
    axios.post('/user', {
      username: this.state.registerUsername,
      password: this.state.registerpassword
    }).then(res => {
      console.log(res);
      // TODO - save the token in session storage and set state

    }).catch(err => {
      console.log(err);
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    axios.post('/login', {
      username: this.state.loginUsername,
      password: this.state.loginPassword,
    }).then(res => {
      // TODO - save token in session and set state

    }).catch(err => {
      console.log(err);
    })
  }

  handleLogout = () => {

    // TODO - send axios delete request
    //        send token in header
    //        set state after the response
  }

  render() {
    return (
      <div className="App">
        <h1>Lets have some SERIOUS FUN....!!!</h1>
      </div>
    );
  }
}

export default App;
