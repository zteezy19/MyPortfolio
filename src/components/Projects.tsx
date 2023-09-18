import "./AboutMe.css";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="mac-bar">
        <div className="mac-buttons">
          <div className="mac-button close"></div>
          <div className="mac-button minimize"></div>
          <div className="mac-button maximize"></div>
        </div>
        <span className="mac-bar-title">My Notable Projects</span>
      </div>
      <div className="terminal">
        <div className="terminal-project-title">
          <span>Final Year Project@University</span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>Project Name: Medical Appointment System</span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>
            Technologies Used:
            <span className="terminal-tech"> React</span>,
            <span className="terminal-tech"> TypeScript</span>,
            <span className="terminal-tech"> Java Spring</span>,
            <span className="terminal-tech"> MVC</span>,
            <span className="terminal-tech"> Google Cloud Platform</span>
          </span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>
            Description: This project was built & developed as my final year
            project. From the documentation, to the designing on Figma,
            task-tracking on Trello to writing frontend components and
            configuring the Java Spring backend, I was involved.
          </span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>
            GitHub:{" "}
            <a
              href="https://github.com/yourusername/Medical-Appointment-System"
              target="_blank"
              rel="noreferrer"
              className="terminal-link"
            >
              Unfortunately, this repo is private.
            </a>
          </span>
        </div>
        {/* VibeMix Project */}
        <div className="terminal-project-title">
          <span>
            VibeMix: A Discord Bot for Sentiment Analysis and Music
            Recommendations
          </span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>Project Name: VibeMix Discord Bot</span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>
            Technologies Used:<span className="terminal-tech"> Python</span>,
            <span className="terminal-tech"> Discord.py</span>,
            <span className="terminal-tech"> TextBlob</span>
          </span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>Status: Ongoing</span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>
            Description: VibeMix is a multi-functional Discord bot designed to
            elevate your server's atmosphere. It leverages NLP algorithms to
            perform sentiment analysis on chat data and subsequently recommends
            music playlists or tracks that align with the overall mood.
          </span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>Features: Sentiment Analysis, Music Recommendations</span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>
            GitHub:{" "}
            <a
              href="https://github.com/zteezy19/VibeMix"
              target="_blank"
              rel="noreferrer"
              className="terminal-link"
            >
              View the code here.
            </a>
          </span>
        </div>

        {/* Portfolio Website Project */}
        <div className="terminal-project-title">
          <span>Personal Portfolio Website</span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>Project Name: MyPortfolio</span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>
            Technologies Used:
            <span className="terminal-tech"> React</span>,
            <span className="terminal-tech"> TypeScript</span>,
            <span className="terminal-tech"> Vite</span>,
            <span className="terminal-tech"> CSS3</span>
          </span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>
            Description: This portfolio website serves as a dynamic resume,
            showcasing my skills, projects, and experiences as a software
            developer. The design approach was sleek and minimalistic. I learned
            TypeScript on the go as I developed this project while juggling my
            last semester in school and jobhunting. I am especially proud of it.
          </span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>
            GitHub:{" "}
            <a
              href="https://github.com/zteezy19/MyPortfolio"
              target="_blank"
              rel="noreferrer"
              className="terminal-link"
            >
              View the code here.
            </a>
          </span>
        </div>

        {/* More Coming Soon */}
        <div className="terminal-project-title">
          <span>More Coming Soon..</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
