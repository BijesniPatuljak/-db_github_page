import React from 'react';
import '../assets/stylesheets/hamburger_menu.scss';

interface HamburgerMenuProps {
  active?: boolean;
}

function HamburgerMenu({active = false}: HamburgerMenuProps) {
  const isActive = active;
  return(
    <div className="hamburger-menu">
      <div className='bar'></div>
      {/* {isActive ?
        <div>
          Test
        </div> :
        <div>
          Test2
        </div>
      } */}
    </div>
  );
}

export default HamburgerMenu;