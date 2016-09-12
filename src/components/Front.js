import React, { Component } from 'react';
import Search from './Search';
import axios from 'axios';
import Article from './Article';

class Front extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerms: 'donald trump',
      response: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getServerData = this.getServerData.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.response);
    //console.log(event.target.elements[0].value);
    let input = event.target.elements[0];
    let inputValue = input.value;
    this.setState({
      searchTerms: inputValue
    });
    this.getServerData();
  }
  getServerData(){
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d52b04cdb0eb449988f46e0036017e2d&q=${this.state.searchTerms}&sort=newest`)
      .then(
        function (result) {
          //console.log(result.length);
          this.setState({
            response: result.data.response.docs
          });
        }.bind(this))
  }
  componentDidMount(){
    this.getServerData();
  }
  render() {
    const articles = this.state.response.map(article => <Article webUrl={article.web_url} headline={article.headline.main} snippet={article.snippet}/>)
    return (
      <div>
        <form className="navbar-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        {/* <Search searchTerms={this.state.searchTerms}/> */}
        {articles}
      </div>
    )
  }
}

export default Front
