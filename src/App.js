import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './user.js';

class App extends Component {
  render() {
    const user = new User("Francisco", "PC");
    const helloWorld = "Welcome to the Road to learn React";
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h2>{user.fullName()}</h2>
      </div>
    );
  }
}

export default App;
