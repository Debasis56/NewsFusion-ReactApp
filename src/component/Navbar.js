import React, { Component } from 'react'

import {Link} from "react-router-dom";
export class Navbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
    render() {
        return (
            <div>
                <nav className={`navbar fixed-top navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
  <div className="container-fluid">
      <div style={{lineHeight:"20px"}}>
    <Link className="navbar-brand" to="/" style={{marginRight:"0"}}><strong>News<span style={{color:"red"}}>Fusion</span></strong></Link>
    <svg style={{marginBottom:"4.8px"}} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#FF5722" d="M32,15v28H10c-2.2,0-4-1.8-4-4V15H32z"></path><path fill="#FFCCBC" d="M14,5v34c0,2.2-1.8,4-4,4h29c2.2,0,4-1.8,4-4V5H14z"></path><g fill="#FF5722"><rect x="20" y="10" width="18" height="4"></rect><rect x="20" y="17" width="8" height="2"></rect><rect x="30" y="17" width="8" height="2"></rect><rect x="20" y="21" width="8" height="2"></rect><rect x="30" y="21" width="8" height="2"></rect><rect x="20" y="25" width="8" height="2"></rect><rect x="30" y="25" width="8" height="2"></rect><rect x="20" y="29" width="8" height="2"></rect><rect x="30" y="29" width="8" height="2"></rect><rect x="20" y="33" width="8" height="2"></rect><rect x="30" y="33" width="8" height="2"></rect><rect x="20" y="37" width="8" height="2"></rect><rect x="30" y="37" width="8" height="2"></rect></g></svg>
    
    
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/"><span style={{color: "red"}}>H</span>ome</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> */}

        <li className="nav-item">
          <Link className="nav-link" to="/business"><span style={{color:"red"}}>B</span>usiness</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment"><span style={{color:"red"}}>E</span>ntertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/general"><span style={{color:"red"}}>G</span>eneral</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health"><span style={{color:"red"}}>H</span>ealth</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science"><span style={{color:"red"}}>S</span>cience</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports"><span style={{color:"red"}}>S</span>ports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology"><span style={{color:"red"}}>T</span>echnology</Link>
        </li>
        
        
      </ul>
      {/* <div
            className={`custom-control custom-switch text-${
              this.props.mode === "light" ? "dark" : "light"
            } mx-5`}
          >
            <input
              type="checkbox"
              className="custom-control-input"
              onClick={()=>this.props.toggleMode()}
              id="customSwitch1"
            />
            <label className="custom-control-label" htmlFor="customSwitch1">
              Enable Dark Mode
            </label>
          </div>
 */}

          <div className={`form-check form-switch custom-switch text-${
              this.props.mode === "light" ? "success" : "info"
            }`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onClick={()=>this.props.toggleMode()}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{fontSize: "16px"}}>Enable Dark Mode</label>
</div>
      
    </div>
  </div>
</nav>
            </div>
        )
    }
}

export default Navbar
