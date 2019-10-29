import React from 'react';

function ConfirmationItem(props) {
  return (
    <div className="card mb-3" >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img className="card-img-top" style={{ height: '250px' }} src={props.image} alt="Card image cap"></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Total Cost: ${((props.count * (props.price / 100)).toFixed(2))}</p>
            <p className="card-text">{props.shortDescription}</p>
            <div className="numItems d-flex justify-content-start mb-2">
              <div className="countNum mt-1 mr-2">Qty. {props.count}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationItem;
