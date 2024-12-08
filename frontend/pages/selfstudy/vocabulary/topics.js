import React from 'react';
import Link from 'next/link';

const TopicPage = () => {
    const topics = [
        {
            title: 'Chủ đề môi trường',
            description: 'Tự tin thảo luận về các vấn đề về môi trường.',
            image: 'https://www.aimsindia.com/wp-content/uploads/2022/06/world-environment.png',
            link: 'topics/environment',
        },
        {
            title: 'Chủ đề gia đình',
            description: 'Học cách bày tỏ tình yêu, hỗ trợ và sự thấu hiểu trong gia đình bạn.',
            image: 'https://luyenthiielts7.com/wp-content/uploads/2020/10/Family-Silhouette-3.jpg',
            link: 'topics/family',
        },
        {
            title: 'Chủ đề công việc',
            description: 'Nâng cao trình độ giao tiếp của bạn và đạt được thành công trong sự nghiệp.',
            image: 'https://d1vcqlflm6aitx.cloudfront.net/images/800x100p/1557364192-work_while_you_study_banner.webp',
            link: 'topics/work',
        },
    ];

    return (
        <div>
            <div style={styles.container}>
                <h1 style={styles.header}>Từ vựng theo chủ đề</h1>
                <div style={styles.topicGrid}>
                    {topics.map((topic, index) => (
                        <Link key={index} href={topic.link} style={{ textDecoration: 'none' }}>
                            <div style={styles.card}>
                                <div style={styles.imageWrapper}>
                                    <img src={topic.image} alt={topic.title} style={styles.image} />
                                </div>
                                <div style={styles.cardContent}>
                                    <h2 style={styles.title}>{topic.title}</h2>
                                    <p style={styles.description}>{topic.description}</p>
                                    <button style={styles.button}>Learn More</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
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
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginTop: '2.5rem',
        marginBottom: '3rem',
        color: '#38b2ac',
        textAlign: 'center',
    },
    topicGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '4rem',
        marginTop: '20px',
    },
    card: {
        display: 'flex',
        height: '400px',
        flexDirection: 'column',
        border: '1px solid #ddd',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        backgroundColor: '#e0f7fa',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
    },
    imageWrapper: {
        width: '100%',
        height: '250px',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        objectFit: 'cover',
    },
    cardContent: {
        padding: '1rem',
        textAlign: 'center',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '0.5rem',
    },
    description: {
        fontSize: '1rem',
        color: '#666',
        marginBottom: '1rem',
    },
    button: {
        backgroundColor: '#38b2ac',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
};

export default TopicPage;
