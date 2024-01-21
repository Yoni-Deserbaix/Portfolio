/* eslint-disable react/no-unescaped-entities */
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h1 id="contact-title">Contact</h1>
          <p id="contact-hook-sentence">
            Une opportunité d'alternance ? Contactez-moi ! 👇
          </p>
          <div className="contact-wrapper">
            <div className="contact-container">
              <span>
                <i class="bx bxs-map"></i>{" "}
              </span>
              <div className="contact-box">
                <h3>Lieu</h3>
                <p>Nantes, France</p>
              </div>
            </div>
            <div className="contact-container">
              <span>
                <i class="bx bxs-envelope"></i>{" "}
              </span>
              <div className="contact-box">
                <h3>Mail</h3>
                <a
                  href="mailto:yonideserbaix@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                  class="social-button"
                >
                  yonideserbaix@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
