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
        <div className="col-12">
          <h1 className="mb-md-5">Projects</h1>
        </div>
      </div>
      <div className="row">{renderList()}</div>
    </div>
  );
};

export default ProjectList;
