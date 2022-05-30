import React from "react";
import { useState, useEffect, useRef } from "react";
import Card from "./card.js";
import { motion } from "framer-motion";

function Projects() {
  var techStack1 = ["MERN", "MapboxAPI", "Sockets", "Netlify", "Heroku"];
  var project1 = {
    techStack1,
    demo: "https://medcabs.netlify.app/",
    github: "https://medcabs.netlify.app/",
  };
  const [width, setWidth] = useState(0);
  const cards = useRef();

  useEffect(() => {
    setWidth(cards.current.scrollWidth - cards.current.offsetWidth + 5);
  }, []);

  return (
    <div className="sub-panel">
      <h3 className="sub-title">Projects</h3>
      {/* <div className="cards"> */}
      <motion.div ref={cards} className="cards">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          <Card
            title="Celestial Mp3"
            img="./images/feelyourmusic.jpeg"
            tech={project1.techStack1}
            demo={project1.demo}
            github={project1.github}
          />

          <Card
            title="The Roman Walks"
            img="./images/romanwalks.jpeg"
            tech={project1.techStack1}
            demo={project1.demo}
            github={project1.github}
          />

          <Card
            title="Meeting Wingman"
            img="./images/meetingwingman.png"
            tech={project1.techStack1}
            demo={project1.demo}
            github={project1.github}
          />

          <Card
            title="En Bot - An Entertaining discord bot"
            img="./images/enbot.jpeg"
            tech={project1.techStack1}
            demo={project1.demo}
            github={project1.github}
          />

          <Card
            title="StuStrong"
            img="./images/stustrong.jpeg"
            tech={project1.techStack1}
            demo={project1.demo}
            github={project1.github}
          />
        </motion.div>
      </motion.div>
      {/* </div> */}
    </div>
  );
}

export default Projects;
