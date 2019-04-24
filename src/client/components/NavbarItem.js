import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {loopieblue} from '../components/styles';

const NavbarItem = ({item}) => {
  return (
    <li className='navbar-item'>
      <NavLink to={item.url} activeStyle={{color: loopieblue}}>{item.name}</NavLink>
    </li>
  );
};

NavbarItem.propTypes = {
  item: PropTypes.object,
};

export default NavbarItem;
