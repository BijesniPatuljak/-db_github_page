import React from 'react';
import '../assets/stylesheets/links.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeActivePage, toggleNavigation } from '../store/navigationSlice';
import type { RootState } from '../store/store';

function Links() {
  const navigate = useNavigate();
  const openNavigation = useSelector((state: RootState) => state.navigation.isOpen);
  const dispatch = useDispatch();

  const handleOnClick = (route: string) => {
    dispatch(toggleNavigation());
    navigate(route);
  };

  const handleHover = (page: string) => {
    dispatch(changeActivePage({ page: page }));
  };

  const className = openNavigation ? 'link-wrapper' : 'invisible';

  return (
    <div className={className}>
      <div className="nav-link" onClick={() => handleOnClick('/')} onMouseOver={() => handleHover('Homepage')}>Homepage</div>
      <div className="nav-link" onClick={() => handleOnClick('/about')} onMouseOver={() => handleHover('About')}>About Me</div>
      <div className="nav-link" onClick={() => handleOnClick('/education')} onMouseOver={() => handleHover('Education')}>Education & Experience</div>
      <div className="nav-link" onClick={() => handleOnClick('/code')} onMouseOver={() => handleHover('Code')}>Languages & Projects</div>
      <div className="nav-link" onClick={() => handleOnClick('/contact')} onMouseOver={() => handleHover('Contact')}>Contact</div>
    </div>
  );
}

export default Links;