import { useRouter } from 'next/router';
import newsArticles from '../../data/news';

const NewsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the article based on the ID from the URL
  const article = newsArticles.find((article) => article.id === id);

  // Handle case where article is not found
  if (!article) {
    return (
      <div style={styles.notFoundContainer}>
        <h1 style={styles.notFoundTitle}>404</h1>
        <p style={styles.notFoundMessage}>Oops! The article you're looking for doesn't exist.</p>
      </div>
    );
  }

  // Destructure article data
  const { title, description, imageUrl, benefits } = article;

  return (
    <div style={styles.container}>
      {imageUrl && <img src={imageUrl} alt={title} style={styles.image} />}
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.intro}>{description}</p>

      {benefits.map((benefit) => (
        <section key={benefit.id} style={styles.section}>
          <div style={{ paddingRight: '15px' }}>
            <h2 style={styles.subTitle}>{benefit.title}</h2>
            <p style={styles.content}>{benefit.content}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

// Styles
const styles = {
  container: {
    maxWidth: '70vw',
    margin: '40px auto',
    padding: '20px 100px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Roboto', sans-serif",
  },
  image: {
    width: '100%',
    maxHeight: '400px',
    borderRadius: '10px',
    marginBottom: '20px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '2.8rem',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
    color: '#00796b',
  },
  intro: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#666',
    lineHeight: '1.8',
    textAlign: 'justify',
  },
  section: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '25px',
    padding: '15px',
    paddingLeft: '25px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
  },
  subTitle: {
    fontSize: '1.6rem',
    marginBottom: '10px',
    color: '#444',
    fontWeight: 'bold',
  },
  content: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.7',
    textAlign: 'justify',
  },
  conclusion: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#e8f5e9',
    borderRadius: '8px',
    color: '#2e7d32',
    textAlign: 'center',
  },
  notFoundContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  notFoundTitle: {
    fontSize: '6rem',
    color: '#999',
    marginBottom: '20px',
  },
  notFoundMessage: {
    fontSize: '1.5rem',
    color: '#555',
  },
};

export default NewsPage;