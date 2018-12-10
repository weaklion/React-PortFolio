import React from 'react';
import sia from './image/1.png';
import github from './image/github-logo.svg';
import  './Row.css';
import virtual from './image/virtual.png';
import smartmirror from './image/smartmirror.png';

const Row = () => (
  <div className="Row">
    <div className="Box">
      <div className="Box_image">
      <a href="https://github.com/weaklion/React-spa"> <img src={sia} alt="sia" className="image"></img></a>
      </div>
      <div className="Box_info">
      <h1 className="Box_title">Sia fansite</h1>
     
      <h2 className="name">개발기간 :2018.08.10~ 2018.11.30</h2>
      <p className="Box_content">React + Redux + Node.js(Koa) + MongoDB를 이용하여
         로그인 기능이 구현된 간단한 SPA 팬사이트.
      </p>
      <ul className="Box_ul">   
      <li  className="Box_li">#React</li>  
       <li className="Box_li">#Redux</li>  
       <li className="Box_li">#Node.js(Koa)</li>
       <li className="Box_li">#MongoDB</li> 
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
      <a href="https://github.com/weaklion/React-spa" alt="github"> <img src={github} alt="github" className="icon_image"/></a>
       </li>
      </ul>
            </div>
    </div>

     <div className="Box">
      <div className="Box_image">
      <a href="https://github.com/weaklion/PortFolio"> <img src={virtual} alt="Virtual" className="image"></img></a>
      </div>
      <div className="Box_info">
      <h1 className="Box_title">Virtual Travel Project</h1>

      <h2 className="name">개발기간 :2018.05.26~2018.07.09</h2>
      <p className="Box_content">Android Studio와 Google Map API를 이용하여
       선택하거나 임의의 곳의 StreetView를 볼 수 있는 앱.
      </p>
      <ul className="Box_ul">   
      <li  className="Box_li">#Java</li>  
       <li className="Box_li">#GoogleAPI</li>  
       <li className="Box_li">#Android</li>
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
      <a href="https://github.com/weaklion/PortFolio" alt="github"> <img src={github} alt="github" className="icon_image"/></a>
       </li>
      </ul>
            </div>
    </div>
    <div className="Box">
       <div className="Box_image">
       <a href="https://github.com/weaklion/PortFolio"> <img src={smartmirror} alt="smartMirror" className="image"></img> </a>
      </div>
      <div className="Box_info">
      <h1 className="Box_title">Jarvis Mirror</h1>
     
      <h2 className="name">개발기간 :2018.03.10~2018.6.09</h2>
      <p className="Box_content">음성 인식을 이용하여 거울의 기능과
      캘린더,온습도,뉴스,날씨를 확인할수 있는 스마트 거울 
      </p>
      <ul className="Box_ul">   
      <li  className="Box_li">#JavaScript</li>  
       <li className="Box_li">#Raspberry Pi</li>  
       <li className="Box_li">#Node.js</li>
       <li  className="Box_li">#Electron</li> 
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
      <a href="https://github.com/weaklion/PortFolio" alt="github"> <img src={github} alt="github" className="icon_image"/></a>
       </li>
      </ul>
            </div>
            </div>
    </div>
);


export default Row;