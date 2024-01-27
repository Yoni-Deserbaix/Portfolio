import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <section className="skills-section" id="skills">
          <h2 className="skills-title" data-aos="fade-up"  data-aos-duration="300">Compétences</h2>
        <div className="skills-content">
          <div className="skills-box" data-aos="fade-up" data-aos-delay="300" data-aos-duration="300">
            <h1>Frontend</h1>
            <p>
              Maîtrise des langages de développement web tels que <b>HTML</b>,{" "}
              <b>CSS</b>, et
              <b> JavaScript</b>. Expérience approfondie avec des bibliothèques
              et frameworks tels que <b>React</b>. Conception et développement
              d'interfaces utilisateur interactives et réactives.
            </p>
          </div>
          <div className="skills-box" data-aos="fade-up" data-aos-delay="400" data-aos-duration="300">
            <h1>Backend</h1>
            <p>
              Connaissance des technologies backend telles que <b>Node.js</b> et
              <b> Express</b>. Gestion de base de données avec <b>SQL</b>.{" "}
              <b>PHP</b> pour le développement côté serveur. Connaissance
              approfondie en <b>C++</b> avec expertise dans la gestion de
              threads, programmation orientée objet, programmation réseau
              (client/serveur), allocation mémoire.
            </p>
          </div>
          <div className="skills-box" data-aos="fade-up" data-aos-delay="500" data-aos-duration="300">
            <h1>Outils</h1>
            <p>
              Utilisation d'outils de développement tels que <b>Git</b>,{" "}
              <b>VSCode</b>, et
              <b> QtCreator</b>. Maîtrise des outils de gestion de projet tels
              que <b>Trello</b>. Expérience avec le système d'exploitation{" "}
              <b>Linux</b>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
