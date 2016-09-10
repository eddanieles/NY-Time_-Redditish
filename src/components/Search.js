import React, { Component } from 'react';
import $ from 'jquery';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      response: []
    }
  }
  componentDidMount() {
    this.serverRequest = $.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d52b04cdb0eb449988f46e0036017e2d&q=${this.props.searchTerms}&sort=newest` , function (result) {
      //console.log(result);
      this.setState({
        response: result.response.docs
      });
    }.bind(this));
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    //console.log(this.state.response);
    //console.log(this.props.searchTerms);
    return (
      <div>
      {this.state.response.map((article, index) =>
        <article key={index}>
          <a href={`${article.web_url}`}>{article.web_url}</a>
          <p>{article.headline.main}</p>
          <p>{article.snippet}</p>
          <button className="btn btn-success">Upvote</button>
          <button className="btn btn-danger">Downvote</button>
        </article>)}
      </div>
    )
  }
}

export default Search
