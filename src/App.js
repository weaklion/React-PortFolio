import React, { Component } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Skills from './Components/Skils';
import './App.css';

class App extends Component {
  componentDidMount(){
   
  }

  render() {
    return (
      <div className="HomepageLayout">
      <Header />
       <Home/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
    
      </div>
   
    );
  }
}

export default App;
