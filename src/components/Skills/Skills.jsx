import "./Skills.scss";
import { skillsData } from "./DataSkills";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h3
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="300"
        >
          COMPÉTENCES
        </h3>
      </div>
      <div className="skills-container">
        <div className="skills-category">
          <h5
            className="category-title"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="300"
          >
            FRONTEND
          </h5>
          <div className="skills-list">
            {skillsData
              .filter((language) => language.category === "Frontend")
              .map((language, index) => (
                <div
                  className="skill"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay={index * 100}
                >
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
                <div
                  className="skill"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay={index * 100}
                >
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
          <h5
            className="category-title"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="300"
          >
            OUTILS
          </h5>
          <div className="skills-list">
            {skillsData
              .filter((language) => language.category === "Tools")
              .map((language, index) => (
                <div
                  className="skill"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay={index * 100}
                >
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
