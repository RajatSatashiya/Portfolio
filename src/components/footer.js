import React from "react";
import "./footer.css";

function footer() {
  return (
    <footer>
      <div className="socials">
        <a href="mailto:rajat09satashiya@gmail.com">
          <i className="fas fa-envelope mail"></i>
        </a>
        <a href="https://www.instagram.com/mr__satashiya/">
          <i className="fab fa-instagram insta"></i>
        </a>
        <a href="https://github.com/RajatSatashiya">
          <i className="fab fa-github gb"></i>
        </a>
        <a href="https://www.linkedin.com/in/rajatsatashiya/">
          <i className="fab fa-linkedin ld"></i>
        </a>
      </div>

      <div className="ending">
        <div className="salutation">Hecho Con Amor Por,</div>
        <div className="myname">Rajat Satashiya</div>
      </div>
    </footer>
  );
}

export default footer;
