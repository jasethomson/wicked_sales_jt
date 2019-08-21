import React from 'react';

function Header(props) {

  return (
    <div>
      <img className="logo" src="images/ws_logo2.png"></img>
      <h1>{props.text}</h1>
    </div>
  );
}

export default Header;
