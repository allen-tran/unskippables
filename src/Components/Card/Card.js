import React from 'react';
import { Container, Col } from 'reactstrap';

/* eslint-disable react/prop-types */

export default function Card(props) {
  const {
    songTitle,
    description,
    imageURL,
  } = props;

  return (
    <Container
      className="event-card-button"
    >
      <Col className="event-info">
        <div className="event-title">{songTitle}</div>
        <div>
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
