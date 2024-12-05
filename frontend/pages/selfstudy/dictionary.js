// pages/dictionary.js
"use client";

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Dictionary() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!word.trim()) return;

    setLoading(true);
    setError(null);
    setDefinition(null);

    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setDefinition(response.data[0]); // Lấy kết quả từ API
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Không tìm thấy từ này trong từ điển.');
      } else {
        setError('Đã xảy ra lỗi. Vui lòng thử lại sau.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setWord('');
    setDefinition(null);
    setError(null);
  };

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-primary-light-green text-center">Từ Điển Anh-Việt</h1>

        {/* Tìm kiếm từ */}
        <form onSubmit={handleSearch} className="flex flex-col items-center mb-8">
          <label htmlFor="word" className="sr-only">Tìm kiếm từ</label>
          <input
            type="text"
            id="word"
            name="word"
            placeholder="Nhập từ bạn muốn tìm"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="w-full max-w-md border-2 border-primary-light-green rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
          />
          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-primary-light-green hover:bg-primary-dark-green text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Đang tìm kiếm...' : 'Tìm Kiếm'}
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-300"
            >
              Xóa
            </button>
          </div>
        </form>

        {/* Hiển thị kết quả từ điển */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {definition && (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-dark">
              Kết quả tìm kiếm cho: <span className="text-primary-light-green">{word}</span>
            </h2>

            {definition.phonetic && (
              <p className="mb-4 text-lg text-neutral-dark">
                <strong>Phiên âm:</strong> {definition.phonetic}
              </p>
            )}

            {definition.meanings.map((meaning, index) => (
              <section key={index} className="mb-6">
                <h3 className="text-xl font-bold text-neutral-dark">
                  {meaning.partOfSpeech}
                </h3>
                <ul className="list-disc pl-5 mt-2 text-neutral-dark">
                  {meaning.definitions.map((def, defIndex) => (
                    <li key={defIndex} className="mb-2">
                      {def.definition}
                      {def.example && (
                        <p className="text-sm text-gray-600 mt-1">
                          Ví dụ: "{def.example}"
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            {definition.sourceUrls && definition.sourceUrls.length > 0 && (
              <div className="mt-4">
                <Link
                  href={definition.sourceUrls[0]}
                  className="text-primary-light-green underline hover:text-primary-dark-green transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Xem thêm tại nguồn
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
