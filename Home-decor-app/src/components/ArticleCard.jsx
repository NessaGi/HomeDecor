import React from 'react';

const ArticleCard = ({ title, imageUrl }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <a href="#">Read</a>
    </div>
  );
};

export default ArticleCard;