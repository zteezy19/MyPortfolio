import Typewriter from "react-ts-typewriter";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="text-container">
        <div className="typing-text">
          <Typewriter
            text="Hi! I'm Wai Yan, a Full-Stack Software Engineer."
            speed={550}
          />
        </div>

        <div className="quote-container">
          <span className="quote-text">
            The people who are crazy enough to think they can change the world
            are the ones who do.
          </span>
          <cite className="author"> — Steve Jobs</cite>
        </div>
      </div>
    </div>
  );
};

export default Home;
