import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  if (props.cart.length > 0) {
    return (
      props.cart.map(item => {
        return (
          <CartSummaryItem
            key={item.id}
            id={item.id}
            count={item.count}
            name={item.name}
            price={item.price}
            image={item.imageName}
            shortDescription={item.shortDescription}
            setView={props.setView}
            numOfItems={props.numOfItems}
            deleteFromCart={props.deleteFromCart}/>
        );
      })
    );
  } else {
    return (
      <h4 className="text-white no-items">No items in cart</h4>
    );
  }
}

export default CartSummary;
