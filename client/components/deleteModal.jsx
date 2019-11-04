import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = props => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(true);

  const toggleDelete = event => {
    setModal(!modal);
    props.deleteFromCart(event);
  };

  const toggle = () => {
    setModal(!modal);
    props.doNotDelete(event);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>BrewSource</ModalHeader>
        <ModalBody>
          Are you sure you want to delete this product from your cart?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleDelete}>OK</Button>
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteModal;
