import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlertList from './alertList'

class App extends Component {
  getAlerts(){
    return [
      {name: 'Hawaii being bombed', description: 'oops'},
      {name: 'Tokyo being bombed', description: 'oops again'}
    ]
  } 
  
  render() {
    return (
      <div className="App">
        <AlertList alerts={this.getAlerts()}/>
      </div>
    );
  }
}

export default App;
