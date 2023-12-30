import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/stylesheets/hamburger_menu.scss';
import { useDispatch } from 'react-redux';
import { toggleNavigation } from '../store/navigationSlice';
import type { RootState } from '../store/store';

function HamburgerMenu() {
  const openNavigation = useSelector((state: RootState) => state.navigation.isOpen);
  const dispatch = useDispatch();
  const className = openNavigation ? 'active hamburger-menu' : 'hamburger-menu';

  return (
    <div className={className} onClick={() => dispatch(toggleNavigation())}>
      <div className="bar"></div>
    </div>
  );
}

export default HamburgerMenu;