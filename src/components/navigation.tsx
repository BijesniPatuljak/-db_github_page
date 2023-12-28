import HamburgerMenu from './hamburgerMenu';
import '../assets/stylesheets/navigation.scss';
import NavigationIcon from './navigationIcon';


function Navigation() {
  return (
    <nav>
      <div className='nav-left'>
        <NavigationIcon />
        <div className='nav-text-container'>
          <span className='nav-title'>Dario</span>
          <span className='nav-title bold'>Bogović</span>
        </div>
      </div>
      <HamburgerMenu active={false}/>
    </nav>
  );
}

export default Navigation;
