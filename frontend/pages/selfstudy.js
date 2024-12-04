// pages/selfstudy.js
import Link from 'next/link';

export default function SelfStudy() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-6 text-primary-light-green">Tự Học</h1>

      {/* Từ điển */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-neutral-light mb-4">Từ điển</h2>
        <p className="text-neutral-light mb-2">
          Tra cứu từ điển Anh-Việt và Việt-Anh để hiểu rõ hơn về từ vựng và ý nghĩa của chúng.
        </p>
        <Link href="/selfstudy/dictionary" className="text-primary-light-green underline">
          Tra cứu từ điển
        </Link>
      </div>

      {/* Từ vựng */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-neutral-light mb-4">Từ vựng</h2>
        <p className="text-neutral-light mb-2">
          Học từ vựng qua flashcard, theo chủ đề, lưu từ vựng yêu thích, hoặc các từ thường gặp trong kì thi.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><Link href="/selfstudy/vocabulary/flashcards" className="text-primary-light-green underline">Flashcard Từ vựng mới</Link></li>
          <li><Link href="/selfstudy/vocabulary/topics" className="text-primary-light-green underline">Học từ vựng theo chủ đề</Link></li>
          <li><Link href="/selfstudy/vocabulary/favorites" className="text-primary-light-green underline">Từ vựng yêu thích</Link></li>
          <li><Link href="/selfstudy/vocabulary/examwords" className="text-primary-light-green underline">Từ vựng thường gặp trong kì thi</Link></li>
        </ul>
      </div>

      {/* Ngữ pháp */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-neutral-light mb-4">Ngữ pháp</h2>
        <p className="text-neutral-light mb-2">
          Tổng hợp các cấu trúc ngữ pháp giúp bạn nắm vững nền tảng ngữ pháp tiếng Anh.
        </p>
        <Link href="/selfstudy/grammar" className="text-primary-light-green underline">
          Xem các cấu trúc ngữ pháp
        </Link>
      </div>

      {/* Mẫu câu giao tiếp thông dụng */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-neutral-light mb-4">Các mẫu câu giao tiếp thông dụng</h2>
        <p className="text-neutral-light mb-2">
          Học các mẫu câu giao tiếp thông dụng để sử dụng trong đời sống hàng ngày.
        </p>
        <Link href="/selfstudy/common-sentences" className="text-primary-light-green underline">
          Xem các mẫu câu giao tiếp
        </Link>
      </div>

      {/* Học cùng nhau */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-neutral-light mb-4">Học cùng nhau</h2>
        <p className="text-neutral-light mb-2">
          Không gian học nhóm để bạn có thể học cùng bạn bè và những người học khác.
        </p>
        <Link href="/selfstudy/study-together" className="text-primary-light-green underline">
          Tham gia không gian học nhóm
        </Link>
      </div>
    </div>
  );
}
