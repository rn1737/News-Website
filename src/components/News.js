import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles= [ 
        {
          "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
          },
          "author": null,
          "title": "NZ's Santner takes 'astonishing' running catch",
          "description": "New Zealand's Mitchell Santner takes a stunning diving catch to dismiss Afghanistan captain Hashmatullah Shahidi in the ICC Cricket World Cup 2023 match in Chennai.",
          "url": "http://www.bbc.co.uk/sport/av/cricket/67144499",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/D5E4/production/_131465745_p0gm7zxj.jpg",
          "publishedAt": "2023-10-19T06:22:17.2114036Z",
          "content": "New Zealand's Mitchell Santner takes a stunning diving catch to dismiss Afghanistan captain Hashmatullah Shahidi in the ICC Cricket World Cup 2023 match in Chennai.\r\nFOLLOW LIVE: New Zealand v Afghan… [+33 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]
    constructor(){ 
        super(); 
        console.log("Hello I am a constructor from News component");
        this.state={  
            articles:this.articles, 
            loading:false, 
            page:1 
            
        }
    }
    async componentDidMount() {
      console.log("componentDidMount is called");
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=56041242b6c0435d913ab0bccb788fec";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData); // Check the response data here
      this.setState({ articles: parsedData.articles });
    }
    
     handlePrevClick=async ()=>{ 
      console.log("Previous"); 
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=56041242b6c0435d913ab0bccb788fec&page=${this.state.page - 1}&pageSize=20`;
      let data= await fetch(url); 
      let parsedData=await data.json() 
      console.log(parsedData);  
      this.setState({ 
      page:this.state.page-1,  
      articles:parsedData.articles

      })

    } 

    handleNextClick=async ()=>{ 
      console.log("Next"); 
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){ 

      } 
      else{ }
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=56041242b6c0435d913ab0bccb788fec&page=${this.state.page+1}&pageSize=20`;
      let data= await fetch(url); 
      let parsedData=await data.json() 
      console.log(parsedData);  
      this.setState({ 
      page:this.state.page+1, 
      articles:parsedData.articles 

      })
    }

    render() {
    console.log("render")
    return ( 
      <div className="container my-3"> 
     <h1 className="text-center">NewsMonkey - Top Headlines</h1> 
      <div className="row">  
      {this.state.articles && this.state.articles.map((element) => (
  <div className="col-md-4" key={element.url}>
    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
  </div>
))}


        </div>      
        <div className="container d-flex justify-content-between">  
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; PREVIOUS</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>NEXT &rarr;</button>

        </div>
    </div>    
    )
  }
}

export default News
