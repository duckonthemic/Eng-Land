// components/NewsCard.js
import React from 'react';

const NewsCard = ({ title, description, year, score, imageUrl, link }) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>
      <a href={link} style={styles.link}>Xem thêm</a>
    </div>
  );
};

// Styles for NewsCard
const styles = {
  card: {
    background: '#e0f7fa',
    borderRadius: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
  },
  title: {
    fontSize: '1.5rem',
    color: '#00796b',
    margin: '10px 0',
    fontWeight: 'bold',
  },
  description: {
    color: '#555',
    fontSize: '0.9rem',
    margin: '10px 0',
  },
  link: {
    background: '#00796b',
    color: '#ffffff',
    padding: '10px 15px',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '10px',
    marginBottom: '10px',
  },
};

export default NewsCard;