import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './user.js';


const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  render() {
    const user = new User("Francisc", "PC");
    const helloWorld = "Welcome to the Road to learn React";
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h2>{user.fullName()}</h2>

        {
          list.map(item => {
            return(
              <ul>
                { 
                  Object.keys(item).map((key) => {
                    return <li>{key + ": " + item[key]}</li>
                  })
                }
              </ul>
            );
          })
        }

      </div>
    );
  }
}

export default App;