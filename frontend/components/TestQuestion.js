import { useState } from 'react';

const TestQuestion = ({ questionData, userAnswers, setUserAnswers, isSubmitted }) => {
  const { id, category, question, options, answer } = questionData;
  const selectedOption = userAnswers[id] || '';

  const handleOptionChange = (option) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: option,
    }));
  };

  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">
          {category}
        </span>
        <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
          Câu {id}
        </span>
      </div>
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="radio"
            id={`question-${id}-option-${index}`}
            name={`question-${id}`}
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
            className="mr-2"
            disabled={isSubmitted}
          />
          <label htmlFor={`question-${id}-option-${index}`} className="cursor-pointer">
            {option}
          </label>
        </div>
      ))}
      {isSubmitted && (
        <p
          className={`mt-4 font-semibold ${
            selectedOption === answer ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {selectedOption === answer
            ? 'Chính xác!'
            : `Sai! Đáp án đúng là "${answer}".`}
        </p>
      )}
    </div>
  );
};

export default TestQuestion;
