import React from 'react';
import Logo from './logo';
import HamburgerMenu from './hamburgerMenu';
import logo from '../assets/images/logo192.png';
import '../assets/stylesheets/navigation.scss';

function Navigation() {
  return (
    <nav>
      <div className='nav-left'>
        <Logo
          source={logo}
        />
        <div className='nav-text-container'>
          <span className='nav-title'>Dario</span>
          <span className='nav-title bold'>Bogović</span>
        </div>
      </div>
      <HamburgerMenu active={false}/>
    </nav>
  );
}

export default Navigation;
