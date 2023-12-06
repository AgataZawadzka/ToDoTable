import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from '../constant';


const ConfirmModal = (props) => {

    const {title, content, show, onAction} = props;


  return (
    <>
      <Modal show={show} onHide={()=> onAction(MODAL_ACTION_CLOSE)} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> onAction(MODAL_ACTION_CLOSE)}>
            Zamknij
          </Button>
          <Button variant="primary" onClick={()=> onAction(MODAL_ACTION_CONFIRM)}>
            Potwierdź
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;