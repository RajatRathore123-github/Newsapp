import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";



export default class App extends Component {

apiKey = "bc302e674cf44422adca13c02dea1220"
  state = {
    progress : 0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress});
  }
  
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        
      />
      <Navbar/>
      <Routes>
        <Route path= "/" element ={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="general" pageSize = {5} country ="in" category = "general"/>}/>
        <Route path= "/business" element ={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="business" pageSize = {5} country ="in" category = "business"/>}/> 
        <Route path= "/entertainment" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="entertainment" pageSize = {5} country ="in" category = "entertainment"/>}/>
        <Route path= "/general" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="general" pageSize = {5} country ="in" category = "general"/>}/> 
        <Route path= "/health" element ={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="health" pageSize = {5} country ="in" category = "health"/>}/> 
        <Route path= "/science" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="science" pageSize = {5} country ="in" category = "science"/>}/>
        <Route path= "/technology" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="technology" pageSize = {5} country ="in" category = "technology"/>}/>    
      </Routes>
      </Router>
      </div>
    )
  }
}
