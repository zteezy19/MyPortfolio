import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHackerrank } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="nav-links">
        <a href="#Home">Home</a>
        <a href="#Skills">About Me</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact Me</a>
      </div>
      <div className="social-media-icons">
        <a
          href="https://www.hackerrank.com/waiyanzawtin01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="hackerrank-icon" icon={faHackerrank} />
        </a>
        <a
          href="https://www.linkedin.com/in/wai-yan-zaw-tin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>

        <a
          href="https://github.com/zteezy19"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>

        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
