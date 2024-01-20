import "./Home.scss";
import memojiHome from "../../assets/memoji-home.png";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="content">
          <div className="hero-text">
            <h1>
              Salut, <br /> je suis Yoni Deserbaix
              <span>👋</span>
            </h1>
            <p>
              Développeur Frontend et étudiant en informatique basé à Nantes. 📍
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
            </span>
          </div>
          <div className="hero-img">
            <img
              src="https://avatars.githubusercontent.com/u/152095147?s=500&u=9c489f53aa5a87ced472492bb63f017644c5648e&v=4"
              className="hero-img"
              alt="hero"
            />
          </div>
        </div>
        {/* <div className="skills">
          <h3>Frontend </h3>
          <div className="languages">
            <ul>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  height="50"
                  alt="javascript logo"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  height="50"
                  alt="react logo"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  height="50"
                  alt="sass logo"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="skills">
          <h3>Backend </h3>
          <div className="languages">
            <ul>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  height="50"
                  alt="cplusplus logo"
                />
              </li>
              <li>
                <img
                  src="https://cdn.simpleicons.org/nodedotjs/339933"
                  height="50"
                  alt="nodejs logo"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  height="50"
                  alt="express logo"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="skills">
          <h3>Outils </h3>
          <div className="languages">
            <ul>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg"
                  height="50"
                  alt="qt logo"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  height="50"
                  alt="git logo"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                  height="50"
                  alt="linux logo"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  height="50"
                  alt="mysql logo"
                />
              </li>
            </ul>
          </div>
        </div> */}
<a class="hero-mouse anchor" href="#about">
  <div class="mouse-icon"><span></span></div>
</a>      </div>
    </section>
  );
};

export default Home;
