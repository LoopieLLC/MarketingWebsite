import React from 'react';
import PropTypes from 'prop-types';
import ServicesCTA from '../components/ServicesCTA';
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
      <React.Fragment>
        <Navbar items={this.state.navItems}/>
        <ServicesCTA CTAText=' ' subtext='How it works:' />
      </React.Fragment>
    );
  }
};

export default withRouter(ServicesContainer);


