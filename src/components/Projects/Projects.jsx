import React from "react";
import "./Projects.scss";
import Works from "./Works";
const Projects = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section-title">Projets</h2>
      <span className="section-subtitle">Les plus récents</span>

      <Works />
    </section>
  );
};

export default Projects;
