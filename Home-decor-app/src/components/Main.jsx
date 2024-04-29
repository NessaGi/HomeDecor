import React from 'react';
import ArticleCard from './ArticleCard';
import AboutSection from './AboutSection';
import articles from '../data'; // Import du jeu de données

const Main = () => {
  return (
    <main>
      <h2>Naviguez selon vos envies</h2>
      <div className="articles-container">
        {articles.map((article, index) => (
          <ArticleCard key={index} title={article.title} imageUrl={article.imageUrl} />
        ))}
      </div>
      <AboutSection />
    </main>
  );
};

export default Main;
