import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <div className="about-me-container">
        <img className="cat-picture" src="dante.jpeg" alt="My cat Dante" />
        <div className="text-content">
          <div className="title-container">
            <h1 className="main-title">ABOUT ME</h1>
            <h2 className="sub-title">
              A dedicated Full-Stack Developer currently based in Singapore 📍
            </h2>
          </div>
          <div className="about-me-text">
            As a Junior Full-Stack Developer, I possess an impressive arsenal of
            skills in Python, JavaScript, React, and other libraries...
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
