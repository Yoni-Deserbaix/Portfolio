import "./Projects.scss";
import Works from "./Works";
const Projects = () => {
  return (
    <section className="work-section" id="projects">
      <h2 className="section-title" data-aos="fade-up" data-aos-duration="300">
        Projets
      </h2>
        <div className="subtitle"  data-aos="fade-up"  data-aos-delay="500"
        data-aos-duration="300">
      <span className="section-subtitle">
       
        Parce-que <b>quelques images</b> valent mieux que{" "}
        <b>10 000 lignes de code</b>, je vous laisse découvrir ci-dessous
        quelques{""}<b>projets</b> que j'ai pu réaliser !
      </span>
        </div>

      <Works />
    </section>
  );
};

export default Projects;
