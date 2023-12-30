import '../assets/stylesheets/pages.scss';
import '../assets/stylesheets/pointer.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import About from './about';
import Code from './code';
import Contact from './contact';
import Education from './education';
import Homepage from './homepage';
import Pointer from '../components/pointer';
import { toggleNavigation } from '../store/navigationSlice';
import type { RootState } from '../store/store';

interface Props {
  pageInNavigation: string;
}

function PagePanel({ pageInNavigation }: Props) {
  const navigate = useNavigate();
  const openNavigation = useSelector((state: RootState) => state.navigation.isOpen);
  const hoveredLink = useSelector((state: RootState) => state.navigation.page);
  const className = openNavigation ? 'page-wrapper open-navigation' : 'page-wrapper';
  const dispatch = useDispatch();

  const handleOnClick = () => {
    if (!openNavigation) {return;}
    navigate(`/${hoveredLink}`);
    dispatch(toggleNavigation());
  };

  const refreshedOrNavigated = !openNavigation && (pageInNavigation !== hoveredLink);

  var activePage = hoveredLink;

  if (refreshedOrNavigated || hoveredLink === '') {
    activePage = pageInNavigation;
  }

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
      <div className="overlay">
        <Pointer />
        {pageComponent}
      </div>
    </div>
  );
}

export default PagePanel;
