import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export default class News extends Component {
   static defaultProps = {
    country : "in",
    pageSize : 8,
    category : "general"
   }
   static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
   }
  
  constructor() {
    super();
    this.state = {
      articles: [],
      page:1,
      loading : false
    };
  }
  async updateNews(){
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc302e674cf44422adca13c02dea1220&page-${this.state.page}&pageSize-${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles: parseData.articles, totalArticles: parseData.totalResults,
    loading : false});
  

  }
  async componentDidMount(){
    this.updateNews();
  }

  handlePrevClick = async () =>{
    this.setState({page: this.state.page - 1});
  }
  handleNextClick = async () =>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
       this.setState({page: this.state.page + 1});
      }
   
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className = "text-center">Top Headlines</h2>
          {this.setState.loading && <Spinner/>}

          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              
            return <div className="col-md-4" key={element.url}>
              <Newsitem 
                title={element.title?element.title.slice(0,45):""}
                // you can limit the words.
                description={element.description?element.description.slice(0,88):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url} author={element.author} date={element.publishedAt}
              />
            </div>
             })}
            
          </div>
        </div>
        <div className = "container d-flex justify-content-between my-3">
          <button disabled = {this.state.page<=1} className = "btn btn-dark" onClick = {this.handlePrevClick}>Previous</button>
          <button disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className = "btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    );
  }
}
