import React, { Component } from 'react';
//import Navbar from '../components/Navbar';

class AppContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUser: ''
    }
  }
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;
