import React from "react";
import "./landingStyles.css";
import Typewriter from "typewriter-effect";

function landing() {
  const fullText =
    "Building apps by day, strumming guitar by night - an avid software engineer passionate about building web and mobile experiences...";

  return (
    <div className="landing">
      <div className="subLanding">
        <div className="nameContainer">
          <p>Hola! Yo Soy,</p>
          <div className="name">
            RAJAT <br />
            SATASHIYA
            <img src="./images/transparentGuitar.png" className="guitar" />
          </div>
        </div>
        <div className="aboutDesc">
          <Typewriter
            options={{
              strings: fullText,
              autoStart: true,
              delay: 30,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default landing;
