import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';

const ArticleDetail = () => {
  const location = useLocation();
  const article = location.state?.article;

  // If someone accesses the route directly without state, redirect to home
  if (!article) return <Navigate to="/" />;

  return (
    <div className="detail-container">
      <Link to="/" className="back-btn">← Back to News</Link>
      <h1>{article.title}</h1>
      <p style={{ color: '#555', margin: '10px 0' }}>
        By {article.author || 'Unknown'} | {new Date(article.publishedAt).toLocaleString()}
      </p>
      <img src={article.urlToImage} alt={article.title} />
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{article.content || article.description}</p>
      
      <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '20px', color: '#007bff' }}>
        Read original article on publisher's site →
      </a>
    </div>
  );
};

export default ArticleDetail;