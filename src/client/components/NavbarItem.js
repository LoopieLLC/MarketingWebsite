import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import ButtonBase from '@material-ui/core/Button';

const NavbarItem = ({item, color}) => {
  const styles = {
    color: {color}
  }
  return (
    <li className='navbar-item' style={styles}>
      <NavLink to={item.url}>{item.name}</NavLink>
    </li>
  );
}

  


NavbarItem.propTypes = {
  item: PropTypes.object,
}

export default NavbarItem;
