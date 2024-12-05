// pages/selfstudy/vocabulary/flashcards.js
"use client";

import { useState, useEffect } from 'react';
import vocabularyFlashcards from '../../../data/flashcards';
import Flashcard from '../../../components/Flashcard';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

// Kích hoạt plugin isSameOrAfter
dayjs.extend(isSameOrAfter);

export default function VocabularyFlashcardsPage() {
  const [flashcards, setFlashcards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionFlashcards, setSessionFlashcards] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState({
    question: '',
    answer: '',
    tags: '',
    image: '',
    audio: '',
  });

  // Lấy flashcards từ Local Storage hoặc sử dụng dữ liệu gốc
  useEffect(() => {
    const storedFlashcards = JSON.parse(localStorage.getItem('vocabularyFlashcards'));
    if (storedFlashcards && storedFlashcards.length > 0) {
      setFlashcards(storedFlashcards);
    } else {
      setFlashcards(vocabularyFlashcards);
    }
  }, []);

  // Lưu flashcards vào Local Storage mỗi khi chúng thay đổi
  useEffect(() => {
    localStorage.setItem('vocabularyFlashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  // Lọc flashcards dựa trên từ khóa tìm kiếm và tag
  const filteredFlashcards = flashcards.filter(card => {
    const matchesSearch =
      card.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? card.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  // Lấy danh sách các tags duy nhất để hiển thị trong dropdown
  const tags = [...new Set(flashcards.flatMap(card => card.tags))];

  // Hàm để đánh dấu Flashcard
  const handleMark = (id, mark) => {
    setFlashcards(prevFlashcards =>
      prevFlashcards.map(card => {
        if (card.id === id) {
          const today = dayjs().format('YYYY-MM-DD');
          let newInterval = 1;
          if (mark === 'known') {
            newInterval = card.reviewInterval ? card.reviewInterval * 2 : 2; // Tăng khoảng cách ôn tập
          }
          return {
            ...card,
            status: mark,
            lastReviewed: today,
            reviewInterval: newInterval,
          };
        }
        return card;
      })
    );
  };

  // Hàm để chọn Flashcards cần ôn tập
  const selectFlashcardsForReview = () => {
    const today = dayjs();
    const cardsToReview = flashcards.filter(card => {
      if (card.lastReviewed) {
        const nextReviewDate = dayjs(card.lastReviewed).add(card.reviewInterval, 'day');
        return today.isSameOrAfter(nextReviewDate);
      }
      return true; // Nếu chưa được xem lần nào, thêm vào danh sách
    });
    setSessionFlashcards(cardsToReview.length > 0 ? cardsToReview : flashcards);
    setCurrentIndex(0);
  };

  // Hàm để bắt đầu một phiên học mới
  const startStudySession = () => {
    selectFlashcardsForReview();
  };

  // Hàm để chuyển sang Flashcard tiếp theo trong phiên học
  const nextFlashcard = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % sessionFlashcards.length);
  };

  // Hàm để xáo trộn Flashcards
  const shuffleFlashcards = () => {
    const shuffled = [...filteredFlashcards].sort(() => Math.random() - 0.5);
    setSessionFlashcards(shuffled);
    setCurrentIndex(0);
  };

  // Hàm để thêm Flashcard mới
  const addFlashcard = (e) => {
    e.preventDefault();
    if (!newFlashcard.question || !newFlashcard.answer) {
      alert('Vui lòng nhập câu hỏi và câu trả lời.');
      return;
    }
    const tagsArray = newFlashcard.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    const newCard = {
      id: flashcards.length > 0 ? flashcards[flashcards.length - 1].id + 1 : 1,
      question: newFlashcard.question,
      answer: newFlashcard.answer,
      tags: tagsArray,
      level: 'Beginner', // Bạn có thể cho phép người dùng chọn level nếu muốn
      status: 'unknown',
      lastReviewed: null,
      reviewInterval: 1,
      image: newFlashcard.image,
      audio: newFlashcard.audio,
    };
    setFlashcards([...flashcards, newCard]);
    setNewFlashcard({ question: '', answer: '', tags: '', image: '', audio: '' });
  };

  // Hàm để xóa Flashcard
  const deleteFlashcard = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa flashcard này không?')) {
      setFlashcards(prevFlashcards => prevFlashcards.filter(card => card.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-primary-light-green text-center">Flashcards Vocabulary</h1>

        {/* Tìm kiếm và lọc flashcards */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Tìm kiếm flashcards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 border-2 border-primary-light-green rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
          />
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full md:w-1/4 border-2 border-primary-light-green rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
          >
            <option value="">Tất cả Tags</option>
            {tags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
          {(searchTerm || selectedTag) && (
            <button
              onClick={() => { setSearchTerm(''); setSelectedTag(''); }}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Thêm Flashcard mới */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Thêm Flashcard Mới</h2>
          <form onSubmit={addFlashcard} className="flex flex-col items-center space-y-4">
            <input
              type="text"
              placeholder="Câu hỏi"
              value={newFlashcard.question}
              onChange={(e) => setNewFlashcard({ ...newFlashcard, question: e.target.value })}
              className="w-full md:w-1/2 border-2 border-primary-light-green rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
            />
            <input
              type="text"
              placeholder="Câu trả lời"
              value={newFlashcard.answer}
              onChange={(e) => setNewFlashcard({ ...newFlashcard, answer: e.target.value })}
              className="w-full md:w-1/2 border-2 border-primary-light-green rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
            />
            <input
              type="text"
              placeholder="Tags (cách nhau bằng dấu phẩy)"
              value={newFlashcard.tags}
              onChange={(e) => setNewFlashcard({ ...newFlashcard, tags: e.target.value })}
              className="w-full md:w-1/2 border-2 border-primary-light-green rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
            />
            <input
              type="text"
              placeholder="Link hình ảnh (URL)"
              value={newFlashcard.image}
              onChange={(e) => setNewFlashcard({ ...newFlashcard, image: e.target.value })}
              className="w-full md:w-1/2 border-2 border-primary-light-green rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
            />
            <input
              type="text"
              placeholder="Link âm thanh (URL)"
              value={newFlashcard.audio}
              onChange={(e) => setNewFlashcard({ ...newFlashcard, audio: e.target.value })}
              className="w-full md:w-1/2 border-2 border-primary-light-green rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
            >
              Thêm Flashcard
            </button>
          </form>
        </div>

        {/* Các nút chức năng */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={startStudySession}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
          >
            Bắt đầu học
          </button>
          <button
            onClick={shuffleFlashcards}
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
          >
            Xáo trộn Flashcards
          </button>
        </div>

        {/* Phiên học tập */}
        {sessionFlashcards.length > 0 && (
          <div className="flex flex-col items-center">
            <Flashcard
              question={sessionFlashcards[currentIndex].question}
              answer={sessionFlashcards[currentIndex].answer}
              status={sessionFlashcards[currentIndex].status}
              onMark={(mark) => handleMark(sessionFlashcards[currentIndex].id, mark)}
              type={sessionFlashcards[currentIndex].tags.includes('Translation') ? 'translation' : 'definition'}
              image={sessionFlashcards[currentIndex].image}
              audio={sessionFlashcards[currentIndex].audio}
            />
            <button
              onClick={nextFlashcard}
              className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
            >
              Flashcard Tiếp Theo
            </button>
          </div>
        )}

        {/* Hiển thị các flashcards đã lọc */}
        {!sessionFlashcards.length > 0 && (
          <>
            {filteredFlashcards.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-8">
                {filteredFlashcards.map(card => (
                  <div key={card.id} className="relative">
                    <Flashcard
                      question={card.question}
                      answer={card.answer}
                      status={card.status}
                      onMark={(mark) => handleMark(card.id, mark)}
                      type={card.tags.includes('Translation') ? 'translation' : 'definition'}
                      image={card.image}
                      audio={card.audio}
                    />
                    <button
                      onClick={() => deleteFlashcard(card.id)}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-neutral-dark">Không tìm thấy flashcards nào phù hợp.</p>
            )}
          </>
        )}

        {/* Hiển thị thống kê */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Thống kê học tập</h2>
          <p className="text-lg">
            Tổng số Flashcards: <span className="font-bold">{flashcards.length}</span>
          </p>
          <p className="text-lg">
            Đã biết: <span className="font-bold text-green-600">{flashcards.filter(card => card.status === 'known').length}</span>
          </p>
          <p className="text-lg">
            Chưa biết: <span className="font-bold text-red-600">{flashcards.filter(card => card.status === 'unknown').length}</span>
          </p>
        </div>
      </div>
    </main>
  );
}
