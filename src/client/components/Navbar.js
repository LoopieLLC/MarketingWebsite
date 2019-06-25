import React, {useState} from 'react';
import NavbarItem from './NavbarItem';
import logo from '../../../public/images/logo.svg';
import LoopieButton from './LoopieButton';
import HamburgerMenu from 'react-hamburger-menu';

const NAVIGATION_ITEMS = [
  {
    name: 'Home',
    url: '/home',
  },
  {
    name: 'Pricing',
    url: '/pricing',
  },
  {
    name: 'About Us',
    url: '/aboutus',
  },
];

function Navbar(props) {
  let [open, setOpen] = useState(0);

  return (
    <nav className="navbar main-nav fixed">
      <img className="logo" src={logo} alt="Loopie Laundry" />
      <div className="nav-mobile">
        <HamburgerMenu
          isOpen={open}
          menuClicked={() => setOpen((open = !open))}
          width={24}
          height={20}
          strokeWidth={2}
          rotate={0}
          color="white"
          borderRadius={2}
          animationDuration={0.3}
        />
      </div>
      <ul className="nav-item-container">
        {NAVIGATION_ITEMS.map((item) => (
          <NavbarItem to={item.url} key={item.name} item={item} />
        ))}
        <li className="navbar-item ">
          <a className="no-wrap" href="http://www.loopie.us">
            <LoopieButton
              text="Sign Up Today"
              color="primary"
              variant="filled"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
