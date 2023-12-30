import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { animated, useTransition } from '@react-spring/web';
import { FaCode } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaHouse, FaMessage } from 'react-icons/fa6';
import { MdSchool } from 'react-icons/md';

function NavigationIcon() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');
  const transitionStyle = {
    from: { rotateY: 90 },
    enter: { rotateY: 0 },
    leave: { rotateY: 90 },
    exitBeforeEnter: true,
    config: { mass: 0.5, tension: 500 },
  };
  const transition = useTransition(currentPage, transitionStyle);
  useEffect(()=>{
    const page = location.pathname.replace('/', '');
    setCurrentPage(page.charAt(0).toUpperCase() + page.slice(1));
  }, [location.pathname]);

  return (
    <div className="icon">
      {transition((style, item) => {
        switch (item) {
          case 'Contact':
            return (
            <animated.div style={style}>
              <FaMessage />
            </animated.div>
            );
          case 'About':
            return (
            <animated.div style={style}>
              <FaUserAlt />
            </animated.div>
            );
          case 'Education':
            return (
            <animated.div style={style}>
              <MdSchool />
            </animated.div>
            );
          case 'Code':
            return (
            <animated.div style={style}>
              <FaCode />
            </animated.div>
            );
          default:
            return (
            <animated.div style={style}>
              <FaHouse />
            </animated.div>
            );
        }
      })}
    </div>
  );
}

export default NavigationIcon;
