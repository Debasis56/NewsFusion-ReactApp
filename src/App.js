
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 12;
  apiKey = process.env.REACT_APP_NEWS_API;
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  constructor() {
    super()
  
    this.state = {
       mode: 'light',
       progress: 0
    }
  }
  
     toggleMode = ()=>{
     if(this.state.mode === 'light')
     {
     this.setState({mode: 'dark'});
     document.body.style.backgroundColor = 'rgb(22,22,29)';
     //showAlert(" Dark Mode has been enabled", "success", "SUCCESS");
     }
     else
     {
      this.setState({mode: 'light'});
     document.body.style.backgroundColor = 'white';
     //showAlert(" Light Mode has been enabled", "success", "SUCCESS")
     }
  }
   
  render() {
    return (
      <div>
        
        <Router>
      
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        /*onLoaderFinished={() => setProgress(0)}*/
        />
        <Switch>
        <Route exact path="/">
        <News setProgress = {this.setProgress} mode={this.state.mode} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>
        </Route>
        <Route exact path="/business"><News setProgress = {this.setProgress} mode={this.state.mode} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/> </Route>
        <Route exact path="/entertainment"><News setProgress = {this.setProgress} mode={this.state.mode} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/> </Route>
        <Route exact path="/general"><News setProgress = {this.setProgress} mode={this.state.mode} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/> </Route>
        <Route exact path="/health"><News setProgress = {this.setProgress} mode={this.state.mode} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/> </Route>
        <Route exact path="/science"><News setProgress = {this.setProgress} mode={this.state.mode} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/> </Route>
        <Route exact path="/sports"><News setProgress = {this.setProgress} mode={this.state.mode} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/> </Route>
        <Route exact path="/technology"><News setProgress = {this.setProgress} mode={this.state.mode} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/> </Route>
        
        </Switch>
        </Router>
      </div>
    )
  }
}



// Alternate solution :
// 1). Uninstall Previous Version-
// npm uninstall react-router-dom
// 2). Install Older version-
// npm install react-router-dom@5.2.0