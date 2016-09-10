import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
  render(){
    return(
      <form onSubmit={this.login}>
        <h1>Please Login</h1>
        <p><input type="text" ref="email" placeholder="Email Address"/></p>
        <p><input type="password" ref="password" placeholder="Password" /></p>
        <p><button type="submit">Login</button></p>
        <p>New User? <Link to="/register">Register Here</Link></p>
      </form>
    );
  }
}

export default Login
