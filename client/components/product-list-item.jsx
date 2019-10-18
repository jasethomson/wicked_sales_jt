import React from 'react';

function ProductListItem(props) {

  return (
    <div className="px-1 col-3 mt-5 d-flex my-2">
      <div className="bg-secondary card col-12">
        <div>
          <img className="card-img-top mt-4" style={{ height: '340px' }} src={props.image} alt="Card image cap"></img>
        </div>
        <div>
          <div className="card-body px-0 font">
            <h5 className="card-title" onClick={() => props.setView('details', { id: props.id })}>{props.name}</h5>
            <p className="card-text">${((props.price / 100).toFixed(2))}</p>
            {/* <p className="card-text">{props.shortDescription}</p> */}
          </div>
        </div>
        <p className="card-text">{props.longDescription}</p>
      </div>
    </div>
  );
}

export default ProductListItem;
