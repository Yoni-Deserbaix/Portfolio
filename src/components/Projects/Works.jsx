import React from "react";
import { projectsData } from "./DataProject";
import { projectsNav } from "./DataProject";
const Works = () => {
  return (
    <div className="work-filter">
      {projectsNav.map((item, index) => {
        return (
          <span className="work-item" key={index}>
            {item.name}
          </span>
        );
      })}
    </div>
  );
};

export default Works;
