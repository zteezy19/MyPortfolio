import React from "react";
import "./Skills.css";

// Define an array of skill objects
const skillsArray = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "Python",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    alt: "Django",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    alt: "SQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    alt: "MongoDB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    alt: "ReactJS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "NodeJS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    alt: "C++",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    alt: "PHP",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    alt: "Git",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg",
    alt: "GCP",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg",
    alt: "Laravel",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    alt: "Java",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
    alt: "Spring",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
    alt: "Heroku",
  },
];

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skills-section">
        {skillsArray.map((skill, index) => (
          <div key={index} className="skill-container">
            <img className="skill-icon" src={skill.src} alt={skill.alt} />
            <span className="tooltip">{skill.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
