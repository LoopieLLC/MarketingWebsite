import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';

import { hot } from 'react-hot-loader';
import '../client/styles/main.scss';
import HomePageContainer from './containers/HomePageContainer';
import ServicesContainer from './containers/ServicesContainer';
import HomePageCTA from './components/HomePageCTA';

class App extends Component {
  renderHomePage = () => {
    return (
      <HomePageContainer>{(
        items => <>
        <Navbar items={items.navItems}/>
        <HomePageCTA CTAText='Get Laundry Delivered To Your Doorstep' subtext='Flat rates, starting from $27.99'/>
        </>)}
      </HomePageContainer>
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
export default hot(module)(App);
