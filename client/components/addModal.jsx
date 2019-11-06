import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddModal = props => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(true);

  const toggleShopping = () => {
    setModal(!modal);
    props.setView('catalog', {});
    props.closeModal();
  };

  const toggleCart = () => {
    setModal(!modal);
    props.setView('cart', {});
    props.closeModal();
  };
  const toggleDetails = () => {
    setModal(!modal);
    props.closeModal();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggleDetails} className={className}>
        <ModalHeader toggle={toggleDetails}>BrewSource</ModalHeader>
        <ModalBody>
          {'Added to cart ' + props.addModalProduct.count + ' ' + props.addModalProduct.name}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleShopping}>Continue shopping</Button>
          <Button color="danger" onClick={toggleCart}>Go to cart</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddModal;
