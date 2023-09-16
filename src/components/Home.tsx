import Typewriter from "react-ts-typewriter";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="text-container">
        <div className="typing-text">
          <Typewriter text="Hi! I'm Wai Yan Zaw Tin." speed={200} />
        </div>
        <div className="quote-container">
          <span className="quote-text">Talk is cheap. Show me the code.</span>
          <cite className="author"> — Linus Torvalds</cite>
        </div>
      </div>
    </div>
  );
};

export default Home;
