import React from 'react';
import '../assets/stylesheets/pages.scss';

function About() {
  return (
    <div className="page-container">
      <div className="title">About Me</div>
      <div className="content">
        <p className="heading">
          We'll get to a timeline soon enough
        </p>
        <p>
        Even though you haven't come here to listen to my experiences as a scout, I will still remind you because I cannot stress this enough: I am and always will be a <span className="highlight">Scout</span>. That is the most import thing about me and the most important thing I'm doing in my life.
        </p>
        <p>
          My education and experience is situated on a different link but perhaps you just need my <a href="../../public/dario_bogovic_cv.pdf" download="dario_bogovic_cv.pdf">CV</a>. As for the other things that interest you: I'm currently situated in Zagreb and don't intend of leaving the location for extended periods of time, or moving to a diffenrent workplace. I spend most of my spare time scouting and working out, as well as playing the guitar. Otherwise, I'm a karate black belt and I'm tattooed.
        </p>
      </div>
    </div>
  );
}

export default About;