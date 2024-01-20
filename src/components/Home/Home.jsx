import "./Home.scss";
import memojiHome from "../../assets/memoji-home.png";
import DownloadCV from "../../assets/Yoni Deserbaix CV 2024.pdf";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="content">
          <div className="hero-text">
            <h1>
              Salut, je suis Yoni Deserbaix
              <span>
                <img
                  src="https://i.ibb.co/DKVdrf2/hello-img.png"
                  className="hello-img"
                  alt="hello-img"
                  border="0"
                />
              </span>
            </h1>
            <p>
              Développeur Frontend React et étudiant en informatique basé à
              Nantes.
            </p>
            <span className="contact">
              <a
                href="http://linkedin.com/in/yoni-deserbaix"
                target="_blank"
                rel="noreferrer"
                class="social-button"
              >
                <i class="bx bxl-linkedin-square"></i>
                LinkedIn
              </a>
              <a
                href="https://github.com/Yoni-Deserbaix"
                rel="noreferrer"
                target="_blank"
                class="social-button"
              >
                <i class="bx bxl-github"></i>
                Github
              </a>
              <a
                href="mailto:yonideserbaix@gmail.com"
                rel="noreferrer"
                target="_blank"
                class="social-button"
              >
                <i class="bx bxs-envelope"></i> yonideserbaix@gmail.com
              </a>
              <br />
              <a href={DownloadCV} className="contact-button">
                Download CV
              </a>
            </span>
          </div>
          <div className="hero-img">
            <img
              src="https://avatars.githubusercontent.com/u/152095147?s=400&u=9c489f53aa5a87ced472492bb63f017644c5648e&v=4"
              className="hero-img"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
