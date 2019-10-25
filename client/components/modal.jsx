import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const LandingModal = props => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => {
    setModal(!modal);
    props.closeModal();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>BrewSource</ModalHeader>
        <ModalBody>
          This website is for demonstration purposes only, no items are for sale.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Enter Site</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LandingModal;
