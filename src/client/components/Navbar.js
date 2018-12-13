import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';

export default class Navbar extends React.Component {
  state = {
    items: ['one', 'two', 'three'],
  }
  render() {
    console.log(this.state.items);
    return (
      <nav className='main-nav'>
        <img className='logo' />
        <ul>
          {this.state.items.map((item) => {
            return (
              <NavbarItem item={item}/>
            )
          })}
        </ul>
      </nav>
    );
  }
};

Navbar.propTypes = {
  items: PropTypes.array,
}
