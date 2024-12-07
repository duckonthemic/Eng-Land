import React from 'react';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';
import newsArticles from '../data/news';

const NewsPage = () => {
    return (
        <div>
            <div style={styles.container}>
                <h1 style={styles.header}>Tin Tức</h1>
                <div style={styles.newsGrid}>
                    {newsArticles.map((article, index) => (
                        <NewsCard
                            key={index}
                            imageUrl={article.imageUrl}
                            title={article.title}
                            description={article.description}
                            link={article.link}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

const styles = {
    container: {
        minHeight: '90vh',
        width: '100%',
        padding: '0 5%',
        paddingBottom: '12rem',
    },
    header: {
        fontSize: '2.25rem',
        fontWeight: 'bold',
        marginTop: '2.5rem',
        marginBottom: '3rem',
        color: '#38b2ac',
        textAlign: 'center',
    },
    newsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '5%',
        marginTop: '20px',
    },
};

export default NewsPage;
