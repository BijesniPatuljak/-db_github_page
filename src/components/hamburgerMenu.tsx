import React from 'react';
import '../assets/stylesheets/hamburger_menu.scss';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavigation } from '../store/navigationSlice';

interface HamburgerMenuProps {
  active?: boolean;
}

function HamburgerMenu({active = false}: HamburgerMenuProps) {
  const openNavigation = useSelector((state: RootState) => state.navigation.value);
  const dispatch = useDispatch();
  console.log(openNavigation);

  return(
    <div className="hamburger-menu" onClick={() => dispatch(toggleNavigation())}>
      <div className='bar'></div>
    </div>
  );
}

export default HamburgerMenu;