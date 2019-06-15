import React from 'react';
import NavbarItem from './NavbarItem';
import logo from '../../../public/images/logo.svg';
import LoopieButton from './LoopieButton';

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

const Navbar = (props) => {
  return (
    <nav className="navbar main-nav fixed">
      <img className="logo" src={logo} alt="Loopie Laundry" />
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
};

export default Navbar;
