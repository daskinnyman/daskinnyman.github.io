import * as React from "react";
import { Link } from "gatsby";

const ProjectItem = ({ node }) => {
  const { skill, slug, name, thumb,date } = node.frontmatter;

  const renderSkills = () => {
    return skill.split(",").map((skill, idx: number) => (
      <span key={idx} className="badge badge-info mr-1">
        {skill}
      </span>
    ));
  };

  return (
    <div className="col-12 col-md-4 mb-3">
      <Link className="text-decoration-none" to={slug}>
        <div className="card">
          <img
            src={thumb}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {renderSkills()}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
