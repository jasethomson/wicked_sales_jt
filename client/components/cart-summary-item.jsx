import React from 'react';

function CartSummaryItem(props) {
  return (
    <div className="card mb-3" >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img className="card-img-top" style={{ height: '250px' }} src={props.image} alt="Card image cap"></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" onClick={() => props.setView('details', { id: props.id })}>{props.name}</h5>
            <p className="card-text">${((props.price / 100).toFixed(2))}</p>
            <p className="card-text">{props.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
