import React, { Component } from 'react';
import  './About.css';

class About extends Component {

  render() {
    return (
      <div className="about_me" id="a" >
        <div className="about_me_title">
          <h1 className="hedding">About Me</h1>
        </div>
        <div className="about_me_content">
          <h1>잘하는 개발자</h1>
          <section className="about_me_section">
            <p>
              어릴때 부터 호기심이 많은 성격에 만들어 보았던 간단한 계산기 프로그램으로
              무언가를 만드는 것의 재미를 느끼게 되었고 그때부터 개발자를 꿈꾸게 되었습니다.
              그래서 대학교도 컴퓨터공학과를 가게 되었고 자연스럽게 많은것을 개발하게 될 수 있었습니다.<br></br>

              그 중 Javascript가 가지고 있는 가능성과 다양성에 매력을 느끼게 되어 
              프론트엔드 개발자 2년차를 향해 달려가고 있습니다.
              계속해서 완성도 높은 개발을 위해 매일 고뇌하는 개발자가 되도록 하겠습니다.
              잘부탁드립니다.
            </p>
          </section>
        </div>
      </div>
    );
  }
}


export default About;