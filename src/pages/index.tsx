import * as React from "react";
import "../sass/_main.scss";
import AboutMe from "../components/aboutMe";
import Layout from "../components/layout";
import ProjectList from "../components/projectList";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <AboutMe />
      <ProjectList projects={data.allMarkdownRemark.edges} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            date(formatString: "MMMM DD, YYYY")
            name
            skill
          }
        }
      }
    }
  }
`;

export default IndexPage;
