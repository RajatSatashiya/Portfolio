import React from "react";
import { useRef, useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [height, setHeight] = useState();
  const navbar = useRef();

  useEffect(() => {
    setHeight(navbar.current.offsetHeight);
  }, []);
  return (
    <nav ref={navbar}>
      <h3>Portfolio...</h3>
      <ul className="nav-list">
        <li>
          <Link to="experience" smooth={true} offset={-height - 5}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-height - 5}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-height - 5}>
            Skills
          </Link>
        </li>
        <li className="resume">
          <a
            href="./pdf/resume.pdf"
            target="_blank"
            download
            className="resume"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
