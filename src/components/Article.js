import React, { Component } from 'react';

class Article extends Component{
  render(){
    return(
      <article>
        <a href={this.props.webUrl}>{this.props.webUrl}</a>
        <p>{this.props.headline}</p>
        <p>{this.props.snippet}</p>
        {/* <Link to="/article">Read More</Link> */}
        {/* <button className="btn btn-success">Upvote</button>
        <button className="btn btn-danger">Downvote</button> */}
      </article>
    )
  }
}

export default Article
