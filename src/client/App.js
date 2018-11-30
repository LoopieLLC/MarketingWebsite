import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    console.log('We have a React component!');
  }

  render() {
    return (
      <div>
        <h1>Hey</h1>
      </div>
    );
  }
}