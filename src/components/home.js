import React from "react";
import Experience from "./experience";
import Landing from "./Landing";
import Projects from "./projects";
import Skills from "./skills";

function home() {
  return (
    <div>
      <Landing />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}

export default home;
