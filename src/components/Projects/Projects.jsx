import React from "react";
import "./Projects.scss";
import Works from "./Works";
const Projects = () => {
  return (
    <section className="work-section" id="projects">
      <h2 className="section-title">Projets</h2>
      <span className="section-subtitle">
        Parce-que <b>quelques images</b> valent mieux que <b>10 000 lignes de code</b>, je
        vous laisse découvrir ci-dessous quelques <b>projets</b> que j'ai pu réaliser !
      </span>

      <Works />
    </section>
  );
};

export default Projects;
