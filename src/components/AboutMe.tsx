import Typewriter from "react-ts-typewriter";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="text-container">
        <div className="typing-text">
          <Typewriter text="Hi! I'm Wai Yan Zaw Tin" speed={250} loop={true} />
        </div>
        <div className="other-details">
          <p>
            Currently based in Singapore, my first love in programming is{" "}
            <span className="highlight">Python</span>. My technical expertise
            spans a variety of frontend and backend technologies, including{" "}
            <span className="highlight">React</span>,{" "}
            <span className="highlight">TypeScript</span>,{" "}
            <span className="highlight">Java</span>, and{" "}
            <span className="highlight">C++</span>. Ever eager to dive into new
            challenges, I relish crafting efficient and scalable software
            solutions.
          </p>
        </div>
      </div>

      <img
        src="/MyPicture.jpeg"
        alt="Wai Yan Zaw Tin"
        className="profile-picture"
      />
    </div>
  );
};

export default AboutMe;
