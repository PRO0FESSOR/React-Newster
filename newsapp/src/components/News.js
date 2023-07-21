import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor()
    {
        super();
        console.log("hello i am a constructor form news component");
        this.state={
            articles : [],
            loading: false,
            page: 1
        }
    }   

    async componentDidMount()
    {
      let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=654d27fec4114ee0a2a104df42949a0f&page=1&pageSize=20";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles : parsedData.articles,totalResults : parsedData.totalResults});

    }

    handelpreclick = async()=>{
      
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=654d27fec4114ee0a2a104df42949a0f&page=${this.state.page-1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles : parsedData.articles,page: this.state.page - 1});

      
    }

    handelnextclick = async()=>{
      
      if(this.state.page+1 > Math.ceil(this.state.totalResults/20))
      {}
      else
      {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=654d27fec4114ee0a2a104df42949a0f&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles : parsedData.articles,page: this.state.page + 1});
      }

    }

  render() {
    return (
    <div className='container my-3'>
        <h2>Newster Top Headlines</h2>
        <div className="row" >
        {this.state.articles.map((element)=>{

            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage?element.urlToImage:""} newsurl={element.url?element.url:""} />
            </div>

        })}
            
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick = {this.handelpreclick}>Previous</button>
        <button type="button" className="btn btn-dark" onClick = {this.handelnextclick}>Next</button>
        </div>
    </div>

    )
  }
}

export default News