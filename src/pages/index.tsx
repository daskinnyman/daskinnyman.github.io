import * as React from "react";
import "../sass/_main.scss";
import AboutMe from "../components/aboutMe";
import Layout from "../components/layout";
import ProjectList from "../components/projectList";

const IndexPage = () => {
  return (
    <Layout>
      <AboutMe />
      <ProjectList />
    </Layout>
  );
};

export default IndexPage;
