import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const NavbarItem = ({item}) => (
  <li className='navbar-item'>
    <NavLink to={item.url}>{item.name}</NavLink>
  </li>
);

NavbarItem.propTypes = {
  item: PropTypes.object,
}

export default NavbarItem;
