import React, { useEffect } from 'react';
import logo from '../assets/LOGO_projet.png';

const Header = () => {
  useEffect(() => {

    const logoElement = document.querySelector('.animated-logo');
    setTimeout(() => {
      logoElement.classList.add('active');
    }, 100);
  }, []);

  return (
    <header style={{ backgroundColor: 'var(--main-color)', height: '55vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div className="logo animated-logo" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', width: '400px', height: '400px',boxShadow: ' 15px 8px rgba(0, 0, 0, 0.1)' }}></div>
    </header>
  );
};
export default Header;
