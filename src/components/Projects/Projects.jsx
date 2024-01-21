import React from "react";
import "./Projects.scss";
import Works from "./Works";
const Projects = () => {
  return (
    <section className="work-section" id="projects">
      <h2 className="section-title">Projets</h2>
      <span className="section-subtitle">
        Parce-que quelques images valent mieux que 10 000 lignes de code, je
        vous laisse découvrir ci-dessous quelques projets que j'ai pu réaliser !
      </span>

      <Works />
    </section>
  );
};

export default Projects;
