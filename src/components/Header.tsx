import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHackerrank } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="nav-links">
        <a href="#Home">Home</a>
        <a href="#AboutMe">About Me</a>
        <a href="#Projects">Projects</a>
        <a
          href="https://zteezydevresume2023.s3.ap-southeast-2.amazonaws.com/WaiYan'sResume(Nov2023).pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
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
          href="mailto:waiyanzawtin01@protonmail.com"
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
