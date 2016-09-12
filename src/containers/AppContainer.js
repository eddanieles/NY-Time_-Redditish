import React, { Component } from 'react';
//import Navbar from '../components/Navbar';

class AppContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      uid: ''
    }
    this.authUser = this.authUser.bind(this);
  }
  authUser(error, authData){
    console.log(authData.user.email);
    console.log(authData.user.uid);
    // this.setState({
    //   user: authData.user.email,
    //   uid: authData.user.uid
    // })

    this.props.history.replaceState(null, "/front");
  }
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* this.props.children */}
        {React.cloneElement(this.props.children, {
          user: this.state.user,
          authUser: this.authUser
        })}
      </div>
    );
  }
}

export default AppContainer;
