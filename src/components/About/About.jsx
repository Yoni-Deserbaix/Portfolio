import "./About.scss";
import DownloadCV from "../../assets/Yoni Deserbaix CV 2024.pdf";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-img">
            <img
              src="https://i.ibb.co/2KN4TFz/working.png"
              className="about-img"
              alt=""
            />
          </div>
          <div className="about-text">
            <h3>A propos de moi</h3>

            <p>
              Passionné d'innovation informatique, j'ai tracé un parcours
              atypique, passant des environnements connectés à la programmation,
              explorant les frontières créatives de l'informatique. Actuellement
              en 2ème année de BTS Systèmes Numériques, spécialité Informatiques
              et Réseaux, j'ai forgé des bases solides en programmation et en
              administration de réseaux. En autodidacte déterminé, mon
              exploration du JavaScript, associé à React, a donné vie à des
              projets web stimulants. Ma volonté d'apprendre et ma passion pour
              le développement front-end m'animent, me préparant à contribuer
              activement à des projets captivants.< br/>Naviguez à travers mon portfolio pour découvrir comment
              je peux apporter une perspective unique et des compétences solides
              à vos projets !
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
