import "./Skills.scss";
import { skillsData } from "./DataSkills";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h3 className="section-title">COMPÉTENCES</h3>
      </div>
      <div className="skills-container">
        <div className="skills-category">
          <h5 className="category-title">FRONTEND</h5>
          <div className="skills-list">
            {skillsData
              .filter((language) => language.category === "Frontend")
              .map((language, index) => (
                <div className="skill" key={index}>
                  <img
                    className="skill-icon"
                    src={language.image}
                    alt={`${language.name}`}
                  />
                  <p className="skill-name">{language.name}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="skills-category">
          <h5 className="category-title">BACKEND</h5>
          <div className="skills-list">
            {skillsData
              .filter((language) => language.category === "Backend")
              .map((language, index) => (
                <div className="skill" key={index}>
                  <img
                    className="skill-icon"
                    src={language.image}
                    alt={`${language.name}`}
                  />
                  <p className="skill-name">{language.name}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="skills-category">
          <h5 className="category-title">OUTILS</h5>
          <div className="skills-list">
            {skillsData
              .filter((language) => language.category === "Tools")
              .map((language, index) => (
                <div className="skill" key={index}>
                  <img
                    className="skill-icon"
                    src={language.image}
                    alt={`${language.name}`}
                  />
                  <p className="skill-name">{language.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
