import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar/Menu.js';
import Head from './head-section/Head.js';
import Services from './services/Services.js';
import Adress from './components/adress/Adress.js';
import Contact from './components/contact/Contact.js';
import Formc from './components/form/Formc.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Head />
        <Services />
        <Contact></Contact>
        <Formc></Formc>
       <Adress></Adress>
      </div>
    );
  }
}

export default App;
