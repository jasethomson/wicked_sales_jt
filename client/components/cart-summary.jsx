import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {

  if (props.cart) {
    return (
      props.cart.map(item => {
        return (
          <CartSummaryItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            shortDescription={item.shortDescription} />
        );
      })
    );
  } else {
    return 'No items in cart';
  }
}

export default CartSummary;
