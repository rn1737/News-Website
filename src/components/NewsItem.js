import React, { Component } from 'react';

export class NewsItem extends Component { 
  render() {
    let {title, description,imageUrl,newsUrl} = this.props;   
    return (
      <div className="my-3"> 
        <div className="card" style={{ width: "18rem" }}> 
          <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/10/19/600x338/ITC-DEMERGER--0_1690467997439_1697684444296.JPG":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5> 
            <p className="card-text">{description}</p> 
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> 
          </div>
        </div>
      </div> 
    );
  }
}

export default NewsItem;
