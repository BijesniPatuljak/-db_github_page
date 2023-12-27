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

  const handleOnClick = () => {
    if (!openNavigation) return;
    dispatch(toggleNavigation());
  };

  return (
    <div className={className} onClick={handleOnClick}>
      <div className='overlay'>
        <Pointer />
        <div className="title">Homepage</div>
        <div className="content">content</div>
      </div>
    </div>
  );
}

export default Homepage;
