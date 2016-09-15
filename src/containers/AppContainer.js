import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class AppContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      uid: '',
      likedArticles: []
    }
    this.sendData = this.sendData.bind(this);
    this.addLikedArticle = this.addLikedArticle.bind(this);
  }
  sendData(userfromLogin){
    this.setState({user: userfromLogin})
  }
  addLikedArticle(articleFromArticleComp){
    let likedArticlesArray = this.state.likedArticles.concat([articleFromArticleComp]);
    this.setState({likedArticles: likedArticlesArray});
  }

  render() {
    return (
      <div>
        {<Navbar />}
        {/* this.props.children */}
        {React.cloneElement(this.props.children, {
          user: this.state.user,
          likedArticles: this.state.likedArticles,
          authUser: this.authUser,
          sendData: this.sendData,
          addLikedArticle: this.addLikedArticle
        })}
      </div>
    );
  }
}

export default AppContainer;
