import React from 'react';

function Header(props) {

  return (
    <div className="d-flex flex-column">
      <img className="logo" src="images/ws_logo2.png"></img>
      <h1 className="title">{props.text}</h1>
    </div>
  );
}

export default Header;
