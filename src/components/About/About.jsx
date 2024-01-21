import "./About.scss";
import DownloadCV from "../../assets/Yoni Deserbaix CV 2024.pdf";
import abbout from "../../assets/about.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-img">
            <img src={abbout} className="about-img" alt="" />
          </div>
          <div className="about-text">
            <h3>A propos de moi</h3>

            <p>
              Je m'appelle Yoni, je suis un jeune développeur de 20 ans au parcours atypique, ayant
              évolué des environnements connectés à l'univers de la
              programmation, explorant ainsi les frontières créatives de
              l'informatique. Mon expertise en programmation et en
              administration de réseaux s'est forgée au fil de mes expériences.
              En tant qu'autodidacte déterminé, mon exploration du JavaScript
              associé à React a donné vie à des projets web stimulants. Ma
              passion pour le développement frontend et ma soif d'apprentissage
              me préparent à contribuer activement à des projets captivants.
              Explorez mon portfolio pour découvrir comment je peux apporter une
              perspective unique et des compétences solides à vos projets ! 
            </p>
            <a href={DownloadCV} className="DownloadCV">
              Download CV <i class="bx bxs-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
