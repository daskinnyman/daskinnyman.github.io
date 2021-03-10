import * as React from "react";
import "../sass/_main.scss";
import Layout from "../components/layout";

import { graphql, Link } from "gatsby";

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { skill, name ,linkUrl } = frontmatter;

  const renderSkills = () => {
    return skill.split(",").map((skill, idx: number) => (
      <span key={idx} className="badge badge-info mr-1">
        {skill}
      </span>
    ));
  };

  return (
    <div className="Works">
      <div className="container">
        <article>
          <div className="row">
            <div className="col-12 mb-4">
              <section>
                <h1>{name}</h1>
                <div className="mb-3">{renderSkills()}</div>
                {linkUrl && (
                  <a className="btn btn-collapse" href={linkUrl}>
                    作品連結
                  </a>
                )}
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <section dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </article>
        <footer className="py-4">
          <Link to={"/"}>
            <button className="btn btn-collapse">回上頁</button>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        skill
        linkUrl
      }
    }
  }
`;
