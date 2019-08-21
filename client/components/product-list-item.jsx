import React from 'react';

function ProductListItem(props) {
  return (
    <div className="cardContainer">
      <div className="productHolder">
        <i className="fas fa-gift fa-4x"></i>
      </div>
      <div className="cardHeader">{props.text}</div>
      <div className="cardDollar">{props.cost}</div>
      <div className="cardDescription">{props.description}</div>
    </div>
  );
}

export default ProductListItem;
