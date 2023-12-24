import React from 'react';
import '../assets/stylesheets/pages.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

function Homepage() {
  const openNavigation = useSelector((state: RootState) => state.navigation.value);
  const className = openNavigation ? "page-wrapper open-navigation" : "page-wrapper";
  return (
    <div className={className}>
      <div className='overlay'>
        <div className="title">Homepage</div>
        <div className="content">content</div>
      </div>
    </div>
  );
}

export default Homepage;
