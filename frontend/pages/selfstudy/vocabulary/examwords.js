import React from 'react';

const ExamWordsPage = () => {
    const examWords = [
        {
            word: 'Analyze',
            meaning: 'Examine (something) methodically and in detail, typically to explain and interpret it.',
            example: 'You should analyze the data carefully before making a conclusion.',
        },
        {
            word: 'Synthesize',
            meaning: 'Combine (a number of things) into a coherent whole.',
            example: 'We synthesize information from several sources to create our own report.',
        },
        {
            word: 'Assess',
            meaning: 'Evaluate or estimate the nature, ability, or quality of something.',
            example: 'The teacher will assess your understanding through a series of questions.',
        },
        {
            word: 'Elaborate',
            meaning: 'To explain something in more detail.',
            example: 'Please elaborate on your point so we can understand it better.',
        },
        {
            word: 'Justify',
            meaning: 'Show or prove to be right or reasonable.',
            example: 'You need to justify your answer with clear reasoning.',
        },
        {
            word: 'Evaluate',
            meaning: 'Form an idea of the amount, number, or value of; assess.',
            example: 'You must evaluate the pros and cons before making a decision.',
        },
        {
            word: 'Contrast',
            meaning: 'Compare in such a way as to emphasize differences.',
            example: 'The essay asked students to contrast two different theories.',
        },
        {
            word: 'Interpret',
            meaning: 'Explain the meaning of (information, words, or actions).',
            example: 'The student was asked to interpret the poem in her own words.',
        },
    ];

    const makeWordBoldWithLink = (word, sentence) => {
        const regex = new RegExp(`\\b(${word})\\b`, 'gi');
        const link = `https://en.wiktionary.org/wiki/${word.toLowerCase()}`;
        return sentence.replace(regex, `<strong>$1</strong>`);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Từ vựng cho kì thi</h1>
            <div style={styles.wordList}>
                {examWords.map((wordData, index) => {
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
                                        __html: `<strong>Example:</strong> ${makeWordBoldWithLink(
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

export default ExamWordsPage;
