import React from 'react';
import '../assets/stylesheets/pages.scss';

function Education() {
  return (
    <div className="page-container">
      <div className="title">Education & Experience</div>
      <div className="content">
        <p className="heading">
          mag. inf. et math.
        </p>
        <p>
          As of 2023 I'm a <span className="highlight">University Master of Computer Science and Mathematics</span>. Before that I finished my bachelor's degree in mathematics on the same faculty: Zagreb's Faculty of Science. During my last year on the faculty I started my professional software development career as a backend developer in <span className="highlight">Ruby on Rails</span> and later I added <span className="highlight">React</span> to the mix.
        </p>
        <p>
          Otherwise, I'm aquainter with part of the Adobe suite (Photoshop and Illustrator) with some experience using Figma.
        </p>
      </div>
    </div>
  );
}

export default Education;
