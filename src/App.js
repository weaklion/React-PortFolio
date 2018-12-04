import React, { Component } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="HomepageLayout">
     <Header/>
     <Home text="Developer 이규한의 포트폴리오 입니다."/>
     <About/>
     <Project/>
     <Contact/>
      </div>
    );
  }
}

export default App;
