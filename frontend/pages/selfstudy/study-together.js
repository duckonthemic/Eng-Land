// pages/selfstudy/study-together.js
"use client";

import { useState } from 'react';
import Link from 'next/link';
import studyGroups from '../../data/studyGroups';

export default function StudyTogether() {
  const [searchTerm, setSearchTerm] = useState('');

  // Lọc các nhóm học dựa trên từ khóa tìm kiếm
  const filteredGroups = studyGroups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hàm để tham gia nhóm học (có thể mở rộng để xử lý logic tham gia thực tế)
  const handleJoinGroup = (groupId) => {
    alert(`Bạn đã tham gia nhóm học với ID: ${groupId}`);
    // Ở đây, bạn có thể thêm logic để cập nhật số lượng thành viên hoặc gọi API để tham gia nhóm
  };

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-primary-light-green text-center">Học Cùng Nhau</h1>

        {/* Tìm kiếm nhóm học */}
        <div className="flex justify-center mb-8 space-x-4">
          <label htmlFor="search" className="sr-only">Tìm kiếm nhóm học</label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Tìm kiếm nhóm học..."
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

        {/* Nút Tạo Nhóm Học Mới */}
        <div className="flex justify-center mb-8">
          <Link
            href="/selfstudy/create-group"
            className="bg-primary-light-green hover:bg-primary-dark-green text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Tạo Nhóm Học Mới
          </Link>
        </div>

        {/* Hiển thị các nhóm học */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredGroups.length > 0 ? (
            filteredGroups.map(group => (
              <div key={group.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-neutral-dark">{group.name}</h2>
                  <p className="text-gray-700 mb-4">
                    {group.description}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Số lượng thành viên:</strong> {group.members}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Thời gian họp:</strong> {group.meetingTime}
                  </p>
                  <button
                    onClick={() => handleJoinGroup(group.id)}
                    className="w-full bg-primary-light-green hover:bg-primary-dark-green text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    Tham Gia
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-neutral-dark col-span-full">Không tìm thấy nhóm học nào phù hợp.</p>
          )}
        </div>
      </div>
    </main>
  );
}
