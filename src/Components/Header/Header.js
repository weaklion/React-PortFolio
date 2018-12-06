import React,{Component} from 'react';
import './Header.css';

class Header extends Component {
  _isMounted=false; 
  constructor(props) {
    super(props);
    this.state = { width: 0,
       height: 0,
        desktop : true,
      showMenu:false};
      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  showMenu(event){
    event.preventDefault();
    if(this._isMounted){
      this.setState({
        showMenu:true
      }, () =>{
        document.addEventListener('click',this.closeMenu);
      })
    }
  }

  closeMenu() {
    if(this._isMounted){
      this.setState({
        showMenu:false
      }, () => {
        document.removeEventListener('click',this.closeMenu);
      });
    }
  }
  
  componentDidMount() {
    this._isMounted=true;
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    this._isMounted=false;
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if(window.innerWidth<1040){
      this.setState({
        desktop:false
      })
    } else {
      this.setState({
        desktop:true
      })
    }
  }
  render(){
return(
  
    
  <div className="header-class">
  {
    this.state.desktop ?(
      <div>
  <div className="header-text">
   <ul >
     <li  className="header-li" onClick={() => {
        document.getElementById('c').scrollIntoView();
     }}>
    Contact
     </li >
     <li   className="header-li"  onClick={() => {
        document.getElementById('p').scrollIntoView();
     }}>
       Project
     </li>
     <li    className="header-li" onClick={() => {
        document.getElementById('s').scrollIntoView();
     }}>
       Skills
     </li>
     <li    className="header-li" onClick={() => {
        document.getElementById('a').scrollIntoView();
     }}>
       About
     </li>
     <li   className="header-li" onClick={() => {
        document.getElementById('h').scrollIntoView();
     }}>
       Home
     </li>
   </ul>
   </div> 
   <div className="blank_white">  
    </div> 
    </div>) : 
    (
     <div className="bar_menu_container">
      <div className={this.state.showMenu ? 'bar_close' : 'bar_open'} onClick={this.showMenu}>
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
     
      </div>
      {
        this.state.showMenu ? (

          <ul className="bar_menu">

     <li className="bar_li"  onClick={() => {
        document.getElementById('h').scrollIntoView();
     }}>
       Home
     </li>
     <li className="bar_li"  onClick={() => {
        document.getElementById('a').scrollIntoView();
     }}>
       About
     </li>
     <li className="bar_li"  onClick={() => {
        document.getElementById('s').scrollIntoView();
     }}>
       Skills
     </li>
     <li className="bar_li"  onClick={() => {
        document.getElementById('p').scrollIntoView();
     }}>
       Project
     </li>
     <li className="bar_li" onClick={() => {
        document.getElementById('c').scrollIntoView();
     }}>
    Contact
     </li >
   </ul>
        ) : (null)
      }
      </div>
    )
  }
  </div>
)
  };
    };


export default Header;