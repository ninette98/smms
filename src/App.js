import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar/Menu.js';
import Head from './head-section/Head.js';
import Services from './services/Services.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Head />
        <Services />
      </div>
    );
  }
}

export default App;
