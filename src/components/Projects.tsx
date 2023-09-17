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
        {/* Add VibeMix as the second project */}
        <div className="terminal-project-title">
          <span>VibeMix: A Discord Bot</span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>Project Name: VibeMix Discord Bot</span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>
            Technologies Used:
            <span className="terminal-tech"> Python</span>,
            <span className="terminal-tech"> Discord.py</span>
          </span>
        </div>
        <div>
          <span className="terminal-prompt">~$</span>
          <span>Status: Ongoing</span>
        </div>
        {/* Add more projects here */}
      </div>
    </div>
  );
};

export default Projects;
