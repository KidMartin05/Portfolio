import React from "react";
import "../../assets/scss/main/_skills.scss"

const skillsContent = [
  { skillName: "PYTHON",     logo: "/logos/python.png", scale: 2.1 },
  { skillName: "C",          logo: "/logos/c.png", scale: 1 },
  { skillName: "RUST",       logo: "/logos/rust.png", scale: 1.75 },
  { skillName: "HTML5",      logo: "/logos/HTML5.png", scale: 1 },
  { skillName: "CSS3",       logo: "/logos/CSS3.png", scale: 1  },
  { skillName: "MYSQL",      logo: "/logos/MySQL.png", scale: 1 },
  { skillName: "SQL",        logo: "/logos/SQL.png", scale: 1 },
  { skillName: "POSTGRESQL", logo: "/logos/PostgreSQL.png", scale: 1 },
  { skillName: "JAVASCRIPT", logo: "/logos/JavaScript.png", scale: 1.4 },
  { skillName: "REACT",      logo: "/logos/React.png", scale: 1 },
  { skillName: "WORDPRESS",  logo: "/logos/Wordpress.png", scale: 1 },
  { skillName: "MONGODB",    logo: "/logos/mongodb.png", scale: 1 },
  { skillName: "GIT",        logo: "/logos/Git.png", scale: 1.3 },
  { skillName: "OOP",        logo: "/logos/OOP.png", scale: 1.25 },
  { skillName: "DEVOPS",     logo: "/logos/DevOps.png", scale: 1.4 },
  { skillName: "CI/CD",      logo: "/logos/CICD.png", scale: 1 },
];

const Skills = () => {
  return (
      <>
        {skillsContent.map((val, i) => (
            <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
              <div className="skill-card">
                <div className="skill-card__logoWrap">
                  <img
                      className="skill-card__logo"
                      src={val.logo}
                      alt={val.skillName}
                      style={{ transform: `scale(${val.scale ?? 1})` }} // per-item tweak
                  />
                </div>
                <div className="skill-card__title">{val.skillName}</div>
              </div>
            </div>
        ))}
      </>
  );
};

export default Skills;
