import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import Auth from './modules/Auth';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Nav from './components/Nav';
import Calendar from './components/Calendar';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

import AboutUs from './components/AboutUs';
import OurTeam from './components/OurTeam';
import Careers from './components/Careers';
// import Supporters from './components/Supporters';
import PeopleSay from './components/PeopleSay';

import AfterSchoolLocation from './components/AfterSchoolLocation';
import Classes from './components/Classes';

import Schools from './components/Schools';
import DetailedSchool from './components/DetailedSchool';
import EditSchool from './components/EditSchool';
import Footer from './components/Footer';
import HamburgerMenu from './components/HamburgerMenu';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      auth: Auth.isUserAuthenticated(),
      registerUsername: '',
      registerPassword: '',
      loginUsername: '',
      loginPassword: '',
      open: false,
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
      password: this.state.registerPassword
    }).then(res => {
      console.log(res.data.user.tokens[0].token);
      if(res.data.user.tokens[0].token) {
        Auth.authenticateToken(res.data.user.tokens[0].token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    axios.post('/user/login', {
      "username": this.state.loginUsername,
      "password": this.state.loginPassword,
    }).then(res => {
      if(res.data.user.tokens[0].token) {
        Auth.authenticateToken(res.data.user.tokens[0].token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
          loginUsername: '',
          loginPassword: '',
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }

  handleLogout = () => {
    axios.delete('/user/logout', {
      headers: {
        "x-auth": Auth.getToken(),
      }
    }).then(res => {
      Auth.deauthenticateUser();
      this.setState({
        auth: Auth.isUserAuthenticated(),
        loginUsername: '',
        loginPassword: '',
      })
    })
  }
  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={21}
            height={14}
            strokeWidth={3}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration='0.5'
          />
          <Nav handleLogout={this.handleLogout} />

          <Route exact path="/" component={Home}/>
          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/ourteam" component={OurTeam}/>
          <Route exact path="/careers" component={Careers}/>

          <Route exact path="/peoplesay" component={PeopleSay}/>

          <Route exact path="/locations" component={AfterSchoolLocation}/>
          <Route exact path="/classes" component={Classes}/>
          <Route exact path="/calendar" component={Calendar}/>





          <Route path='/detailedSchool/:school_id' component={DetailedSchool}/>
          <Route exact path='/schools' render={() => <Schools />} />
          <Route exact path='/editSchool/:school_id' component={EditSchool} />

          <Route exact path="/dashboard" render={() =>
              this.state.auth ? <Dashboard auth={this.state.auth} /> : <Redirect to="/login" />}/>

          <Route exact path='/login'
          render={() =>
              !this.state.auth ? (
                <LoginForm
                  auth={this.state.auth}
                  loginUsername={this.state.loginUsername}
                  loginPassword={this.state.loginPassword}
                  handleInputChange={this.handleInputChange}
                  handleLogin={this.handleLogin}
                />
              ) : (
                <Redirect to="/dashboard" />
              )}
           />

           <Route exact path='/register'
           render={() =>
              !this.state.auth ? (
                <RegisterForm
                  auth={this.state.auth}
                  registerUsername={this.state.registerUsername}
                  registerPassword={this.state.registerPassword}
                  handleInputChange={this.handleInputChange}
                  handleRegister={this.handleRegister}
                />
              ) : (
                <Redirect to="/dashboard" />
              )}
          />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
