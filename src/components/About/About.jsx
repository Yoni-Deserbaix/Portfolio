import "./About.scss";
import DownloadCV from "../../assets/Yoni Deserbaix CV 2024.pdf";
import aboutPhoto from "../../assets/about.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-img">
            <img src={aboutPhoto} className="about-img" alt="" />
          </div>
          <div className="about-text">
            <h3>A propos de moi</h3>

            <p>
              Hello 👋! je m'appelle <b>Yoni</b>, je suis un jeune
              <b> développeur de 20 ans</b> au parcours atypique, ayant évolué
              dans l'électricité et des environnements connectés à l'univers de
              la <b>programmation</b>, explorant ainsi les frontières créatives
              de l'<b>informatique</b>. Mon expertise en <b>programmation</b> et
              en <b>administration de réseaux</b> s'est forgée au fil de mes
              expériences. En tant qu'<b>autodidacte déterminé</b>, mon
              exploration du <b>JavaScript</b> associé à <b>React</b> a donné
              vie à des projets web <b>créatifs</b> et <b>innovants</b>. Ma
              passion pour le <b>développement Frontend</b> et ma soif
              d'apprentissage me préparent à <b>contribuer activement</b> à des projets
              captivants. <br />
              <br />
              Explorez mon portfolio pour découvrir comment je peux apporter une
              perspective unique et des compétences solides à{" "}
              <b>vos projets</b>😊!
            </p>
            {/* <p>
            Hello 👋! Je m'appelle <b>Yoni</b>, un <b>développeur de 20 ans</b> au parcours
              atypique, de l'électricité et des environnements connectés à la <b>programmation</b> et l'
              <b>administration de réseaux</b>. Autodidacte déterminé,  mon
              exploration du <b>JavaScript</b> associé à <b>React</b> a donné
              vie à des projets web <b>créatifs</b> et <b>innovants</b>. Mon enthousiasme
              pour le <b>développement Frontend</b> me prépare à contribuer
              activement à des projets captivants. Explorez mon portfolio pour
              découvrir comment je peux apporter une perspective unique à{" "}
              <b>vos projets !</b>😊
            </p> */}

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
