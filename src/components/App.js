import React, { Component } from 'react';
import './App.scss';

import Navbar from './Navbar';
import CardList from './CardList';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <CardList />
      </React.Fragment>
    );
  }
}
