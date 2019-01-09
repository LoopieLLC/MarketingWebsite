import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { hot } from 'react-hot-loader';
import '../client/styles/main.scss';
export class App extends Component {

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
