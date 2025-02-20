import React from "react";

function landing() {
  return (
    <div className="landing">
      <div className="land-left">
        <p>Hola! Yo Soy,</p>
        <div className="name">Rajat Satashiya</div>
        <div className="desc">
          React Native app developer and MERN stack Web developer from Bangalore
          who loves to build apps, awesome websites and drink coffee all day
          long.
        </div>
      </div>

      <img
        src="./images/profilepic.jpeg"
        className="profile-pic"
        alt="profile-pic"
      ></img>
    </div>
  );
}

export default landing;
