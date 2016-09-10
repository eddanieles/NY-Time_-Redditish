import React, { Component } from 'react';
import { Link } from 'react-router';
import base from '../config/base.js';

class Login extends Component {
  constructor(props){
    super(props);
    this.register = this.register.bind(this);
    this.navigate = this.navigate.bind(this);
  }
  register(event){
    event.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    base.createUser({
      email: email,
      password: password
    }, this.navigate);
  }
  navigate(error, authData){
    console.log(error);
    console.log(authData);
    this.props.history.replaceState(null, "/front");
  }
  render(){
    //console.log(this.props);
    return(
      <form onSubmit={this.register}>
        <h1>Registration Page</h1>
        <p><input type="text" ref="email" placeholder="Email Address"/></p>
        <p><input type="password" ref="password" placeholder="Password" /></p>
        <p><button type="submit">Register</button></p>
        <p>Already A User? <Link to="/">SignIn Here</Link></p>
      </form>
    );
  }
}

export default Login
