import React from 'react';

function ProductListItem(props) {

  return (
    <div className="col-3 card d-flex my-2">
      <div>
        <img className="card-img-top mt-4" style={{ height: '180px' }}src={props.image} alt="Card image cap"></img>
      </div>
      <div>
        <div className="card-body">
          <h5 className="card-title" onClick={() => props.setView('details', { id: props.id })}>{props.name}</h5>
          <p className="card-text">${((props.price / 100).toFixed(2))}</p>
          <p className="card-text">{props.shortDescription}</p>
        </div>
      </div>
      <p className="card-text">{props.longDescription}</p>
    </div>
  );
}

export default ProductListItem;
