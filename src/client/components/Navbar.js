import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';
import logo from '../../../public/images/logo.svg';
import LoopieButton from './LoopieButton';
import {loopieblue} from './styles';

const Navbar = ({items}) => (
  <nav className='navbar main-nav fixed'>
    <img className='logo' src={logo} />

    <ul className='nav-item-container'>
      {items.map((item) => <NavbarItem to={item.url} key={item.name} item={item} color={item.color} />)}

      <li className='navbar-item'>
        <a href="http://www.loopie.us">
          <LoopieButton text="Sign Up Today" color={loopieblue} variant="contained"></LoopieButton>
        </a>
      </li>
    </ul>
  </nav>
);

Navbar.propTypes = {
  items: PropTypes.array,
};

export default Navbar;
