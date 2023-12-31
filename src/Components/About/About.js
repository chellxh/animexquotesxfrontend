import React from "react";
import "./About.css";

function About() {
  return (
    <div className="aboutme">
      <div id="title">About The Developer</div>
      <h2 id="name">Michelle Harley</h2>
      <h4>FULL STACK WEB DEVELOPER</h4>
      <p>Born & raised in NY. Wife & Mother of 2.</p>
      <section>
        I've been on a very bumpy journey to be a software engineer. This app
        reflects the things I have learned so far on this journey. I built this
        app based on my family's love of anime. Anime brings us closer together.
        I hope it does the same for you. Enjoy!
        <br />
        <br />
        Check out my <a href="https://github.com/chellxh">GitHub</a> !
      </section>
    </div>
  );
}

export default About;
