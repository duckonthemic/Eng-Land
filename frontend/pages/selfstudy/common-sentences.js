// pages/selfstudy/common-sentences.js
"use client";

import { useState } from 'react';
import Link from 'next/link';
import commonSentences from '../../data/commonSentences';

export default function CommonSentences() {
  const [searchTerm, setSearchTerm] = useState('');

  // Lọc các câu dựa trên từ khóa tìm kiếm
  const filteredSentences = commonSentences.filter(sentence =>
    sentence.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sentence.vietnamese.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-primary-light-green text-center">Các Mẫu Câu Giao Tiếp Thông Dụng</h1>

        {/* Tìm kiếm câu giao tiếp */}
        <div className="flex justify-center mb-8 space-x-4">
          <label htmlFor="word" className="sr-only">Tìm kiếm câu giao tiếp</label>
          <input
            type="text"
            id="word"
            name="word"
            placeholder="Tìm kiếm câu giao tiếp..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md border-2 border-primary-light-green rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Hiển thị các câu giao tiếp */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredSentences.length > 0 ? (
            filteredSentences.map(sentence => (
              <div key={sentence.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-neutral-dark">{sentence.category}</h2>
                  <p className="text-lg text-neutral-dark mb-4">
                    <strong>English:</strong> {sentence.english}
                  </p>
                  <p className="text-lg text-neutral-dark mb-4">
                    <strong>Tiếng Việt:</strong> {sentence.vietnamese}
                  </p>
                  {sentence.example && (
                    <p className="text-sm text-gray-600 mb-4">
                      <strong>Ví dụ:</strong> "{sentence.example}"
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-neutral-dark col-span-full">Không tìm thấy câu giao tiếp nào phù hợp.</p>
          )}
        </div>
      </div>
    </main>
  );
}
