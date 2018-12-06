import React,{Component} from 'react';
import  './Home.css';
class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      text:""
    }
  };

  componentDidMount() {
    let i =0;

    const typing = setInterval(() =>{
      const typed = this.state.text;
      const finalText= "Developer 이규한의 포트폴리오입니다";

      if(i<finalText.length) { 
        this.setState ({
          text: typed + finalText[i]
        });
        i++

      } else {
        clearInterval(typing);
      }
    },178);
  }

  render(){
    return (
  <div className="typer" id="h">
   <h1 className="typer-text">{this.state.text}</h1>
  </div>
);
}
}

export default Home;