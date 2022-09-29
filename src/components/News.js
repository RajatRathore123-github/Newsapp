import React, {useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async() =>{
    props.setProgress(10);
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize-${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
   
  
  useEffect(() => {
   updateNews();
  }, []);

  
  
  

  
 const fetchMoreData = async() =>{
   setPage(page+1)
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page-${page}&pageSize-${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
  }

  
    return (
      <div>
        <div className="container my-3">
          <h2 className = "text-center">Top Headlines</h2>
          {/* scrolling*/}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4>Loading...</h4>}
         >
      
          <div className="row">
            {articles.map((element) => {
              
            return <div className="col-md-4" key={element.url}>
              <NewsItem 
                title={element.title?element.title.slice(0,45):""}
                // you can limit the words.
                description={element.description?element.description.slice(0,88):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url} author={element.author} date={element.publishedAt}
              />
            </div>
             })}
            
          </div>
          </InfiniteScroll>
        </div>
        
      </div>
    )
  
}

News.defaultProps = {
  country : "in",
  pageSize : 8,
  category : "general"
 }
 News.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
 }

 export default News

