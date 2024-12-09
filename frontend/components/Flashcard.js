import { useState } from 'react';

export default function Flashcard({ question, answer, onMark, status, type, image, audio }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleMark = (mark) => {
    onMark(mark);
    setFlipped(false);
  };

  return (
    <div className="w-80 h-72 perspective" onClick={handleFlip}>
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-primary-light-green text-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4">
          {image && (
            <img src={image} alt="Flashcard Image" className="w-24 h-24 mb-4 object-cover rounded-full" />
          )}
          <p className="text-xl text-center">{question}</p>
          {audio && (
            <audio controls className="mt-2">
              <source src={audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden bg-white text-gray-800 rounded-lg shadow-lg transform rotate-y-180 flex flex-col items-center justify-center p-4">
          <p className="text-xl text-center mb-4">{answer}</p>
          <div className="flex space-x-4">
            <button
              onClick={(e) => {
                e.stopPropagation(); 
                handleMark('known');
              }}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded"
            >
              Đã biết
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleMark('unknown');
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded"
            >
              Chưa biết
            </button>
          </div>
        </div>
      </div>
      {/* Hiển thị trạng thái */}
      <div className="mt-2 text-center">
        {status === 'known' ? (
          <span className="text-green-600 font-semibold">Đã biết</span>
        ) : (
          <span className="text-red-600 font-semibold">Chưa biết</span>
        )}
      </div>
    </div>
  );
}
