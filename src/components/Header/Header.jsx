import { useState } from "react";
import "./Header.scss";
import memojiHeader from '../../assets/memoji-header.png';


function Header() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const handleClick = () => {
    setNavbarOpen((current) => !current);
  };

  const openNavbar = {
    left: 0,
    transition: "all 0.5s",
  };

  const closeNavbar = {
    left: "-100%",

    transition: "all 0.5s",
  };
  return (
    <nav className="navbar">
      <a href="#home">
        <strong className="logo">
          <img src={memojiHeader} alt="" />
        </strong>
      </a>
      <input type="checkbox" id="check" onChange={handleClick} />
      <label htmlFor="check" className="navbar__burger__menu">
        <i className="bx bx-menu" id="burger__icon"></i>
      </label>
      <ul
        className="navbar__ul"
        style={isNavbarOpen ? openNavbar : closeNavbar}
      >
        <li className="navbar__li">
          <a className="navbar__a" href="#home" onClick={handleClick}>
            Accueil
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#about" onClick={handleClick}>
            A propos
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#projects" onClick={handleClick}>
            Projets
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#skills" onClick={handleClick}>
            Compétences
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#contact" onClick={handleClick}>
            Contact
          </a>
        </li>
        
      </ul>
    </nav>
  );
}

export default Header;
