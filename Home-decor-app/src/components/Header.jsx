import React from 'react';
import logo from '../images/LOGO_projet.png';

const Header = () => {
  return (
    <header style={{ backgroundColor: 'var(--main-color)', height: '55vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="logo" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', width: '250px', height: '100px', animation: 'rotateLogo 2s infinite linear' }}></div>
    </header>
  );
};

export default Header;
