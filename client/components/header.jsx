import React from 'react';

function Header(props) {
  return (
    <div className="row">
      <div className="col d-flex">
        {/* <img className="logo" src="images/ws_logo2.png"></img> */}
        <h1 className="title ml-2">{props.text}</h1>
      </div>
      <div className="col d-flex justify-content-end align-self-end mr-2">
        <div className="mr-2 title">{props.cartItemCount} Items</div>
        <i className="fas fa-shopping-cart fa-2x" onClick={() => props.setView('cart', {})}></i>
      </div>
    </div>
  );
}

export default Header;
