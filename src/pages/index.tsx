import * as React from "react";
import Layout from "../components/layout";
import "../sass/_main.scss";
// styles
const pageStyles = {
  color: "#232129",
  paddingTop: "96px",
};

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className="About px-5">
        <h1>About me</h1>
        <pre>
          Hi, 我是 Alex! <br />
          我擁有三年開發經驗，目前於HP擔任Software engineer，
          <br/>
          負責網站的開發及UI/UX設計，是一個開發和設計能力兼具的網站工程師。
          <br />
          平時除了工作以外也喜歡做作side project來精進自己的專業技能，
          <br />
          以下是我工作及side project的作品！
        </pre>
      </div>
      <div className="About px-5">
        <h1>About me</h1>
        <pre>
          Hi, 我是 Alex! <br />
          我擁有三年開發經驗，目前於HP擔任Software engineer，
          <br/>
          負責網站的開發及UI/UX設計，是一個開發和設計能力兼具的網站工程師。
          <br />
          平時除了工作以外也喜歡做作side project來精進自己的專業技能，
          <br />
          以下是我工作及side project的作品！
        </pre>
      </div>
    </Layout>
  );
};

export default IndexPage;
