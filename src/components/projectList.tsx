import * as React from "react";
import { RefContext } from "./layout";
import ProjectItem from "./projectItem";

const ProjectList = ({ projects }) => {
  const refContext = React.useContext(RefContext);

  const renderList = () => {
    return projects.map((project, idx) => (
      <ProjectItem key={idx} {...project} />
    ));
  };

  return (
    <div ref={refContext.PROJECT} className="Work px-0 px-md-5">
      <div className="row">
        <div className="col-8 col-md-10">
          <h1 className="mb-md-5">Projects</h1>
        </div>
        <div className="col-4 col-md-2 d-flex align-items-center justify-content-end">
          <button className="btn btn-secondary">filters</button>
        </div>
      </div>
      <div className="row">{renderList()}</div>
    </div>
  );
};

export default ProjectList;
