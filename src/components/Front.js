import React, { Component } from 'react';
import $ from 'jquery';
import Navbar from './Navbar'


class Front extends Component {
  constructor(props){
    super(props);
    this.state = {
      response: [],
    }
  }
  componentDidMount() {
    this.serverRequest = $.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d52b04cdb0eb449988f46e0036017e2d&sort=newest&fl=web_url,headline,snippet`, function (result) {
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
    return (
      <div>
      {this.state.response.map((article, index) =>
        <article key={index}>
          <a href={`${article.web_url}`}>{article.web_url}</a>
          <p>{article.headline.main}</p>
          <p>{article.snippet}</p>
        </article>)}
      </div>
    )
  }
}

export default Front
