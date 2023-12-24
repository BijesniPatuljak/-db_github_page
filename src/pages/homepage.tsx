import React from 'react';
import { RootState } from '../store/store';
import '../assets/stylesheets/pages.scss';
import { useSelector } from 'react-redux';

function Homepage() {
  const theme = useSelector((state: RootState) => state.theme.value);
  return (
    <div className="page-wrapper">
      <div className='overlay'>
        <div className="title">Homepage</div>
        <div className="content">{theme}</div>
      </div>
    </div>
  );
}

export default Homepage;
