import React, { Component } from 'react';
//import Navbar from '../components/Navbar';

class AppContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      uid: ''
    }
    this.sendData = this.sendData.bind(this);
  }
  sendData(userfromLogin){
    this.setState({user: userfromLogin})
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* this.props.children */}
        {React.cloneElement(this.props.children, {
          user: this.state.user,
          authUser: this.authUser,
          sendData: this.sendData
        })}
      </div>
    );
  }
}

export default AppContainer;
