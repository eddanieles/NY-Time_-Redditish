import React, { Component } from 'react';
import Search from './Search'
import $ from 'jquery';
import { Link } from 'react-router';
import axios from 'axios';

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
    let inputValue = input.value;
    console.log(this.refs.inputValue.value);
    $.ajax({
        url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d52b04cdb0eb449988f46e0036017e2d&q=${this.refs.inputValue.value}&sort=newest`,
        type: 'GET',
        success: function(response) {
          //console.log(response);
          this.setState({
            response: response.response.docs
          });
        }.bind(this)
    });

  }
  componentDidMount(){
    $.ajax({
        url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d52b04cdb0eb449988f46e0036017e2d&q=news&sort=newest`,
        type: 'GET',
        success: function(response) {
          //console.log(response);
          this.setState({
            response: response.response.docs
          });
        }.bind(this)
    });
  }
  render() {
    return (
      <div>
        <p>{this.props.user}</p>
        <form className="navbar-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" ref="inputValue"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        {this.state.response.map((article, index) =>
          <article key={index}>
            <a href={`${article.web_url}`}>{article.web_url}</a>
            <p>{article.headline.main}</p>
            <p>{article.snippet}</p>
            <Link to="/article"><button>Read More</button></Link>
          </article>)}
      </div>
    )
  }
}

export default Front
