import React, { Component } from 'react';
import Search from './Search'
import $ from 'jquery';

class Front extends Component {
  constructor(props){
    super(props);
    this.state = {
      response: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault();
    //console.log(event.target.elements[0].value);
    let input = event.target.elements[0];
    let inputValue = input.value;
    console.log(this.refs.inputValue.value);
    $.ajax({
        url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d52b04cdb0eb449988f46e0036017e2d&q=${this.refs.inputValue.value}&sort=newest`,
        type: 'GET',
        success: function(response) {
          console.log(response);
          this.setState({
            response: response.response.docs
          });
        }.bind(this)
    });

  }
  render() {
    return (
      <div>
        <p>Search for Articles</p>
        <form className="navbar-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" ref="inputValue"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        {/* <Search
          searchTerms={this.state.searchTerms}
          url={this.state.url}/> */}
        {this.state.response.map((article, index) =>
          <article key={index}>
            <a href={`${article.web_url}`}>{article.web_url}</a>
            <p>{article.headline.main}</p>
            <p>{article.snippet}</p>
            <button className="btn btn-success">UpVote</button><button className="btn btn-danger">DownVote</button>
          </article>)}
      </div>
    )
  }
}

export default Front
