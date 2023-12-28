import React from 'react';
import '../assets/stylesheets/pages.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { toggleNavigation } from '../store/navigationSlice';

function Homepage() {
  const openNavigation = useSelector((state: RootState) => state.navigation.isOpen);
  const dispatch = useDispatch();
  const since2012 = new Date().getFullYear() - 2012;

  const handleNavigationSpanClick = () => {
    if (openNavigation) return;
    dispatch(toggleNavigation());
  };

  return (
    <div className='page-container'>
      <div className="title">Here lives a Scout</div>
      <div className="content">
        <p className='heading'>
          But you're probably not here to listen about my journeys as a Scout and Scoutmaster
        </p>
        <p>
          Something has brought you here to check out my skills and knowledge regarding <span className='highlight'>software development</span>. The first 'Hi' I ever got from a small terminal window (which happened by my own doing) was back in <span className='highlight'>2012</span>. A line of code lead to another and here I am <span className='highlight'>{since2012}</span> years later. But without further ado, click on the <span className='highlight clickable' onClick={handleNavigationSpanClick}>navigation</span> menu and let's get you up to speed!
        </p>
      </div>
    </div>
  );
}

export default Homepage;
