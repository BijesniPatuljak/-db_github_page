import React from 'react';
import '../assets/stylesheets/pointer.scss';
import useMousePosition from '../hooks/useMousePosition';

function Pointer() {
  const { clientX, clientY } = useMousePosition();
  const pointer = document.querySelector('.pointer');
  pointer?.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    }, {duration: 3000, fill: 'forwards'}
  );
  return (
    <>
      <div className='pointer'/>
      <div className='blur'/>
    </>
  );
}

export default Pointer;
