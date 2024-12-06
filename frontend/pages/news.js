import React from 'react';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';

// Test data
const newsArticles = [
    {
        imageUrl: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/425981484_3496243250630645_364402494530764449_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGyY_JXDlWSTRKl-sA7uS6vhgpE4-71yrqGCkTj7vXKujNiG0vM5oZJN4NJfMg_HKYOmM4o-fnVbiA-_injms6e&_nc_ohc=t8KW7u8McX0Q7kNvgFO7iB1&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=ASXd-U_85ZK68bn5fTi3ZS6&oh=00_AYDJVJhxy5U5vYR5mA6NAMat37TsZPAL5I04Fp2azt6lvQ&oe=675886C9',
        title: 'Thinh qua dep trai',
        description: 'Khong the cuong noi...',
        link: '#',
    },
    {
        imageUrl: 'https://kenh14cdn.com/203336854389633024/2022/4/4/photo-1-1649080899764791043698.jpg',
        title: 'Khong the can buoc dc Ma gaming',
        description: 'Nhung loi dam tieu qua loa linh tinh',
        link: '#',
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/IzSYlr3VI1A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBB7k5cAJuq4IzTSzDXFZkbOWlsPw',
        title: 'Hoc tieng Anh qua loi bai hat',
        description: 'Anh hen em ligmaball',
        link: '#',
    },
];

const NewsPage = () => {
    return (
    <div>
        <div style={styles.container}>
            <h1 style={styles.header}>Tin Tức</h1>
            <div style={styles.newsGrid}>
                {newsArticles.map((article, index) => (
                    <NewsCard
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
