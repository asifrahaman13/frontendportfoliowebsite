import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <br />
      <br />
      <div className="scroll-view" id="scroll">
        <div className="scroll-child">
      <li>
        <a href="#participations">Participations</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#skills">My Skills</a>
      </li>
      <li>
        <a href="#proficiency">Proficiency</a>
      </li>
      <li>
        <a href="#credits">Credits</a>
      </li>
      </div>
      </div>
      <aboutme>
        <center>
          <h2 class="skill" id="about">
            <a href="#nav">MY HOBBIES...</a>
          </h2>
        </center>
        <div class="images">
          <div class="imageclass">
            <div class="first-image"></div>
            <div class="second-image"></div>
            <div class="third-image"></div>
          </div>
        </div>
      </aboutme>
    </>
  );
};

export default Header;
