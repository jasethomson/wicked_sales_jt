import React from 'react';
import ConfirmationItem from './confirmation-item';

function Confirmation(props) {
  if (props.purchCart) {
    return (
      <div className="bg-light rounded">
        <h3 className="ml-2 mt-3">Thank you, your order has been placed.</h3>
        <h3 className="ml-2 mt-3">Order Summary</h3>
        {props.purchCart.map(cartProduct => {
          return (
            <ConfirmationItem
              key={cartProduct.id}
              id={cartProduct.id}
              count={cartProduct.count}
              name={cartProduct.name}
              price={cartProduct.price}
              image={cartProduct.imageName}
              shortDescription={cartProduct.shortDescription} />
          );
        })}
        <button type="submit" className="btn btn-primary mt-4 ml-2 mb-2 " onClick={() => props.setView('catalog', {})} >Continue Shopping</button>
      </div>

    );
  } else {
    return null;
  }

}

export default Confirmation;
