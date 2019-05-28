import React from 'react';
import NavbarItem from './NavbarItem';
import logo from '../../../public/images/logo.svg';
import LoopieButton from './LoopieButton';

const NAVIGATION_ITEMS = [
  //{
  //  name: 'test',
  //  url: '/test',
  //},  
];

const Navbar = (props) => {
  return (
    <nav className="navbar main-nav fixed">
      <img className="logo" src={logo} alt="Loopie Laundry" />
      <ul className="nav-item-container">
        {NAVIGATION_ITEMS.map((item) => (
          <NavbarItem to={item.url} key={item.name} item={item} />
        ))}
        <li className="navbar-item"><a href="/">Home</a></li>
        <li className="navbar-signup">
          <a href="http://www.loopie.us">
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
