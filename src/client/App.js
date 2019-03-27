import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './components/Navbar';
import {Route, Switch, withRouter} from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';


import {hot} from 'react-hot-loader';
import '../client/styles/main.scss';
import HomePageContainer from './containers/HomePageContainer';
import PricingContainer from './containers/PricingContainer';
import HomePageCTA from './components/HomePageCTA';
import PricingCTA from './components/PricingCTA';

class App extends React.Component {
  componentDidMount = () => {
    let uri = this.props.history.location.pathname;
    this.props.history.push(uri);
  }

  renderHomePage = () => {
    return (
      <HomePageContainer />
    );
  }

  renderPricing = () => {
    return (
      <PricingContainer />
    );
  }

  render() {
    return (
      <div>
        <HomePageContainer />
        <PricingContainer />
        {/*<Route exact path='/' render={this.renderHomePage} />
        <Route path='/home' render={this.renderHomePage} />
        <Route path='/services' render={this.renderServices} />*/}
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
};

export default hot(module)(withRouter(App));
