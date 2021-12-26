import React, { Component } from 'react'
// import { useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
        country:'in',
        pageSize:'8',
        category:'sports'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    articles = [
        
        ]

        capitalizeFirstLetter = (string) =>
        {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    constructor(props) {
        super(props)
    
        this.state = {
            article: this.articles,
            loading: true,
            page:  1,
            totalResults: 0
             
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsFusion`;
    }
    
    async updateNews(){
        this.props.setProgress(10);
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({article: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
        this.props.setProgress(100);

    }
    handlePrevClick =  async () =>{
        console.log("Previous");
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9926c3840ee04f1585e8734b2ee9b54e&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true})
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({article: parsedData.articles, page : this.state.page - 1, loading : false})
        this.setState({page: this.state.page-1})
        this.updateNews();

    }
    handleNextClick = async () =>{
        console.log("Next");
    //     if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
    //     {
    //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9926c3840ee04f1585e8734b2ee9b54e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     console.log(parsedData);
    //     this.setState({article: parsedData.articles, page : this.state.page + 1, loading: false})
    // }
    

}

fetchMoreData = async() => {
    
    this.setState({page: this.state.page+1})
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9926c3840ee04f1585e8734b2ee9b54e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({article: this.state.article.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false})
  };
    async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9926c3840ee04f1585e8734b2ee9b54e&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true})
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({article: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
        this.updateNews();
    }


    // Use this in functional component for componentDidMount
    /*useEffect(() => {
       updateNews();
       //eslint-disable-next-line
    }, [])*/

    
    
    
    render() {
        return (
            <>
            {/* <div className="container my-3"> */}
                <h1 className="text-center" style={{margin:"35px 0px", letterSpacing: "3px", marginTop: "90px"}}><span style={{color: "red"}}>Top </span> <span style={{color : this.props.mode === "light"? "black": "whitesmoke" }}>Trending News from {this.capitalizeFirstLetter(this.props.category)}</span></h1>
                {this.state.loading && <Spinner mode={this.props.mode}/>}
                <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResults}
          loader={<Spinner mode={this.props.mode}/>}
        >
                <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-3 ">
                {this.state.article.map((element)=>{ return <div className="col" key={element.url}>
                <NewsItem title = {element?element.title:""} description={element?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} mode={this.props.mode}/>
                </div>})}
                </div>
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between my-4">
                <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
                {/* </div> */}
            </>
        )
    }
}

export default News
