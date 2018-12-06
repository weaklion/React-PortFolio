import React,{Component} from 'react';
import './Header.css';

class Header extends Component {
  
  render(){

  
return(

  <div className="header-class">
  <div className="header-text">
   <ul >
     <li onClick={() => {
        document.getElementById('c').scrollIntoView();
     }}>
    Contact
     </li >
     <li onClick={() => {
        document.getElementById('p').scrollIntoView();
     }}>
       Project
     </li>
     <li onClick={() => {
        document.getElementById('s').scrollIntoView();
     }}>
       Skills
     </li>
     <li onClick={() => {
        document.getElementById('a').scrollIntoView();
     }}>
       About
     </li>
     <li onClick={() => {
        document.getElementById('h').scrollIntoView();
     }}>
       Home
     </li>
   </ul>
   </div>
   <div className="blank_white">
        
        </div>
  </div>

)
  };
    };


export default Header;