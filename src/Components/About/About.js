import React, { Component } from 'react';
import  './About.css';

class About extends Component {

  render() {
    return (
   
      <div className="about_me">
   <div className="about_me_title">
       <h1 className="hedding">About Me</h1>
       
   </div>
   <div className="about_me_content">
   <h1>잘하는 개발자</h1>
   <section className="about_me_section">
      <p>어릴때 부터 호기심이 많은 성격에 만들어 보았던 간단한 계산기 프로그램으로
           무언가를 만드는 것의 재미를 느끼게 되었고 그때부터 개발자를 꿈꾸게 되었습니다.
           그래서 대학교도 컴퓨터공학과를 가게 되었고 자연스럽게 많은것을 개발하게 될 수 있었습니다.
           그 중 Javascript가 가지고 있는 가능성과 다양성에 매력을 느끼게 되어 
           웹 어플리케이션 개발자가 되기 위해 많은 노력을 하고 있습니다.
           </p>

          <p> 저는 제 목표를 '잘하는' 개발자로 삼아서 더 공부하고 있습니다.
           경력을 쌓은 개발자는 경력만 쌓이면 자연스럽게 되지만 
           '잘하는'개발자는 경력뿐만 아니라 매일 공부하여 개발자로써 더 높은 곳을
           바라보고 있기 때문입니다 .
           저는 계속 공부하여 '잘하는'개발자로써 남고 싶습니다.
           </p>
        </section>
   </div>
   </div>
 
    );
  }
}


export default About;