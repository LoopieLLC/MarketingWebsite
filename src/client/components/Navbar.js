import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';
import logo from '../../../public/images/logo.svg';

const Navbar = ({items}) => (
  <nav className='navbar main-nav fixed'>
    <img className='logo' src={logo} />
    <ul className='nav-item-container'>
      {items.map((item) => <NavbarItem to={item.url} key={item.name} item={item} />)}
    </ul>

  </nav>
);

Navbar.propTypes = {
  items: PropTypes.array,
};

export default Navbar;
