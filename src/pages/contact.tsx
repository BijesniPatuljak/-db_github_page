import React from 'react';
import '../assets/stylesheets/pages.scss';

function Contact() {
  return (
    <div className="page-container">
      <div className="title">Contact</div>
      <div className="content">
        <p>
         email (preferred): <a href="mailto:bpatuljak@hotmail.com">bpatuljak@hotmail.com</a>
        </p>
        <p>
         LinkedIn: <a href="https://www.linkedin.com/in/dario-bogovi%C4%87-b23916231/">Dario Bogović</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;