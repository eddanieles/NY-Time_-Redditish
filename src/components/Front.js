import React, { Component } from 'react';
import Search from './Search'

class Front extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerms: 'news',
      url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d52b04cdb0eb449988f46e0036017e2d&q=news&sort=newest`
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault();
    //console.log(event.target.elements[0].value);
    let input = event.target.elements[0];
    let inputValue = input.value;
    this.setState({
      searchTerms: inputValue,
      url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d52b04cdb0eb449988f46e0036017e2d&q=${inputValue}&sort=newest`
    });
  }
  render() {
    return (
      <div>
        <form className="navbar-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        <Search
          searchTerms={this.state.searchTerms}
          url={this.state.url}/>
      </div>
    )
  }
}

export default Front
