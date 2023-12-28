import React from 'react';
import '../assets/stylesheets/links.scss';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavigation } from '../store/navigationSlice';
import { useNavigate } from "react-router-dom";

function Links() {
  const navigate = useNavigate();
  const openNavigation = useSelector((state: RootState) => state.navigation.value);
  const dispatch = useDispatch();

  const className = openNavigation ? "link-wrapper" : "invisible";

  return(
    <div className={className}>
      <div className="nav-link" onClick={() => navigate("/")}>Homepage</div>
      <div className="nav-link">About Me</div>
      <div className="nav-link" onClick={() => navigate("/education")}>Education & Experience</div>
      <div className="nav-link">Languages & Projects</div>
      <div className="nav-link" onClick={() => navigate("/contact")}>Contact</div>
    </div>
  );
}

export default Links;