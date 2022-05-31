import React from "react";
import "./footer.css";

function footer() {
  return (
    <footer>
      <div className="footerUp">
        <div>
          <div className="footHead">Quick Links</div>
          <div className="list">Rent a room</div>
          <div className="list">Find roommates</div>
          <div className="list">
            <a href="how.html">How it works</a>
          </div>
        </div>
        <div>
          <div className="footHead">About</div>
          <div className="list">Our Story</div>
          <div className="list">Team</div>
        </div>
        <div>
          <div className="footHead">Help</div>
          <div className="list">Frequently Asked Questions</div>
          <div className="list">Blog</div>
          <div className="list">Contact Us</div>
        </div>
        <div>
          <div className="footHead">Legal</div>
          <div className="list">Terms and Conditions</div>
          <div className="list">Privacy Policy</div>
        </div>
        <div>
          <div className="footHead">Contact</div>
          <div className="list">roommatefinder@gmail.com</div>
        </div>
      </div>

      <div class="footerDown">
        <div class="copy">
          Copyright © 2020-2021 Roommate Finder. All rights reserved
        </div>
        <div class="socials">
          <a href="https://www.instagram.com/roomatefinder/">
            <i class="fab fa-instagram insta"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook fb"></i>
          </a>
          <a href="https://www.linkedin.com/company/rmt-finder/about/">
            <i class="fab fa-linkedin ld"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default footer;
