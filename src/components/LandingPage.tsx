import Typewriter from "react-ts-typewriter";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="about-me">
      <div className="text-container">
        <div className="typing-text">
          <Typewriter text="Hi! I'm Wai Yan Zaw Tin" speed={200} />
        </div>
        <div className="quote-container">
          <span className="quote-text">Talk is cheap. Show me the code.</span>
          <cite className="author"> — Linus Torvalds</cite>
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

export default LandingPage;
