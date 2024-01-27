import "./Home.scss";
import memojiHome from "../../assets/memoji-home.png";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="content">
          <div className="hero-text">
            <h1 data-aos="fade-up" data-aos-duration="300">
              Salut, <br /> je suis Yoni Deserbaix
              <span>👋</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="300">
              Développeur Fullstack orienté Frontend et étudiant en informatique
              basé à Nantes. 📍
            </p>
            <span
              className="link"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="300"
            >
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
            </span>
          </div>
          <div className="hero-img">
            <img
              src="https://avatars.githubusercontent.com/u/152095147?s=500&u=9c489f53aa5a87ced472492bb63f017644c5648e&v=4"
              className="hero-img"
              alt="hero"
              data-aos="fade-up"
              data-aos-duration="300"
            />
          </div>
        </div>
        <a class="hero-mouse anchor" href="#about">
          <div class="mouse-icon">
            <span></span>
          </div>
        </a>{" "}
      </div>
    </section>
  );
};

export default Home;
