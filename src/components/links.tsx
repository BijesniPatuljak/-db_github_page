import React from 'react';
import '../assets/stylesheets/links.scss';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavigation, changeActivePage } from '../store/navigationSlice';
import { useNavigate } from "react-router-dom";

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

  const className = openNavigation ? "link-wrapper" : "invisible";

  return(
    <div className={className}>
      <div className="nav-link" onClick={() => handleOnClick('/')} onMouseOver={() => handleHover('Homepage')}>Homepage</div>
      <div className="nav-link">About Me</div>
      <div className="nav-link" onClick={() => handleOnClick('/education')} onMouseOver={() => handleHover('Education')}>Education & Experience</div>
      <div className="nav-link">Languages & Projects</div>
      <div className="nav-link" onClick={() => handleOnClick('/contact')} onMouseOver={() => handleHover('Contact')}>Contact</div>
    </div>
  );
}

export default Links;