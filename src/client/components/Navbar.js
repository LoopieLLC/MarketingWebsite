import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';
import logo from '../../../public/images/logo.svg';

import {
  HashRouter
} from 'react-router-dom';

const Navbar = ({ items }) => (
  <HashRouter>
    <nav className='navbar   main-nav'>
      <img className='logo' src={logo} />
      <ul className='nav-item-container'>
        {items.map((item) => {
          return (
            <NavbarItem to={item.url} key={item.name} item={item} />
          )
        })}
      </ul>
    </nav>
  </HashRouter>
);


Navbar.propTypes = {
  items: PropTypes.array,
}

export default Navbar;
