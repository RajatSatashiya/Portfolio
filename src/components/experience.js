import React from "react";

function experience() {
  return (
    <div className="sub-panel" id="experience">
      <h3 className="sub-title">Experience</h3>
      <div className="sub-desc">
        <div className="exp-1">
          <p>Backend Developer Intern | Engineer's Cradle</p>
          <div className="timeline">(Nov, 2021 - Jan, 2022)</div>
          <ul className="exp-list">
            <li>
              Worked with the team to develop backend routes for the website
              using ExpressJS and postman.
            </li>
            <li>
              Implemented ”mailing via NodeJS” functionality using nodemailer
              and worked with ical-generator to add ”add to calendar” feature to
              mails.
            </li>
            <li>Deployed and worked with MongoDB database on digital ocean.</li>
          </ul>
        </div>

        <div className="exp-1">
          <p>Technical Head | Deutsch Literary Association</p>
          <div className="timeline">(Feb, 2021 - Jan, 2022)</div>
          <ul className="exp-list">
            <li>
              Was part of the recruitments panel in the early phase of club’s
              formation, increasing the club membership from 8 people to 30
              people.
            </li>
            <li>
              Organised literary event "Deutsche und Krieg" and a Collaboratory
              event "Krieg Der Worte", a debate event held by DLA-VIT and VIT
              Film Society.
            </li>
            <li>
              Helped in providing technical growth and enhance the skills of
              fellow club members.
            </li>
          </ul>
        </div>
      </div>
      <img src="./images/laptop.png" className="illustration"></img>
    </div>
  );
}

export default experience;
