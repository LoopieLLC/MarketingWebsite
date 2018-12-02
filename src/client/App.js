import React, { Component } from 'react';
import Navbar from './components/Navbar';

export default class App extends Component {
  componentDidMount() {
    console.log('We have a React component!');
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
