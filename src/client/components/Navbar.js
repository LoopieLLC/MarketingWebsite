import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
export default class Navbar extends React.Component {
  state = {
    items: [
    {
      name: 'Home',
      url: '/home',
    },
    {
      name: 'Services',
      url: '/services',
    },
    {
      name: 'About Us',
      url: '/about',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
  ]
}

  render() {
    return (
      <HashRouter>
      <nav className='main-nav'>
        <img className='logo' />
        <ul>
          {this.state.items.map((item) => {
            return (
              <NavbarItem to={item.url} key={item.name} item={item}/>
            )
          })}
        </ul>
      </nav>
      </HashRouter>
    );
  }
};

Navbar.propTypes = {
  items: PropTypes.array,
}
