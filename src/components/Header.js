import React from 'react';
import ham from '../assets/images/ham.svg'
import '../assets/stylesheets/header.css'


function Header() {
  return (
    <div className="header">
      <div>
        <img src={ham} className="header-img-burger" />
      </div>
      <div>
        <img src='' />
      </div>
    </div>
  );
}

export default Header;