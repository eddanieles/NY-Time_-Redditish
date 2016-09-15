import React, { Component } from 'react';
import $ from 'jquery';
import base from '../config/base';

class Article extends Component {
  constructor(){
    super();
    this.state = {
      article: [],
      likeArticles: []
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    $.ajax({
        url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d52b04cdb0eb449988f46e0036017e2d&q=news&sort=newest`,
        type: 'GET',
        success: function(response) {
          //console.log(response.response.docs.filter(article => article._id === this.props.params.article_id));
          this.setState({article : response.response.docs.filter(article => article._id === this.props.params.article_id)})
        }.bind(this)
    });
    this.rebaseRef = base.syncState('likedArticles', {
      context: this,
      state: 'likedArticles',
      asArray: true
    })
  }
  handleClick(event){
    event.preventDefault();
    console.log(this.props.user, this.state.article[0]);
    let likedArticlesArray = this.state.likedArticles;
    this.setState({likedArticles: likedArticlesArray.concat([
      {user: this.props.user, article: this.state.article[0]}
      ])
    })
    this.props.addLikedArticle(this.state.article[0]);
  }
  render(){
    //console.log(this.props);
    return(
      <div>
        <h1>Article component</h1>
        <p>{this.props.user}</p>
        {this.state.article.map((article, index) =>
          <article key={index}>
            <a href={`${article.web_url}`}>{article.web_url}</a>
            <p>{article.headline.main}</p>
            <p>{article.snippet}</p>
            <button onClick={this.handleClick}>Like</button>
          </article>)}
      </div>

    );
  }
}

export default Article
