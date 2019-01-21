import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './components/Navbar';
import {Route, Switch, withRouter} from 'react-router-dom';


import {hot} from 'react-hot-loader';
import '../client/styles/main.scss';
import HomePageContainer from './containers/HomePageContainer';
import ServicesContainer from './containers/ServicesContainer';
import HomePageCTA from './components/HomePageCTA';

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

  renderServices = () => {
    return (
      <ServicesContainer />
    );
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={this.renderHomePage} />
        <Route path='/home' render={this.renderHomePage} />
        <Route path='/services' render={this.renderServices} />
      </Switch>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
};

export default hot(module)(withRouter(App));
