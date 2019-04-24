import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './components/Navbar';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

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

  render() {
    return (
      <Switch>
        <Redirect exact path='/' to='/home' />
        <Route exact path='/home' component={HomePageContainer} />
        <Route path='/pricing' component={PricingContainer} />
      </Switch>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
};

export default hot(module)(withRouter(App));
