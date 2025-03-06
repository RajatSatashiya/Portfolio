import React from "react";
import "./footer.css";

function footer() {
  const socials = [
    {
      url: "mailto:rajat09satashiya@gmail.com",
      icon: "fas fa-envelope mail",
      active: true,
    },
    {
      url: "https://www.instagram.com/mr__satashiya/",
      icon: "fab fa-instagram insta",
      active: false,
    },
    {
      url: "https://github.com/RajatSatashiya",
      icon: "fab fa-github gb",
      active: true,
    },
    {
      url: "https://www.linkedin.com/in/rajatsatashiya/",
      icon: "fab fa-linkedin ld",
      active: true,
    },
  ];
  return (
    <footer>
      <div className="socials">
        {socials.map((social, index) => {
          if (social.active === false) return null;
          return (
            <a key={index} href={social.url} target="_blank" rel="noreferrer">
              <i className={social.icon}></i>
            </a>
          );
        })}
      </div>
      <div className="ending">
        <div className="salutation">Hecho Con Amor Por,</div>
        <div className="myname">Rajat Satashiya</div>
      </div>
    </footer>
  );
}

export default footer;
