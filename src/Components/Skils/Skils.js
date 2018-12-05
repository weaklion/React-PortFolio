import React from 'react';
import './Skils.css';
import Python from './logo/600px-Python-logo-notext.svg.png';
import Kotlin from './logo/768px-Kotlin-logo.svg.png';
import react from './logo/react-1.svg';
import JS from './logo/900px-JavaScript-logo.png';
import Android from './logo/android.png';
import CPP from './logo/cpppp-490x490.png';
import jquery from './logo/iconfinder_JQuery_logo_282806.png';
import css from './logo/css.png';
import firebase from './logo/firebase_logo.png';
import github from './logo/github-logo.png';
import html from './logo/html-5.png';
import C from './logo/icons8-c-programming-500.png';
import nodejs from './logo/icons8-nodejs-500.png';
import java from './logo/java.png';
import mongodb from './logo/mongodb-logo-1.png';
import mysql from './logo/mysql.png';
import Redux from './logo/Redux.png';
import Linux from './logo/Tux.png';
import Window_logo from './logo/Windows-Logo.png';


const Skils = () => (


  <div className="Skill">
    <h1 className="Skill_Heeding"> Skils </h1>
    <div className="Skill_Content">
    <h2 className="Skill_Title"> Launage</h2>
    <span className="Skill_Content">
    <div className="SKill_box">
    <div className="Skill_image_container" style={{backgroundImage: `url(${C})`}}><div className="Skill_label">Basic</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${CPP})`}}><div className="Skill_label">Basic</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${java})`}}><div className="Skill_label">Intermediated</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${JS})`}}><div className="Skill_label">Intermediated</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${Python})`}}><div className="Skill_label">Basic</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${Android})`}}><div className="Skill_label">Intermediated</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${Kotlin})`}}><div className="Skill_label">Basic</div></div>
     </div>
    </span>
     <h2 className="Skill_Title"> Web Skils</h2>
    <span className="Skill_Content">
    <div className="Skill_image_container" style={{backgroundImage: `url(${html})`}}><div className="Skill_label">Intermediated</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${css})`}}><div className="Skill_label">Intermediated</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${JS})`}}><div className="Skill_label">Intermediated</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${jquery})`}}><div className="Skill_label">Basic</div></div>
    
    </span>
    <h2 className="Skill_Title">FrameWork</h2>
    <span className="Skill_Content">
    <div className="Skill_image_container" style={{backgroundImage: `url(${react})`}}><div className="Skill_label">Intermediated</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${nodejs})`}}><div className="Skill_label">Intermediated</div></div>
    </span>

    <h2 className="Skill_Title">DataBase</h2>
    <span className="Skill_Content">
    <div className="Skill_image_container" style={{backgroundImage: `url(${mysql})`}}><div className="Skill_label">Intermediated</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${mongodb})`}}><div className="Skill_label">Intermediated</div></div>
    </span>
    
    
    <h2 className="Skill_Title">Operating System</h2>
    <span className="Skill_Content">
    <div className="Skill_image_container" style={{backgroundImage: `url(${Window_logo})`}}><div className="Skill_label">Expert</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${Linux})`}}><div className="Skill_label">Intermediated</div></div>
    </span>
    
    <h2 className="Skill_Title">Etc</h2>
    <span className="Skill_Content">
    <div className="Skill_image_container" style={{backgroundImage: `url(${github})`}}><div className="Skill_label">Intermediated</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${firebase})`}}><div className="Skill_label">Basic</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${Redux})`}}><div className="Skill_label">Intermediated</div></div>
    </span>
    </div>
  </div>
);


export default Skils;