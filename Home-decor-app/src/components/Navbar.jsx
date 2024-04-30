import React, { useState } from 'react';

const Navbar = () => {
  // État pour stocker le texte à afficher
  const [displayText, setDisplayText] = useState('');

  // Fonction pour gérer le clic sur les liens
  const handleClick = (text) => {
    setDisplayText(text);
  };

  return (
    <nav>
      <ul>
        {/* Lorsque vous cliquez sur les liens, la fonction handleClick est appelée avec le texte correspondant */}
        <li><a href="#" onClick={() => handleClick('À propos de nous')}>À propos de nous</a></li>
        <li><a href="#" onClick={() => handleClick('Sur Instagram : Home Décor')}>Contactez nous</a></li>
      </ul>
      {/* Afficher le texte correspondant */}
      <div>{displayText}</div>
    </nav>
  );
};

export default Navbar;
