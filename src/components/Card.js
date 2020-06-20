import React, { Component } from 'react';

import './Card.scss';

export default class Card extends Component {
  state = { showInfo: false };

  onClick = () => {
    this.setState(
      this.state.showInfo ? { showInfo: false } : { showInfo: true }
    );
  };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <div className="card">
        <figure className="card__img-box">
          <img src={img} alt={city} className="card__img" />
          <i className="btn fas fa-times" onClick={() => removeTour(id)}></i>
        </figure>

        <div className="card__detail">
          <h3 className="card__city">{city}</h3>
          <h4 className="card__name">{name}</h4>
          <p>
            Info:{' '}
            <i
              className="card__icon far fa-arrow-alt-circle-down"
              onClick={this.onClick}
            ></i>
          </p>
          <p className="card__info">{this.state.showInfo && info}</p>
        </div>
      </div>
    );
  }
}
