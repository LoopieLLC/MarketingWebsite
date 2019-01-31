import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import ButtonBase from '@material-ui/core/Button';
import LoopieButton from 'LoopieButton';
const NavbarItem = ({item}) => (
  <li className='navbar-item'>
    <NavLink to={item.url}>{item.name}</NavLink>
  </li>
  <LoopieButton>
);

NavbarItem.propTypes = {
  item: PropTypes.object,
}

export default NavbarItem;
