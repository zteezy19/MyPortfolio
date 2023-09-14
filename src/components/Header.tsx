import "./Header.css";

<div className="social-media-icons">
  <a
    href="https://www.linkedin.com/in/your-profile/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
  </a>
  <a
    href="https://www.hackerrank.com/your-profile"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa fa-code" aria-hidden="true"></i>
  </a>
  <a
    href="https://github.com/your-profile"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa fa-github" aria-hidden="true"></i>
  </a>
</div>;

const Header = () => {
  return (
    <div className="header">
      <h1>Your Name</h1>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
