import "./About.scss";
import DownloadCV from "../../assets/DESERBAIX_Yoni_CV_ENI.pdf";
import aboutPhoto from "../../assets/about.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-img" data-aos="fade-up" data-aos-duration="500">
            <img src={aboutPhoto} className="about-img" alt="" />
          </div>
          <div className="about-text">
            <h3 data-aos="fade-up" data-aos-duration="300">
              À propos de moi
            </h3>

            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="300">
              Hello 👋! Je m&apos;appelle <b>Yoni</b>, je suis un jeune{" "}
              <b>développeur de 20 ans</b> au parcours atypique, ayant évolué
              dans l&apos;électricité et des environnements connectés à
              l&apos;univers de la <b>programmation</b>, explorant ainsi les
              frontières créatives de l&apos;informatique. Mon expertise en{" "}
              <b>programmation</b> et en <b>administration de réseaux</b>{" "}
              s&apos;est forgée au fil de mes expériences. En tant
              qu&apos;autodidacte déterminé, mon exploration du{" "}
              <b>JavaScript</b> associé à <b>React</b> a donné vie à des projets
              web <b>créatifs</b> et <b>innovants</b>. Ma passion pour le{" "}
              <b>développement Frontend</b> et ma soif d&apos;apprentissage me
              préparent à <b>contribuer activement</b> à des projets captivants.
              <p
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="300"
              >
                Explorez mon portfolio pour découvrir comment je peux apporter
                une perspective unique et des compétences solides à{" "}
                <b>vos projets</b>
                😊!
              </p>
            </p>
            <a
              href={DownloadCV}
              className="DownloadCV"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="300"
              rel="noreferrer"
              target="blank"
            >
              Download CV
              <i className="bx bxs-download"> </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
