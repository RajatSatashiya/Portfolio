import React from "react";

function Skills() {
  const skills = [
    {
      icon: "https://img.icons8.com/color/344/html-5--v1.png",
      alt: "HTML Icon",
    },
    {
      icon: "https://img.icons8.com/color/344/css3.png",
      alt: "CSS Icon",
    },
    {
      icon: "https://img.icons8.com/color/344/javascript--v1.png",
      alt: "Javascript Icon",
    },
    {
      icon: "https://img.icons8.com/color/344/typescript--v1.png",
      alt: "Typescript Icon",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
      alt: "Java Icon",
      active: false,
    },
    {
      icon: "https://img.icons8.com/color/344/git.png",
      alt: "Git Icon",
    },
    {
      icon: "https://img.icons8.com/color/344/python.png",
      alt: "Python Icon",
      active: false,
    },
    {
      icon: "https://img.icons8.com/color/344/nodejs.png",
      alt: "NodeJS Icon",
    },
    {
      icon: "https://img.icons8.com/color/344/mongodb.png",
      alt: "MongoDB Icon",
      active: false,
    },
    {
      icon: "https://img.icons8.com/clouds/344/react.png",
      alt: "React Icon",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=r2OarXWQc7B6&format=png&color=000000",
      alt: "NextJS Icon",
    },
  ];
  return (
    <div className="sub-panel" id="skills">
      <h3 className="sub-title">Skills</h3>
      <div className="icons">
        {skills.map((skill, index) => {
          if (skill?.active === false) return null;
          return <img src={skill.icon} alt={skill.alt} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
