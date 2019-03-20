import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import {withRouter} from 'react-router';

class ServicesContainer extends React.Component {
  state = {
    image: '',
    navItems: [
      {
        name: 'Home',
        url: '/home',
      },
      {
        name: 'Pricing',
        url: '/services',
      },
      {
        name: 'About Us',
        url: '/aboutus',
      },

    ],
  }

  render() {
    return (
      <Navbar items={this.state.navItems}/>
    );
  }
};

export default withRouter(ServicesContainer);


