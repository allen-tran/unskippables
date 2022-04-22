import React, { useState } from 'react';
import { Button, Container } from 'reactstrap';
import Card from '../Card/Card';
// import { createCard } from '../../APIFunctions/Card';
/* eslint-disable react/jsx-props-no-spreading */

export default function Feed() {
  const [cardList] = useState([]);
  //   const [card, setCard] = useState();
  //   const [modal, setModal] = useState();

  //   function toggleNewCard(event) {
  //     setCard();
  //     setModalState(cardModalState.SUBMIT);
  //     setModal(!modal);
  //   }
  //   useEffect(() => {
  //     populateCardList();
  //   }, []);

  //   async function populateCardList() {
  //     const eventData = await getAllCards();
  //     if (!eventData.error) setCardList(eventData.responseData);
  //   }
  return (
    <Container className="event-list">
      {cardList && cardList.length ? (
        cardList.reverse().map((event) => (
          <Card
            key={0}
            {...event}
          />
        ))
      ) : (
        <p>nothing to show :(</p>
      )}
      <Button className="create-card">
        add new card
      </Button>
    </Container>
  );
}
