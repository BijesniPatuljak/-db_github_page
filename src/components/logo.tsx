import React from 'react';
import '../assets/stylesheets/logo.scss';

interface LogoProps {
  source: string;
}

function Logo({source}: LogoProps) {
  return (
    <div className="logo">
      <img src={source} alt="/assets/images/logo192.png" />
    </div>
  );
}

export default Logo;
