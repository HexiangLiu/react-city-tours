import React, { Component } from 'react';

import './CardList.scss';
import { tourData } from '../tourData';

import Card from './Card';

export default class List extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const data = this.state.tours.filter((el) => {
      return el.id !== id;
    });

    this.setState({ tours: data });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="cardlist">
        {tours.map((el) => (
          <Card key={el.id} tour={el} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
