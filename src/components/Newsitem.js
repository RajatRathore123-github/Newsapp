import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div>
        <div className="card" style={{width:"18rem"}}>
            <img src={imageUrl} alt="" className="card-img-top" />
            <div className="card-body">
                <h4 className="card-title">{title}...
                </h4>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
