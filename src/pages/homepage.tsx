import React from 'react';
import store from '../store/store';
import '../assets/stylesheets/pages.scss';

function Homepage() {
  const test = store.getState;
  console.log(test);
  
  return (
    <div className="page-wrapper">
      <div className='overlay'>
        <div className="title">Homepage</div>
        <div className="content">Content</div>
      </div>
    </div>
  );
}

export default Homepage;
