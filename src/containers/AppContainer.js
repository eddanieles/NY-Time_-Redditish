import React, { Component } from 'react';
import Front from '../components/Front';

class AppContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUser: ''
    }
    this.setCurrentUser = this.setCurrentUser.bind(this);
  }

  setCurrentUser (authData) {
    console.log('in setCurrentUser method of AppContainer; authData is still', authData);
    authData.getToken().then((token) => {
      console.log('the promise returned ', token);
      this.setState({
        currentUser: token
      })
    });
    console.log('this code is written after the promise...');
  }

  render() {
    return (
      <Front />
    );
  }
}

export default AppContainer;
