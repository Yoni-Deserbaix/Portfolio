import "./Home.scss";
import memojiHome from "../../assets/memoji-home.png";
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="content">
          <div className="hero-text">
            <h1>
              Développeur Frontend React
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
              Salut ! Je m'appelle Yoni Deserbaix et je suis un développeur
              frontend basé à Nantes.
              <i className="fa-solid fa-map-pin location-icon" />
            </p>
            <span>
              <a
                href="http://linkedin.com/in/yoni-deserbaix"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bx bxl-linkedin-square"></i>
              </a>
              <a
                href="https://github.com/Yoni-Deserbaix"
                rel="noreferrer"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
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
