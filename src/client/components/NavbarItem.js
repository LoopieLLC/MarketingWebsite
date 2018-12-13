import React from 'react';
import PropTypes from 'prop-types';

const NavbarItem = ({item}) => (
  <li>{item}</li>
);

NavbarItem.propTypes = {
  item: PropTypes.string,
}

export default NavbarItem;