import React, { useState, useEffect, useRef } from "react";
import { SectionTitle } from "./SectionTitle/SectionTitle";
import "./experience.css";

function Experience() {
  const [isFocused, setIsFocused] = useState(false);
  const expDataRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFocused) {
          setIsFocused(true);
        }
      },
      { threshold: 0.1 } // Trigger when 50% of the title is visible
    );

    if (expDataRef.current) {
      observer.observe(expDataRef.current);
    }

    return () => {
      if (expDataRef.current) {
        observer.unobserve(expDataRef.current);
      }
    };
  }, [isFocused]);

  const experienceData = [
    {
      role: "Associate Software Engineer",
      company: "Aster DM Healthcare",
      timeline: "Dec 2022 - Present",
      isActive: true,
      techStack: "React Native, Firebase",
      description: [
        "Implemented a biometric login system to streamline the login process for returning users, eliminating the need for mobile number and OTP authentication on every login.",
        "Developed around 25+ deeplinks/universal links for different screens throughout the app.",
        "Worked on Arabic localisation and RTL layout for the launch of the app in Saudi Arabia.",
        "Implemented the new in-house authentication system for the app shifting from third-party keycloak login system with the main focus on handling access/refresh tokens and 401 API failures",
        "Worked on Adjust, OneInsider integrations which are marketing and analytics tool used for notifications/marketing campaigns, Sentry for app's performance monitoring, google analytics for app usage analysis.",
      ],
    },
    {
      role: "Backend Developer Intern",
      company: "Engineer's Cradle",
      timeline: "Nov, 2021 - Jan, 2022",
      isActive: false,
      techStack: "NodeJS, MongoDB",
      description: [
        "Worked with the team to develop backend routes for the website using ExpressJS and postman.",
        "Implemented ”mailing via NodeJS” functionality using nodemailer and worked with ical-generator to add ”add to calendar” feature to mails.",
        "Deployed and worked with MongoDB database on digital ocean.",
      ],
    },
    {
      role: "Technical Head",
      company: "Deutsch Literary Association",
      timeline: "Feb, 2021 - Jan, 2022",
      isActive: false,
      techStack: "",
      description: [
        "Was part of the recruitments panel in the early phase of club's formation, increasing the club membership from 8 people to 30 people.",
        'Organised literary event "Deutsche und Krieg" and a Collaboratory event "Krieg Der Worte", a debate event held by DLA-VIT and VIT Film Society.',
        "Helped in providing technical growth and enhance the skills of fellow club members.",
      ],
    },
  ];
  return (
    <div className="sub-panel" id="experience" ref={expDataRef}>
      <SectionTitle title="Experience" />
      <div className={`sub-desc ${isFocused && "slide-top"}`}>
        {experienceData.map((exp) => {
          if (!exp.isActive) return null;
          return (
            <div className="exp-1">
              <p>{`${exp.role} | ${exp.company}`}</p>
              <div className="timelineContainer">
                <div className="timeline">
                  <b>Tech Stack:</b> {exp.techStack}
                </div>
                <div className="timeline">{exp.timeline}</div>
              </div>
              <ul className="exp-list">
                {exp.description.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
        {/* <img
          src="./images/myasterapp.webp"
          className="illustration"
          alt="myAster Logo"
        ></img> */}
      </div>
    </div>
  );
}

export default Experience;
