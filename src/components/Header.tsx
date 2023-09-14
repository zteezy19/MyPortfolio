import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="social-media-icons">
        <a
          href="https://www.linkedin.com/in/wai-yan-zaw-tin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.hackerrank.com/waiyanzawtin01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-code" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/zteezy19"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
