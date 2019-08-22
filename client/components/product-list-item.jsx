import React from 'react';

function ProductListItem(props) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src="images/la_galaxy.jpg" alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">{props.product}</h5>
        <p className="card-text">{props.cost}</p>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default ProductListItem;
