import React from 'react';
import './Skils.css';

import Simage from "./Simage";

import ReactLogo from './logo/react-1.svg';
import JS from './logo/900px-JavaScript-logo.png';
import TS from './logo/typescript.png';
import SASS from "./logo/sass.png";
import GraphQL from "./logo/graphql.png";
import Nuxt   from "./logo/nuxt.svg";
import CSS from './logo/css.png';
import Html from './logo/html-5.png';
import NodeJS from './logo/icons8-nodejs-500.png';
import JAVA from './logo/java.png';
import Vue  from  "./logo/vue-logo.png";

import Docker from "./logo/docker.png";
import Git from "./logo/git.png";
import GCP from "./logo/GCP.png";



const Skils = () => (


  <div className="Skill" id="s">
    <h1 className="Skill_Heeding"> Skils </h1>
    <div className="Skill_Content">

      <h2 className="Skill_Title">publishing</h2>
      <span className="Skill_Content">
        <div className="SKill_box">
          <Simage url={JS} familiar="familiar"></Simage>
          <Simage url={Html} familiar="familiar"></Simage>
          <Simage url={CSS} familiar="familiar"></Simage> 
        </div>
      </span>

      <h2 className="Skill_Title"> Front-end</h2>
      <span className="Skill_Content">
        <div className="SKill_box">
          <Simage url={JS} familiar="familiar"></Simage>
          <Simage url={Html} familiar="familiar"></Simage>
          <Simage url={CSS} familiar="familiar"></Simage>
          <Simage url={Vue} familiar="familiar"></Simage>
          <Simage url={ReactLogo} familiar="tried"></Simage> 
          <Simage url={TS} familiar="tried"></Simage> 
          <Simage url={SASS} familiar="tried"></Simage> 
          <Simage url={Nuxt} familiar="tried"></Simage>           
        </div>
      </span>
      
      <h2 className="Skill_Title">Back-end</h2>
      <span className="Skill_Content">
        <Simage url={JAVA} familiar="tried"></Simage> 
        <Simage url={NodeJS} familiar="tried"></Simage> 
        <Simage url={GraphQL} familiar="tried"></Simage> 
      </span>

      <h2 className="Skill_Title">etc</h2>
      <span className="Skill_Content">
        <Simage url={Git} familiar="familiar"></Simage> 
        <Simage url={Docker} familiar="tried"></Simage> 
        <Simage url={GCP} familiar="tried"></Simage> 

      </span>
    </div>
  </div>
);


export default Skils;