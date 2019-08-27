import React from 'react';

function Header(props) {
  return (
    <div className="row">
      <div className="col d-flex">
        <img className="logo" src="images/ws_logo2.png"></img>
        <h1 className="title">{props.text}</h1>
      </div>
      <div className="col">
        <i className="fas fa-shopping-cart"></i>
      </div>
    </div>
  );
}

export default Header;
