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
          <h1>노력하는 사람</h1>
          <section className="about_me_section">
            <p>
              어릴때 부터 호기심이 많은 성격에 만들어 보았던 간단한 계산기 프로그램으로
              무언가를 만드는 것의 재미를 느끼게 되었고 그때부터 개발자를 꿈꾸게 되었습니다.<br/>
              계속해서 완성도 높은 코드, 그리고 완성도 높은 UI를  위해 매일 고뇌하는 사람이 되도록 하겠습니다.<br/>
              잘부탁드립니다.
            </p>
          </section>
        </div>
      </div>
    );
  }
}


export default About;