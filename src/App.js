import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Post from './Post'
import User from './user'
import Comments from './comments'

import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : []
    }
  }

 
  render() {
    return (
      <div className="App">
        <Router>
        <Route exact path={"/"} render ={()=><User/>}/>
        
        
        <Switch>
        <Route path= '/Posts/:id' render={(props)=><Post id={props.match.params.id}/>}/>

        <Route path ='/Comments/:postId' render={(props)=><Comments postId={props.match.params.postId} id={props.match.params.userId}/>}/>
        </Switch>
        </Router>
      </div>);
  }
}

export default App;


