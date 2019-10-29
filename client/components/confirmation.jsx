import React from 'react';
import ConfirmationItem from './confirmation-item';

function Confirmation(props) {
  if (props.purchCart !== [] && props.purchAddress !== {}) {
    return (
      <div className="confirmationContents rounded">
        <h3 className="ml-2 mt-3 py-2">Thank you, your order has been placed.</h3>
        <h3 className="ml-2 mt-3">Address Summary</h3>
        <div className="addressSummary">
          <div className="ml-3">{props.purchAddress.firstName + ' ' + props.purchAddress.lastName}</div>
          <div className="ml-3">{props.purchAddress.address}</div>
          <div className="ml-3">{props.purchAddress.city + ', ' + props.purchAddress.state + ' ' + props.purchAddress.zip}</div>
          <br/>
          <div className="ml-2">Purchased with card ending in {props.lastFour}</div>
        </div>
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
        <h3 className="ml-2">Total Purchase: ${((props.sumPurchase(props.purchCart)) / 100).toFixed(2)}</h3>
        <button type="submit" className="btn btn-primary mt-4 ml-2 mb-2 " onClick={() => props.setView('catalog', {})} >Continue Shopping</button>
      </div>

    );
  } else {
    return null;
  }

}

export default Confirmation;
