import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imgUrl, newsUrl, author, date, source, mode} = this.props;
        return (
            <div>
                <div className={`card text-${mode==="light"?"dark":"white"} bg-${mode==="light"?"light":"dark"} my-2`}>

                  <div>
                      <span className= "badge rounded-pill bg-danger" style={{display:"flex", justifyContent:"flex-end", position:"absolute", right:"0", opacity: "0.8"}}>
                          {source}
                        </span>
                  </div>
                
                
  <img src={imgUrl?imgUrl:"https://s.w-x.co/in-covid-2_0.jpg"} className="card-img-top" alt="..."/>
 
  <div className="card-body">
    <h5 className="card-title">{title}
    </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className={`text-${mode==="light"?"dark":"muted"}`} style={{fontWeight:"600"}}>By {author ? author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm btn-${mode==="light"?"dark":"light"}`} style={{color: mode==="light"? "whitesmoke":"black", fontWeight:"625"}}>Read More...</a>
  </div>
</div>

</div>
            
        )
    }
}

export default NewsItem
