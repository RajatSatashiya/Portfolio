import React from "react";

function card(props) {
  return (
    <div className="card">
      <div className="cardimg">
        <img src={props.img}></img>
      </div>

      <div className="details">
        <div className="proj-title">{props.title}</div>
      </div>
    </div>
  );
}

export default card;
