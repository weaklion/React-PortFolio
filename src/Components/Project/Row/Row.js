import React from 'react';
import sia from './image/1.png';
import github from './image/github-logo.svg';
import  './Row.css';
import smartmirror  from './image/smartmirror.png';
import Docswave     from "./image/Docswave.png";
import DApplication from "./image/Docswave2.png"; 
import Homepage     from "./image/homepage.png";

const Row = () => (

  <div className="Row">

    <div className="Box">
      <div className="Box_image">
        <a href="https://docswave.com/ko"> <img src={DApplication} alt="docswave" className="image"></img></a>
      </div>
      <div className="Box_info">
        <h1 className="Box_title">Docswave</h1>
        <p className="company">근무처 : 소프트웨어인라이프</p>
        <p className="name">개발기간 :2019.10.20 ~ </p>
        <p className="Box_content">
        
          Docswave Application의 프론트엔드 컴포넌트 개발.<br/>
          인사 페이지 개발 및 유지보수.
        </p>
        <ul className="Box_ul">   
          <li className="Box_li" >#Vue.js </li>  
          <li className="Box_li">#Bulma Framework</li>  
          <li className="Box_li">#monorepo</li>
        </ul>
        <ul className="Box_ul">
          <li className="Box_li">
          <a href="https://docswave.com/ko" alt="homepage"> <img src={Homepage} alt="homepage" className="icon_image"/></a>
          </li>
        </ul>
      </div>
    </div>

    <div className="Box">
      <div className="Box_image">
        <a href="https://docswave.com/ko"> <img src={Docswave} alt="docswave" className="image"></img></a>
      </div>
      <div className="Box_info">
        <h1 className="Box_title">Docswave 홈페이지</h1>
        <p className="company">근무처 : 소프트웨어인라이프</p>
        <p className="name">개발기간 :2019.08.10~ 2019.10.10</p>
        <p className="Box_content">
          Docswave 홈페이지 페이지 추가 및 CSS 개선
        </p>
        <ul className="Box_ul">   
          <li className="Box_li" >#Javascript </li>  
          <li className="Box_li">#CSS</li>  
        </ul>
        <ul className="Box_ul">
          <li className="Box_li">
          <a href="https://docswave.com/ko" alt="homepage"> <img src={Homepage} alt="homepage" className="icon_image"/></a>
          </li>
        </ul>
      </div>
    </div>


    <div className="Box">
      <div className="Box_image">
        <a href="https://github.com/weaklion/React-spa"> <img src={sia} alt="sia" className="image"></img></a>
      </div>
      <div className="Box_info">
        <h1 className="Box_title">Sia fansite</h1>
        <h2 className="name">개발기간 :2018.08.10~ 2018.11.30</h2>
        <p className="Box_content">React + Redux + Node.js(Koa) + MongoDB를 이용하여<br/>
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
       <a href="https://github.com/weaklion/Jarvis_Mirror"> <img src={smartmirror} alt="smartMirror" className="image"></img> </a>
      </div>
      <div className="Box_info">
      <h1 className="Box_title">Jarvis Mirror</h1>
     
      <h2 className="name">개발기간 :2018.03.10~2018.06.09</h2>
      <p className="Box_content">음성 인식을 이용하여 거울의 기능과<br/>
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
      <a href="https://github.com/weaklion/Jarvis_Mirror" alt="github"> <img src={github} alt="github" className="icon_image"/></a>
       </li>
      </ul>
            </div>
            </div>
    </div>
);


export default Row;