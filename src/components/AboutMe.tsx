import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-text">
        <h2>About Me</h2>
        <p>Your introduction here.</p>
      </div>
      <div className="about-image">
        <img src="path/to/your/image.jpg" alt="Your name" />
      </div>
    </div>
  );
};

export default AboutMe;
