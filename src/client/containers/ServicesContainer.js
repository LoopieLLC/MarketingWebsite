import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import {withRouter} from 'react-router';
import ServicesCTA from '../components/ServicesCTA';
import { loopieblue, notblack } from '../components/styles';

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
        <ServicesCTA />
      </React.Fragment>
      
    );
  }
};

export default withRouter(ServicesContainer);


