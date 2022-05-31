import React from "react";
import "./navbar.css";

function navbar() {
  return (
    <nav>
      <h3>Portfolio...</h3>
      <ul className="nav-list">
        <li>Experience</li>
        <li>Projects</li>
        <li>Skills</li>
        <li className="resume">Resume</li>
      </ul>
    </nav>
  );
}

export default navbar;
