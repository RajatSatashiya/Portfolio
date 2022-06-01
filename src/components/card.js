import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAsia,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={hover ? `card cardHover` : `card`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="cardimg">
        <img src={props.img} alt="project card"></img>
        <div className={hover ? `links linkHover` : `links`}>
          <a href={props.demo} target="_blank" rel="noreferrer" title="demo">
            <FontAwesomeIcon icon={faEarthAsia} />
          </a>
          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            title="github"
          >
            <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </a>
        </div>
      </div>

      <div className="details">
        <div className="proj-title">{props.title}</div>
        <div className="proj-desc">{props.desc}</div>
      </div>

      <div className="techStack">
        {props.tech.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </div>
    </div>
  );
}

export default Card;
