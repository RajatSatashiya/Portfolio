import React from "react";

function card(props) {
  return (
    <div className="card">
      <div className="cardimg">
        <img src={props.img}></img>
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

      {/* 
      <div className="links">
        <div className="demo">{props.demo}</div>
        <div className="github">{props.github}</div>
      </div> */}
    </div>
  );
}

export default card;
