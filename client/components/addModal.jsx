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

  const toggle = () => {
    setModal(!modal);
    props.setView('cart', {});
    props.closeModal();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>BrewSource</ModalHeader>
        <ModalBody>
          {'Added to cart ' + props.addModalProduct.count + ' ' + props.addModalProduct.name}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleShopping}>Continue shopping</Button>
          <Button color="danger" onClick={toggle}>Go to cart</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddModal;
