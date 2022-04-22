import React, { useState } from 'react';
import {
  Button, Modal, ModalBody, ModalHeader, Input, InputGroup, Col, Label, Row,
  InputGroupAddon, ModalFooter,
} from 'reactstrap';
import { cardModalState } from '../../Enums';
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

export default function CardModal(props) {
  const {
    modal, toggle, modalState, songTitle, description, artist, _id,
  } = props;
  const [title, setTitle] = useState({ songTitle });
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [cardDescription, setCardDescription] = useState(description);
  //   const [imageURL, setImageURL] = useState(props.imageURL);
  const [cardArtist, setCardArtist] = useState(artist);
  const [clickedSubmit, setClickedSubmit] = useState(false);

  function toggleConfirmationModal() {
    setConfirmationModal(!confirmationModal);
  }

  async function handleDeletion() {
    await props.handleDelete({ _id });
    await props.populateCardList();
    toggleConfirmationModal();
    props.toggle();
  }

  const confirmModalProps = {
    headerText: `Delete ${props.title}?`,
    bodyText: 'The event will be gone forever if you do this.',
    toggle: toggleConfirmationModal,
    handleConfirmation: handleDeletion,
    open: confirmationModal,
  };

  const inputMatrix = [
    [
      {
        addon: 'song title*',
        type: 'text',
        maxLength: '25',
        defaultValue: props.title,
        placeholder: 'get busy',
        handleChange: (e) => setTitle(e.target.value),
        ifRequirementsNotMet: (title === undefined || title === '') && clickedSubmit && (
        <p className="unavailable">please enter a song title.</p>
        ),
      },
      {
        addon: 'artist*',
        type: 'text',
        maxLength: '25',
        defaultValue: props.artist,
        placeholder: 'yeat',
        handleChange: (e) => setCardArtist(e.target.value),
        ifRequirementsNotMet: (artist === undefined || artist === '') && clickedSubmit && (
        <p className="unavailable">please enter an artist.</p>
        ),
      },
      {
        addon: 'description*',
        type: 'text',
        maxLength: '50',
        defaultValue: props.description,
        placeholder: 'this song gives me energy',
        handleChange: (e) => setCardDescription(e.target.value),
        ifRequirementsNotMet: (description === undefined || description === '') && clickedSubmit && (
        <p className="unavailable">please enter an artist.</p>
        ),
      },
    ],
  ];

  function requiredFieldsFilledIn() {
    if (props.modalStae === cardModalState.EDIT) {
      return (
        title !== ''
              && artist !== ''
              && descripiton !== ''
      );
    } if (props.modalState === eventModalState.SUBMIT) {
      return (
        title !== undefined
          && artist !== undefined
          && descripiton !== undefined
      );
    }
    return false;
  }
  async function handleSubmission(requiredFieldsFilledIn) {
    setClickedSubmit(true);
    if (requiredFieldsFilledIn) {
      const cardFields = {
        title,
        artist,
        description,
      };

      await props.handleSubmit({ _id: props._id, ...cardFields });
      await props.populateCardList();
      props.toggle();
    }
  }

  function processRequest() {
    const passed = requiredFieldsFilledIn();
    handleSubmission(passed);
  }

  return (
    <div>
      <confirmationModal {... confirmModalProps} />
      <Modal isOpen={modal} size="lg" toggle={toggle}>
        <ModalHeader>

          <Col>
            <Row>
              {modalState === cardModalState.SUBMIT ? 'Create New ' : 'Edit '}
              Card
            </Row>
          </Col>
        </ModalHeader>
        <ModalBody>
          <span>
            <span color="red">*</span>
            = This is a required field
          </span>
          {inputMatrix.map((row) => (
            <Row key={0}>
              {row.map((input) => (
                <Col key={0}>
                  <InputGroup className="event-input-group">
                    <InputGroupAddon addonType="prepend">
                      {input.addon}
                    </InputGroupAddon>
                    <Input
                      type={input.type}
                      maxLength={input.maxLength}
                      defaultValue={input.defaultValue}
                      placeholder={input.placeholder}
                      onChange={input.handleChange}
                      children={input.children}
                    />
                  </InputGroup>
                  {input.ifRequirementsNotMet}
                </Col>
              ))}
            </Row>
          ))}
          <Row className="container">
            <Label>Event Description</Label>
            <Input
              type="textarea"
              maxLength={100}
              rows={5}
              placeholder="Enter Event Description"
              defaultValue={props.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Row>
          <Row className="modal-event-image">
            <Label>Event Image + Preview</Label>
            <Input
              type="text"
              placeholder="Enter URL Here"
              defaultValue={props.imageURL}
              onChange={(e) => handleURLChange(e.target.value)}
            />
            <p className="modal-image-container">
              <img
                id="event-img"
                src={props.imageURL || imagePreviewURL}
                alt="event visual"
              />
            </p>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          {modalState === eventModalState.EDIT ? (
            <Button color="danger" onClick={toggleConfirmationModal}>
              Delete Event
            </Button>
          ) : (
            <></>
          )}
          <Button
            color="primary"
            onClick={processRequest}
          >
            {modalState === eventModalState.SUBMIT
              ? 'Create New Event'
              : 'Submit Changes'}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
