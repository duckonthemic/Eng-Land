// pages/selfstudy/grammar.js
"use client";

import { useState } from 'react';
import Link from 'next/link';
import grammarTopics from '../../data/grammarTopics';

export default function Grammar() {
  const [searchTerm, setSearchTerm] = useState('');

  // Lọc các chủ đề ngữ pháp dựa trên từ khóa tìm kiếm
  const filteredTopics = grammarTopics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-primary-light-green text-center">Ngữ Pháp Tiếng Anh</h1>

        {/* Tìm kiếm chủ đề ngữ pháp */}
        <div className="flex justify-center mb-8 space-x-4">
          <label htmlFor="search" className="sr-only">Tìm kiếm ngữ pháp</label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Tìm kiếm ngữ pháp..."
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

        {/* Hiển thị các chủ đề ngữ pháp */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTopics.length > 0 ? (
            filteredTopics.map(topic => (
              <div key={topic.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-neutral-dark">{topic.title}</h2>
                  <p className="text-gray-700 mb-4">
                    {topic.description}
                  </p>
                  <Link
                    href={`/selfstudy/grammar/${topic.id}`}
                    className="inline-block bg-primary-light-green text-white px-4 py-2 rounded hover:bg-primary-dark-green transition-colors duration-300"
                  >
                    Xem Chi Tiết
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-neutral-dark col-span-full">Không tìm thấy chủ đề ngữ pháp nào phù hợp.</p>
          )}
        </div>
      </div>
    </main>
  );
}
