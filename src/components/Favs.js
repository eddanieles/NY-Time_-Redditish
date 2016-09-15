import React, { Component } from 'react';
import { Link } from 'react-router';
import base from '../config/base.js';

class Favs extends Component {
  render(){
    console.log(this.props.likedArticles);
    return(
      <div>
      <h1>favorites</h1>
      {this.props.likedArticles.map((article, index) =>
        <article key={index}>
          <a href={`${article.web_url}`}>{article.web_url}</a>
          <p>{article.headline.main}</p>
          <p>{article.snippet}</p>
          <Link to={"/article/" + article._id}><button onClick={this.handleClick}>Read More</button></Link>
        </article>)}  
      </div>
    );
  }
}

export default Favs
