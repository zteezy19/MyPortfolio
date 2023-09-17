import "./AboutMe.css";
import { Tooltip } from "react-tooltip";
import MacButtons from "./MacButtons";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="mac-bar">
        <MacButtons />
      </div>

      <h2>About Me 👨‍💻</h2>
      <h3>
        Dedicated Junior Software Developer Currently Based in Singapore📍
      </h3>
      <div className="content-wrapper">
        <div className="about-me-text">
          <h4>My Origin🌏</h4>
          <p>
            I grew up in Yangon, Myanmar, a place far removed from the world's
            tech hubs. Yet, it was there that my engineering journey began,
            inspired in part by reading about Steve Jobs and the debut of the
            first iPhone when I was just 12 years old. The stories fueled a
            burning curiosity in me that carried all the way to Singapore, where
            I initially pursued Electrical & Electronics Engineering at
            Singapore Polytechnic. While the curriculum opened many doors, it
            was a coding class that made me feel truly at home. Python was my
            first love, and I haven't looked back since.
          </p>
          <h4>My Journey & Passion: From Circuit Boards to Code 🎓🌌</h4>
          <p>
            {" "}
            After spending six months as an electrical engineer intern, I found
            myself at a crossroads. It was then that I decided to commit to
            computer science, an area that had always intrigued me. On the
            advice of friends, I took up a remote internship, diving headfirst
            into the world of web development alongside a team of like-minded
            individuals. But for me, software engineering isn't just a career
            switch—it's a craft that I hold in the highest regard. What fuels my
            journey is the exhilarating notion that the lines of code I write
            today have the power to solve tangible problems and enhance people's
            lives tomorrow. This sense of turning abstract concepts into
            functional solutions gives me an unparalleled sense of fulfillment.
          </p>
        </div>

        <div className="profile-picture-container">
          <img
            src="/MyPicture.jpeg"
            alt="Wai Yan Zaw Tin"
            className="profile-picture"
          />
        </div>
      </div>

      <div className="icon-container">
        {/* JavaScript Icon */}
        <img
          data-tooltip-id="js-tooltip"
          data-tooltip-content="JavaScript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="tech-icon"
        />
        <Tooltip id="js-tooltip" />

        {/* TypeScript */}
        <img
          data-tooltip-id="ts-tooltip"
          data-tooltip-content="TypeScript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          className="tech-icon"
        />
        <Tooltip id="ts-tooltip" />

        {/* React */}
        <img
          data-tooltip-id="react-tooltip"
          data-tooltip-content="React"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          className="tech-icon"
        />
        <Tooltip id="react-tooltip" />

        {/* Node.js */}
        <img
          data-tooltip-id="node-tooltip"
          data-tooltip-content="Node.js"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          className="tech-icon"
        />
        <Tooltip id="node-tooltip" />

        {/* Python */}
        <img
          data-tooltip-id="python-tooltip"
          data-tooltip-content="Python"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="Python"
          className="tech-icon"
        />
        <Tooltip id="python-tooltip" />

        {/* Django */}
        <img
          data-tooltip-id="django-tooltip"
          data-tooltip-content="Django"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
          alt="Django"
          className="tech-icon"
        />
        <Tooltip id="django-tooltip" />

        {/* MongoDB */}
        <img
          data-tooltip-id="mongodb-tooltip"
          data-tooltip-content="MongoDB"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          alt="MongoDB"
          className="tech-icon"
        />
        <Tooltip id="mongodb-tooltip" />

        {/* MySQL */}
        <img
          data-tooltip-id="mysql-tooltip"
          data-tooltip-content="MySQL"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          alt="MySQL"
          className="tech-icon"
        />
        <Tooltip id="mysql-tooltip" />

        {/* SQLite */}
        <img
          data-tooltip-id="sqlite-tooltip"
          data-tooltip-content="SQLite"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
          alt="SQLite"
          className="tech-icon"
        />
        <Tooltip id="sqlite-tooltip" />

        {/* Java */}
        <img
          data-tooltip-id="java-tooltip"
          data-tooltip-content="Java"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
          alt="Java"
          className="tech-icon"
        />
        <Tooltip id="java-tooltip" />

        {/* Spring */}
        <img
          data-tooltip-id="spring-tooltip"
          data-tooltip-content="Spring"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-plain-wordmark.svg"
          alt="Spring"
          className="tech-icon"
        />
        <Tooltip id="spring-tooltip" />

        {/* Git */}
        <img
          data-tooltip-id="git-tooltip"
          data-tooltip-content="Git"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
          alt="Git"
          className="tech-icon"
        />
        <Tooltip id="git-tooltip" />

        {/* GCP */}
        <img
          data-tooltip-id="gcp-tooltip"
          data-tooltip-content="Google Cloud Platform"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg"
          alt="Google Cloud Platform"
          className="tech-icon"
        />
        <Tooltip id="gcp-tooltip" />
      </div>
    </div>
  );
};

export default AboutMe;
