import * as React from "react";
import ProjectItem from "./projectItem";

const projects = [
  {
    name: "Project Name",
    skill: "Project Skill",
  },
  {
    name: "Project Name",
    skill: "Project Skill",
  },
  {
    name: "Project Name",
    skill: "Project Skill",
  },
  {
    name: "Project Name",
    skill: "Project Skill",
  },
  {
    name: "Project Name",
    skill: "Project Skill",
  },
  {
    name: "Project Name",
    skill: "Project Skill",
  },
];

const ProjectList = ({projects}) => {
  const renderList = () => {
    return projects.map((project, idx) => (
      <ProjectItem key={idx} {...project} />
    ));
  };

  return (
    <div className="Work px-0 px-md-5">
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
