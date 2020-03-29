import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import SimpleTween from "./components/simple-tween.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="container">
        <SimpleTween />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));