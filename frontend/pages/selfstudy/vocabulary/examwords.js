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
        {
            word: 'Summarize',
            meaning: 'Give a brief statement of the main points of (something).',
            example: 'Can you summarize the main points of the lecture?',
        },
        {
            word: 'Infer',
            meaning: 'Deduce or conclude (information) from evidence and reasoning rather than from explicit statements.',
            example: 'From the data, we can infer that the population is growing.',
        },
        {
            word: 'Compare',
            meaning: 'Estimate, measure, or note the similarity or dissimilarity between.',
            example: 'Compare the two products and choose the best one.',
        },
        {
            word: 'Describe',
            meaning: 'Give a detailed account in words of.',
            example: 'Please describe the process in detail.',
        },
        {
            word: 'Explain',
            meaning: 'Make (an idea, situation, or problem) clear to someone by describing it in more detail or revealing relevant facts or ideas.',
            example: 'Can you explain how this machine works?',
        },
        {
            word: 'Define',
            meaning: 'State or describe exactly the nature, scope, or meaning of.',
            example: 'How would you define success?',
        },
        {
            word: 'Illustrate',
            meaning: 'Explain or make (something) clear by using examples, charts, pictures, etc.',
            example: 'The professor used a diagram to illustrate the concept.',
        },
        {
            word: 'Classify',
            meaning: 'Arrange (a group of people or things) in classes or categories according to shared qualities or characteristics.',
            example: 'We need to classify the documents by date.',
        },
        {
            word: 'Argue',
            meaning: 'Give reasons or cite evidence in support of an idea, action, or theory, typically with the aim of persuading others to share one\'s view.',
            example: 'She argued that the new policy would benefit the company.',
        },
        {
            word: 'Debate',
            meaning: 'Argue about (a subject), especially in a formal manner.',
            example: 'The candidates will debate the issues on live television.',
        },
        {
            word: 'Critique',
            meaning: 'Evaluate (a theory or practice) in a detailed and analytical way.',
            example: 'The professor critiqued the student\'s thesis.',
        },
        {
            word: 'Formulate',
            meaning: 'Create or devise methodically (a strategy or a proposal).',
            example: 'We need to formulate a plan to improve sales.',
        },
        {
            word: 'Investigate',
            meaning: 'Carry out a systematic or formal inquiry to discover and examine the facts of (an incident, allegation, etc.) so as to establish the truth.',
            example: 'The police are investigating the crime.',
        },
        {
            word: 'Summarize',
            meaning: 'Give a brief statement of the main points of (something).',
            example: 'Can you summarize the main points of the lecture?',
        },
        {
            word: 'Predict',
            meaning: 'Say or estimate that (a specified thing) will happen in the future or will be a consequence of something.',
            example: 'Experts predict that the economy will improve next year.',
        },
        {
            word: 'Propose',
            meaning: 'Put forward (an idea or plan) for consideration or discussion by others.',
            example: 'She proposed a new strategy for the project.',
        },
        {
            word: 'Outline',
            meaning: 'Give a summary of (something).',
            example: 'The report outlines the main points of the study.',
        },
        {
            word: 'Summarize',
            meaning: 'Give a brief statement of the main points of (something).',
            example: 'Can you summarize the main points of the lecture?',
        },
        {
            word: 'Hypothesize',
            meaning: 'Put (something) forward as a hypothesis.',
            example: 'Scientists hypothesize that the disease is caused by a virus.',
        },
        {
            word: 'Examine',
            meaning: 'Inspect (someone or something) in detail to determine their nature or condition; investigate thoroughly.',
            example: 'The doctor examined the patient carefully.',
        },
        {
            word: 'Articulate',
            meaning: 'Express (an idea or feeling) fluently and coherently.',
            example: 'She was able to articulate her thoughts clearly during the presentation.',
        },
        {
            word: 'Constitute',
            meaning: 'Be (a part) of a whole.',
            example: 'These documents constitute the official record of the proceedings.',
        },
        {
            word: 'Depict',
            meaning: 'Show or represent by a drawing, painting, or other art form.',
            example: 'The mural depicts scenes from the city\'s history.',
        },
        {
            word: 'Facilitate',
            meaning: 'Make (an action or process) easy or easier.',
            example: 'The new software will facilitate the task of data analysis.',
        },
        {
            word: 'Implement',
            meaning: 'Put (a decision, plan, agreement, etc.) into effect.',
            example: 'The company decided to implement the new policy next month.',
        },
        {
            word: 'Mitigate',
            meaning: 'Make less severe, serious, or painful.',
            example: 'Measures need to be taken to mitigate the environmental impact of the project.',
        },
        {
            word: 'Perceive',
            meaning: 'Become aware or conscious of (something); come to realize or understand.',
            example: 'He could not perceive any difference between the two designs.',
        },
        {
            word: 'Reiterate',
            meaning: 'Say something again or a number of times, typically for emphasis or clarity.',
            example: 'The teacher reiterated the importance of completing the assignments on time.',
        },
        {
            word: 'Substantiate',
            meaning: 'Provide evidence to support or prove the truth of.',
            example: 'The scientist was able to substantiate his theory with extensive research.',
        },
        {
            word: 'Undermine',
            meaning: 'Erode the base or foundation of (a rock formation).',
            example: 'The constant criticism was beginning to undermine her confidence.',
        },
        {
            word: 'Validate',
            meaning: 'Check or prove the validity or accuracy of (something).',
            example: 'The results of the experiment validated the hypothesis.',
        },
        {
            word: 'Accentuate',
            meaning: 'Make more noticeable or prominent.',
            example: 'The bright colors accentuate the design of the room.',
        },
        {
            word: 'Advocate',
            meaning: 'Publicly recommend or support.',
            example: 'She advocates for equal rights for all citizens.',
        },
        {
            word: 'Bolster',
            meaning: 'Support or strengthen; prop up.',
            example: 'The new evidence bolstered his argument.',
        },
        {
            word: 'Consolidate',
            meaning: 'Make (something) physically stronger or more solid.',
            example: 'The company plans to consolidate its operations in one location.',
        },
        {
            word: 'Disseminate',
            meaning: 'Spread (something, especially information) widely.',
            example: 'The organization aims to disseminate knowledge about healthy living.',
        },
        {
            word: 'Exacerbate',
            meaning: 'Make (a problem, bad situation, or negative feeling) worse.',
            example: 'The new law only exacerbated the problem of illegal immigration.',
        },
        {
            word: 'Exemplify',
            meaning: 'Be a typical example of.',
            example: 'The building exemplifies the architectural style of the period.',
        },
        {
            word: 'Galvanize',
            meaning: 'Shock or excite (someone) into taking action.',
            example: 'The speech galvanized the crowd into action.',
        },
        {
            word: 'Incorporate',
            meaning: 'Take in or contain (something) as part of a whole; include.',
            example: 'The new design incorporates the latest technology.',
        },
        {
            word: 'Instigate',
            meaning: 'Bring about or initiate (an action or event).',
            example: 'The government will instigate new measures to combat crime.',
        },
        {
            word: 'Negate',
            meaning: 'Nullify; make ineffective.',
            example: 'The benefits of the policy were negated by the high costs.',
        },
        {
            word: 'Obfuscate',
            meaning: 'Render obscure, unclear, or unintelligible.',
            example: 'The report was written in a way that obfuscated its main points.',
        },
        {
            word: 'Proliferate',
            meaning: 'Increase rapidly in numbers; multiply.',
            example: 'The use of smartphones has proliferated in recent years.',
        },
        {
            word: 'Scrutinize',
            meaning: 'Examine or inspect closely and thoroughly.',
            example: 'The detective scrutinized the evidence carefully.',
        },
        {
            word: 'Supersede',
            meaning: 'Take the place of (a person or thing previously in authority or use); supplant.',
            example: 'The new regulations will supersede the old ones.',
        },
        {
            word: 'Transcend',
            meaning: 'Be or go beyond the range or limits of (something abstract, typically a conceptual field or division).',
            example: 'Her performance transcended all expectations.',
        },
        {
            word: 'Utilize',
            meaning: 'Make practical and effective use of.',
            example: 'The company plans to utilize solar energy to power its operations.',
        },
        {
            word: 'Vindicate',
            meaning: 'Clear (someone) of blame or suspicion.',
            example: 'The evidence vindicated her claim of innocence.',
        },
        {
            word: 'Yield',
            meaning: 'Produce or provide (a natural, agricultural, or industrial product).',
            example: 'The farm yields enough produce to supply the local market.',
        }
    ];

    const makeWordBoldWithLink = (word, sentence) => {
        const regex = new RegExp(`\\b(${word})\\b`, 'gi');
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
