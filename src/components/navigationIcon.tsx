import { FaHouse, FaMessage } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

function NavigationIcon() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');
  useEffect(()=>{
    const page = location.pathname.replace('/', '');
    setCurrentPage(page.charAt(0).toUpperCase() + page.slice(1));
  }, [location.pathname]);

  switch (currentPage) {
    case 'Contact':
      return <FaMessage />;
    case 'About':
      return <FaUserAlt />;
    case 'Education':
      return <MdSchool />;
    case 'Code':
      return <FaCode />;
    default:
      return <FaHouse />;
  }
}

export default NavigationIcon;
