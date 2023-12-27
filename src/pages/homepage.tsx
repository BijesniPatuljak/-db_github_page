import React from 'react';
import '../assets/stylesheets/pages.scss';
import '../assets/stylesheets/pointer.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Pointer from '../components/pointer';
import { useDispatch } from 'react-redux';
import { toggleNavigation } from '../store/navigationSlice';

function Homepage() {
  const openNavigation = useSelector((state: RootState) => state.navigation.value);
  const className = openNavigation ? "page-wrapper open-navigation" : "page-wrapper";
  const dispatch = useDispatch();
  const since2012 = new Date().getFullYear() - 2012;

  const handleOnClick = () => {
    if (!openNavigation) return;
    dispatch(toggleNavigation());
  };

  return (
    <div className={className} onClick={handleOnClick}>
      <div className='overlay'>
        <Pointer />
        <div className="title">Here lives a Scout</div>
        <div className="content">
          <p className='heading'>
            But you're probably not here to listen about my journeys as a Scout and Scoutmaster
          </p>
          <p>
            Something has brought you here to check out my skills and knowledge regarding software development. The first 'Hi' I ever got from a small terminal window (which happened by my own doing) was back in 2012. A line of code lead to another and here I am {since2012} years later. But without further ado, click on the navigation menu and let's get you up to speed!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
