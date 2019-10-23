import React from 'react';

function Confirmation(props) {
  return (
    <div className="bg-light rounded">
      <h3 className="text-success ml-2 mt-3">Thank you, your order has been placed.</h3>
      <button type="submit" className="btn btn-primary mt-4 ml-2 mb-2 " onClick={() => props.setView('catalog', {})} >Continue Shopping</button>
    </div>

  );
}

export default Confirmation;
