"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateGroup() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nhóm học "${name}" đã được tạo!`);

    router.push("/selfstudy/study-together");
  };

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6 max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-primary-light-green text-center">
          Tạo Nhóm Học Mới
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Tên Nhóm Học
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-2 border-primary-light-green rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 mb-2">
              Mô Tả Nhóm Học
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border-2 border-primary-light-green rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
              rows="4"
              placeholder="Nhập mô tả nhóm học..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="meetingTime" className="block text-gray-700 mb-2">
              Thời Gian Họp
            </label>
            <input
              type="text"
              id="meetingTime"
              name="meetingTime"
              required
              value={meetingTime}
              onChange={(e) => setMeetingTime(e.target.value)}
              className="w-full border-2 border-primary-light-green rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
              placeholder="Ví dụ: Thứ Hai, 7:00 PM"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-light-green hover:bg-primary-dark-green text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
          >
            Tạo Nhóm
          </button>
        </form>
      </div>
    </main>
  );
}
