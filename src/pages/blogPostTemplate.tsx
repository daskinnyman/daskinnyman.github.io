import * as React from "react";
import "../sass/_main.scss";
import Layout from "../components/layout";

import { graphql } from "gatsby";

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  console.log(html);
  return (
    <Layout>
      <h1>{frontmatter.name}</h1>
      <h2>{frontmatter.skill}</h2>
      <h2>{frontmatter.linkUrl}</h2>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        name
        skill
        linkUrl
      }
    }
  }
`;
