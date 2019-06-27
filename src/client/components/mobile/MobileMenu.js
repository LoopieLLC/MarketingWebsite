import React, {useState} from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './../NavbarItem';
import LoopieButton from './../LoopieButton';
import {navitems} from './../Navbar';

function MobileMenu({open}) {
  function hidden() {
    if (open) {
      return 'nav-mobile-full';
    }
    return 'nav-mobile-full hidden';
  }
  return (
    <div className={hidden()}>
      <ul className="nav-item-container">
        {navitems.map((item) => (
          <NavbarItem to={item.url} key={item.name} item={item} />
        ))}
        <li className="navbar-item ">
          <a className="no-wrap" href="http://www.loopie.us">
            <LoopieButton
              text="Sign Up Today"
              color="primary"
              variant="filled"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
NavbarItem.propTypes = {
  open: PropTypes.any,
};

export default MobileMenu;
