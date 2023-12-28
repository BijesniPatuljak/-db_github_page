import '../assets/stylesheets/pages.scss';
import '../assets/stylesheets/pointer.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Pointer from '../components/pointer';
import { useDispatch } from 'react-redux';
import { toggleNavigation } from '../store/navigationSlice';
import { useNavigate } from "react-router-dom";
import Homepage from './homepage';
import Education from './education';
import Contact from './contact';
import About from './about';
import Code from './code';

interface Props {
  pageInNavigation: string;
}

function PagePanel({ pageInNavigation }: Props) {
  const navigate = useNavigate();
  const openNavigation = useSelector((state: RootState) => state.navigation.isOpen);
  const hoveredLink = useSelector((state: RootState) => state.navigation.page);
  const className = openNavigation ? "page-wrapper open-navigation" : "page-wrapper";
  const dispatch = useDispatch();

  const handleOnClick = () => {
    if (!openNavigation) return;
    navigate(`/${hoveredLink}`);
    dispatch(toggleNavigation());
  };

  const refreshedOrNavigated = !openNavigation && (pageInNavigation !== hoveredLink);

  var activePage = hoveredLink;

  if (refreshedOrNavigated || hoveredLink === '') {
    activePage = pageInNavigation;
  };

  // Just so TypeScript stops shouting at me
  var pageComponent = <Contact/>;

  switch (activePage) {
    case 'Homepage':
      pageComponent = <Homepage/>;
      break;
    case 'About':
      pageComponent = <About/>;
      break;
    case 'Education':
      pageComponent = <Education/>;
      break;
    case 'Code':
      pageComponent = <Code/>;
      break;
    default:
      pageComponent = <Contact/>;
      break;
  }

  return (
    <div className={className} onClick={handleOnClick}>
      <div className='overlay'>
        <Pointer />
        {pageComponent}
      </div>
    </div>
  );
}

export default PagePanel;
