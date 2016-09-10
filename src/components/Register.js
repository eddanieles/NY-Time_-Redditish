import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
  render(){
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
