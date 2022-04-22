import React from 'react';
import { Container, Col } from 'reactstrap';
import { CardModal } from './CardModal';
/* eslint-disable react/prop-types */

export default function Card(props) {
  const {
    songTitle,
    artist,
    description,
    imageURL,
  } = props;

  return (
    <Container
      className="event-card-button"
    >
      <Col className="card-info">
        <div className="card-title">{songTitle}</div>
        <div>
          {artist}
          {' '}
          {description}
        </div>
      </Col>
      <Col id="image-block">
        <img
          className="event-image"
          src={imageURL}
          alt=""
        />
      </Col>
    </Container>
  );
}
