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
            I am a software developer currently based in Singapore. I am
            passionate about every Python and have experience in React,
            TypeScript, Java and C++.{" "}
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
