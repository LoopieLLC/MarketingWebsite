import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';
import logo from '../../../public/images/logo.svg';
import LoopieButton from './LoopieButton';
import { loopieblue } from './styles';

const Navbar = ({items}) => (
  <nav className='navbar main-nav fixed'>
    <img className='logo' src={logo} />

    <ul className='nav-item-container'>
      {items.map((item) => <NavbarItem to={item.url} key={item.name} item={item} />)}

      <li className='navbar-item'>
        <LoopieButton text="get started" color={loopieblue} variant="contained"></LoopieButton>
      </li>
    </ul>
  </nav>
);

Navbar.propTypes = {
  items: PropTypes.array,
};

export default Navbar;
