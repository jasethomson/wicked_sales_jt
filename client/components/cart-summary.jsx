
function CartSummary(props) {
  if (props.cart) {
    return (
      this.props.map(cartItem => {
        return (this.props.CartSummaryItem);
      })
    );
  } else {
    return 'No items in cart';
  }
}

export default CartSummary;
