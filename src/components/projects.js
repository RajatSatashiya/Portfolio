import React from "react";
import { useState, useEffect, useRef } from "react";
import Card from "./card.js";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle/SectionTitle.jsx";

function Projects() {
  var techStack1 = ["MERN", "MapboxAPI", "Sockets", "Netlify"];
  var techStack2 = ["Three.js", "Twilio", "Blender", "MERN"];
  var techStack3 = ["Deepgram-api", "Twilio", "MongoDB", "Javascript"];
  var techStack4 = ["Discord.py", "Python", "Repl"];
  var techStack5 = ["React", "MongoDB", "CSS3", "Node.js"];

  var project1 = {
    techStack1,
    techStack2,
    techStack3,
    techStack4,
    techStack5,
    demo: "https://medcabs.netlify.app/",
    github: "https://medcabs.netlify.app/",
  };
  const [width, setWidth] = useState(0);
  const cards = useRef();

  useEffect(() => {
    setWidth(cards.current.scrollWidth - cards.current.offsetWidth);
  }, []);

  return (
    <div className="sub-panel" id="projects">
      <SectionTitle title="Projects" />

      <motion.div ref={cards} className="cards">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          <Card
            title="Celestial Mp3"
            img="./images/feelyourmusic.jpeg"
            desc='"Feel Your Music", an amazing 3D Mp3 player situated in the center of universe. Explore the vastness of Universe while listening to some celestial music.'
            tech={project1.techStack1}
            demo="https://source-404.github.io/Celestial_MP3/"
            github="https://github.com/RajatSatashiya/Celestial_MP3"
          />

          <Card
            title="The Roman Walks"
            img="./images/romanwalks.jpeg"
            desc="Walk amongst the Romans and explore the beauty of the world's largest Amphitheatre ever - The Colosseum. Feel the roots of theatre and immerse yourself in the experience of Ancient Rome."
            tech={project1.techStack2}
            demo="https://www.youtube.com/watch?v=8IuusZ4mYSc&t=46s"
            github="https://github.com/RajatSatashiya/RomanDemo"
          />

          <Card
            title="Meeting Wingman"
            img="./images/meetingwingman.png"
            desc="The perfect wingman to your classroom/professional meetings. Notifies you when you are AFK. Ever fell asleep during a meeting? Or someone knocked at the door? Worry not, we got you covered."
            tech={project1.techStack3}
            demo="https://meetingwingman.herokuapp.com/"
            github="https://github.com/RajatSatashiya/Meeting-Wingman"
          />

          <Card
            title="En Bot - An Entertaining discord bot"
            img="./images/enbot.jpeg"
            desc='Yup!! That is a frog. Our cute discord bot "En" knows only two words "Rebek Rebek". You call him once and he will Rebek your entire server. Use this bot to read funny jokes and listen to some cool music.'
            tech={project1.techStack4}
            demo="https://discord.com/oauth2/authorize?client_id=931565231509995661&permissions=156803460438&scope=bot"
            github="https://devpost.com/software/en-bot-an-entertaining-discord-bot"
          />

          <Card
            title="StuStrong"
            img="./images/stustrong.jpeg"
            desc="A Virtual community for students and anybody who wishes to learn something new. Join rooms and chat, talk and learn from other users. Unable to solve an equation? Need to learn cpp? You know where to go!!"
            tech={project1.techStack5}
            demo="https://devpost.com/software/stustrong"
            github="https://github.com/RajatSatashiya/StuStrong-client"
          />
        </motion.div>
      </motion.div>
      {/* </div> */}
    </div>
  );
}

export default Projects;
