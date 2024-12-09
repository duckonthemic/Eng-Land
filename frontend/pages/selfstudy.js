import Link from "next/link";

export default function SelfStudy() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12 text-primary-light-green text-center">
        Tự Học
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Từ điển */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12 text-primary-light-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 14l4-4 4 4m0 0v-4m0 4h-8"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-neutral-dark">
              Từ điển
            </h2>
            <p className="text-neutral-dark mb-4">
              Tra cứu từ điển Anh-Việt và Việt-Anh để hiểu rõ hơn về từ vựng và
              ý nghĩa của chúng.
            </p>
            <Link
              href="/selfstudy/dictionary"
              className="inline-block bg-primary-light-green text-white px-4 py-2 rounded hover:bg-primary-dark-green transition-colors duration-300"
            >
              Tra cứu từ điển
            </Link>
          </div>
        </div>

        {/* Từ vựng */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12 text-primary-light-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h2m4-4v4m0 0l-2-2m2 2l2-2"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-neutral-dark">
              Từ vựng
            </h2>
            <p className="text-neutral-dark mb-4">
              Học từ vựng qua flashcard, theo chủ đề, lưu từ vựng yêu thích,
              hoặc các từ thường gặp trong kì thi.
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/selfstudy/vocabulary/flashcards"
                  className="text-primary-light-green underline hover:text-primary-dark-green transition-colors duration-300"
                >
                  Flashcard Từ vựng mới
                </Link>
              </li>
              <li>
                <Link
                  href="/selfstudy/vocabulary/topics"
                  className="text-primary-light-green underline hover:text-primary-dark-green transition-colors duration-300"
                >
                  Học từ vựng theo chủ đề
                </Link>
              </li>
              <li>
                <Link
                  href="/selfstudy/vocabulary/favorites"
                  className="text-primary-light-green underline hover:text-primary-dark-green transition-colors duration-300"
                >
                  Từ vựng yêu thích
                </Link>
              </li>
              <li>
                <Link
                  href="/selfstudy/vocabulary/examwords"
                  className="text-primary-light-green underline hover:text-primary-dark-green transition-colors duration-300"
                >
                  Từ vựng thường gặp trong kì thi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Ngữ pháp */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12 text-primary-light-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-neutral-dark">
              Ngữ pháp
            </h2>
            <p className="text-neutral-dark mb-4">
              Tổng hợp các cấu trúc ngữ pháp giúp bạn nắm vững nền tảng ngữ pháp
              tiếng Anh.
            </p>
            <Link
              href="/selfstudy/grammar"
              className="inline-block bg-primary-light-green text-white px-4 py-2 rounded hover:bg-primary-dark-green transition-colors duration-300"
            >
              Xem các cấu trúc ngữ pháp
            </Link>
          </div>
        </div>

        {/* Mẫu câu giao tiếp thông dụng */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12 text-primary-light-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.641-4.346A7.962 7.962 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-neutral-dark">
              Các mẫu câu giao tiếp thông dụng
            </h2>
            <p className="text-neutral-dark mb-4">
              Học các mẫu câu giao tiếp thông dụng để sử dụng trong đời sống
              hàng ngày.
            </p>
            <Link
              href="/selfstudy/common-sentences"
              className="inline-block bg-primary-light-green text-white px-4 py-2 rounded hover:bg-primary-dark-green transition-colors duration-300"
            >
              Xem các mẫu câu giao tiếp
            </Link>
          </div>
        </div>

        {/* Học cùng nhau */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12 text-primary-light-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5V4H2v16h5m5-16a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-neutral-dark">
              Học cùng nhau
            </h2>
            <p className="text-neutral-dark mb-4">
              Không gian học nhóm để bạn có thể học cùng bạn bè và những người
              học khác.
            </p>
            <Link
              href="/selfstudy/study-together"
              className="inline-block bg-primary-light-green text-white px-4 py-2 rounded hover:bg-primary-dark-green transition-colors duration-300"
            >
              Tham gia không gian học nhóm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
