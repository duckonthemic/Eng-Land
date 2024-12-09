  "use client";

  import { useState } from "react";
  import Link from "next/link";
  import studyGroups from "../../data/studyGroups";

  export default function StudyTogether() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredGroups = studyGroups.filter(
      (group) =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleJoinGroup = (groupId) => {
      alert(`Bạn đã tham gia nhóm học với ID: ${groupId}`);
    };

    return (
      <main className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-10 text-center text-indigo-700">
            Học Cùng Nhau
          </h1>

          {/* Tìm kiếm nhóm học */}
          <div className="flex justify-center mb-10 space-x-4">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Tìm kiếm nhóm học..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md border-2 border-indigo-500 rounded-full px-6 py-3 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-colors duration-300"
              >
                Xóa
              </button>
            )}
          </div>

          {/* Nút Tạo Nhóm Học Mới */}
          <div className="flex justify-center mb-10">
            <Link
              href="/selfstudy/create-group"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 flex items-center"
            >
              Tạo Nhóm Học Mới
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </Link>
          </div>

          {/* Hiển thị các nhóm học */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group) => (
                <div
                  key={group.id}
                  className="bg-white shadow-2xl rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3 text-indigo-600">
                      {group.name}
                    </h2>
                    <p className="text-gray-700 mb-5">{group.description}</p>
                    <p className="text-sm text-gray-500 mb-3">
                      <strong>Số lượng thành viên:</strong> {group.members}
                    </p>
                    <p className="text-sm text-gray-500 mb-5">
                      <strong>Thời gian họp:</strong> {group.meetingTime}
                    </p>
                    <button
                      onClick={() => handleJoinGroup(group.id)}
                      className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
                    >
                      Tham Gia
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-indigo-700 col-span-full">
                Không tìm thấy nhóm học nào phù hợp.
              </p>
            )}
          </div>
        </div>
      </main>
    );
  }
