import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

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
        response: result.response.docs.map((article, index) =>
          <article key={index}>
            <a href={`${article.web_url}`}>{article.web_url}</a>
            <p>{article.headline.main}</p>
            <p>{article.snippet}</p>
            <Link to="/article">Read More</Link>
            {/* <button className="btn btn-success">Upvote</button>
            <button className="btn btn-danger">Downvote</button> */}
          </article>)
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
        <p>Showing results for "{this.props.searchTerms}"</p>
        {this.state.response}
      </div>
    )
  }
}

export default Search
