import React from 'react';
import PropTypes from 'prop-types';

import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import {hot} from 'react-hot-loader';
import '../client/styles/main.scss';
import HomePageContainer from './containers/HomePageContainer';
import PricingContainer from './containers/PricingContainer';
import PartnerContainer from './containers/PartnerContainer';
import FaqContainer from './containers/FaqContainer';
import Navbar from './components/Navbar';
import SocialBar from './components/SocialBar';

class App extends React.Component {
  componentDidMount = () => {
    let uri = this.props.history.location.pathname;
    this.props.history.push(uri);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar {...this.props} />
        <SocialBar />
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/pricing" component={PricingContainer} />
          <Route path="/bungalow" component={PartnerContainer} />
          <Route path="/faq" component={FaqContainer} />
        </Switch>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
};

export default hot(module)(withRouter(App));
