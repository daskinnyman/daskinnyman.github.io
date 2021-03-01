import * as React from "react";
import Fade from "react-reveal/Fade";

const AboutMe = () => {
  return (
    <article className="About px-0 px-md-5">
      <Fade top>
        <div>
          <h1>About me</h1>
          <pre>
            Hi, 我是 Alex! <br />
            我擁有三年開發經驗， <br className="d-lg-none" />
            目前於HP擔任Software engineer，
            <br />
            負責網站的開發及UI/UX設計，
            <br className="d-lg-none" />
            是兼具開發和設計能力的網站工程師。
            <br />
            除了工作以外，
            <br className="d-lg-none" />
            也會利用side project精進自己的專業技能，
            <br />
            以下是我工作及side project的作品！
          </pre>
        </div>
      </Fade>
    </article>
  );
};

export default AboutMe;
