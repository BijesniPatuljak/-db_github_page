import React from 'react';
import '../assets/stylesheets/pages.scss';
import '../assets/stylesheets/pointer.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import useMousePosition from '../hooks/useMousePosition';
import Pointer from '../components/pointer';

function Homepage() {
  const openNavigation = useSelector((state: RootState) => state.navigation.value);
  const className = openNavigation ? "page-wrapper open-navigation" : "page-wrapper";
  const { clientX, clientY } = useMousePosition();
  const pointer = document.querySelector('.pointer');
  pointer?.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    }, {duration: 3000, fill: 'forwards'}
  );
  return (
    <div className={className}>
      <div className='overlay'>
        <Pointer />
        <div className="title">Homepage</div>
        <div className="content">content</div>
      </div>
    </div>
  );
}

export default Homepage;
