import '../assets/stylesheets/pages.scss';
import '../assets/stylesheets/pointer.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Pointer from '../components/pointer';
import { useDispatch } from 'react-redux';
import { toggleNavigation } from '../store/navigationSlice';
import Homepage from './homepage';
import Education from './education';
import Contact from './contact';

interface Props {
  page: string;
}

function PagePanel({ page }: Props) {
  const openNavigation = useSelector((state: RootState) => state.navigation.value);
  const className = openNavigation ? "page-wrapper open-navigation" : "page-wrapper";
  const dispatch = useDispatch();

  const handleOnClick = () => {
    if (!openNavigation) return;
    dispatch(toggleNavigation());
  };

  // Just so TypeScript stops shouting at me
  var pageComponent = <Contact/>;

  switch (page) {
    case 'Homepage':
      pageComponent = <Homepage/>;
      break;
    case 'About':
      // pageComponent = <About/>;
      break;
    case 'Education':
      pageComponent = <Education/>;
      break;
    case 'Code':
      // pageComponent = <Code/>;
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
