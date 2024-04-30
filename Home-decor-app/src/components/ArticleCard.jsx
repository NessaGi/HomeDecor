import React, { useState } from 'react';


const ArticleCard = ({ title, imageUrl, videoUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <button onClick={openModal}>Play</button> 
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Piquez tes inspirations ici!</p>
            <video controls style={{ width: '60%', height: 'auto' }}>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleCard;

