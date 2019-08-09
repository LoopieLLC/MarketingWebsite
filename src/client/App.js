import React, {lazy, Suspense} from 'react';
import PropTypes from 'prop-types';

import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import {hot} from 'react-hot-loader';
import '../client/styles/main.scss';

// import HomePageContainer from './containers/HomePageContainer';
// import PricingContainer from './containers/PricingContainer';
// import PartnerContainer from './containers/PartnerContainer';

const HomePageContainer = lazy(() => import('./containers/HomePageContainer'));
const PricingContainer = lazy(() => import('./containers/PricingContainer'));
const PartnerContainer = lazy(() => import('./containers/PartnerContainer'));

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
        <Suspense fallback={<h1>simon</h1>}>
          <Switch>
            <Redirect exact path="/" to="/home" />
            <Route exact path="/home" component={HomePageContainer} />
            <Route path="/pricing" component={PricingContainer} />
            <Route path="/bungalow" component={PartnerContainer} />
          </Switch>
        </Suspense>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
};

export default hot(module)(withRouter(App));
