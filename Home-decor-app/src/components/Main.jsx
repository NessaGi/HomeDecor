import React from 'react';
import ArticleCard from './ArticleCard';
import AboutSection from './AboutSection';

const Main = () => {
  return (
    <main>
      <h2>Naviguez selon vos envies</h2>
      <div className="articles-container">
        <ArticleCard title="DECORATION ETHNIQUE" imageUrl="./images/ETHNIQUE.jpg" />
        <ArticleCard title="DECORATION BOHEME" imageUrl="./images/BOHEME.jpg" />
        <ArticleCard title="DECORATION MODERNE" imageUrl="./images/MODERNE.png" />
        <ArticleCard title="DECORATION INDUSTRIELLE" imageUrl="./images/INDUSTRIEL.jpg" />
      </div>
      <AboutSection />
    </main>
  );
};

export default Main;