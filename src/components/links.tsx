import React from 'react';
import '../assets/stylesheets/links.scss';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavigation } from '../store/navigationSlice';

function Links() {
  const openNavigation = useSelector((state: RootState) => state.navigation.value);
  const dispatch = useDispatch();

  const className = openNavigation ? "link-wrapper" : "invisible";

  return(
    <div className={className}>
      <div className="nav-link">Homepage</div>
      <div className="nav-link">About me</div>
      <div className="nav-link">Education</div>
      <div className="nav-link">CV and skill assesment</div>
      <div className="nav-link">Contact</div>
    </div>
  );
}

export default Links;