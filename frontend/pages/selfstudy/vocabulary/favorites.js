import React from 'react';

const FavoriteWordsPage = () => {
    const favoriteWords = [
        {
            word: 'Eloquent',
            meaning: 'Fluent or persuasive in speaking or writing.',
            example: 'Her eloquent speech moved the audience to tears.',
        },
        {
            word: 'Resilient',
            meaning: 'Able to withstand or recover quickly from difficult conditions.',
            example: 'The resilient team managed to bounce back after the setback.',
        },
        {
            word: 'Innovative',
            meaning: 'Featuring new methods; advanced and original.',
            example: 'The company is known for its innovative product designs.',
        },
        {
            word: 'Empathy',
            meaning: 'The ability to understand and share the feelings of others.',
            example: 'He showed great empathy towards his friend’s difficult situation.',
        },
        {
            word: 'Meticulous',
            meaning: 'Showing great attention to detail; very careful and precise.',
            example: 'She was meticulous in planning every aspect of the event.',
        },
        {
            word: 'Serendipity',
            meaning: 'The occurrence of events by chance in a happy or beneficial way.',
            example: 'Their meeting was pure serendipity, changing both their lives forever.',
        },
        {
            word: 'Tenacity',
            meaning: 'The quality or fact of being able to grip something firmly; determination.',
            example: 'His tenacity in pursuing his goals was admirable.',
        },
        {
            word: 'Altruism',
            meaning: 'The belief in or practice of disinterested and selfless concern for the well-being of others.',
            example: 'Her altruism was evident in her charitable works.',
        },
    ];

    const WorkLink = (word, sentence) => {
        const regex = new RegExp(`\\b(${word})\\b`, 'gi');
        const link = `https://en.wiktionary.org/wiki/${word.toLowerCase()}`;
        return sentence.replace(regex, `<strong>$1</strong>`);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Từ vựng yêu thích</h1>
            <div style={styles.wordList}>
                {favoriteWords.map((wordData, index) => {
                    const link = `https://en.wiktionary.org/wiki/${wordData.word.toLowerCase()}`;
                    return (
                        <a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.cardLink}
                        >
                            <div style={styles.card}>
                                <h2 style={styles.word}>{wordData.word}</h2>
                                <p style={styles.meaning}>
                                    <strong>Meaning:</strong> {wordData.meaning}
                                </p>
                                <p
                                    style={styles.example}
                                    dangerouslySetInnerHTML={{
                                        __html: `<strong>Example:</strong> ${WorkLink(
                                            wordData.word,
                                            wordData.example
                                        )}`,
                                    }}
                                ></p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem 5%',
        minHeight: '90vh',
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#38b2ac',
        textAlign: 'center',
        marginBottom: '2rem',
    },
    wordList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem',
    },
    cardLink: {
        textDecoration: 'none',
    },
    card: {
        backgroundColor: '#fff',
        padding: '1.5rem',
        minHeight: '200px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        textAlign: 'left',
        cursor: 'pointer',
    },
    word: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#00796b',
        marginBottom: '0.5rem',
        textAlign: 'center',
    },
    meaning: {
        fontSize: '1rem',
        color: '#555',
        marginBottom: '0.5rem',
    },
    example: {
        fontSize: '1rem',
        color: '#20ab55',
    },
};

export default FavoriteWordsPage;
