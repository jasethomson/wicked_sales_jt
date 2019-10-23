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
            <div className="numItems d-flex justify-content-start mb-2">
              <button id={props.id} className="mr-2 btn btn-outline-dark down" onClick={event => props.numOfItems(event)}>—</button>
              <div className="countNum mt-1 mr-2">{props.count}</div>
              <button id={props.id} className='btn btn-outline-dark up' onClick={event => props.numOfItems(event)}>＋</button>
            </div>
            <button id={props.id} className='btn btn-danger delete' onClick={event => props.deleteFromCart(event)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
