// pages/selfstudy/vocabulary/topics.js
import Link from 'next/link';

export default function Topics() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-primary-light-green mb-8">Học Từ Vựng Theo Chủ Đề</h1>

      <div className="space-y-6">
        <div>
          <Link href="/selfstudy/vocabulary/topics/family">
            <span className="block text-lg text-gray-800 hover:text-primary-light-green">Chủ Đề Gia Đình</span>
          </Link>
        </div>

        <div>
          <Link href="/selfstudy/vocabulary/topics/work">
            <span className="block text-lg text-gray-800 hover:text-primary-light-green">Chủ Đề Công Việc</span>
          </Link>
        </div>

        <div>
          <Link href="/selfstudy/vocabulary/topics/environment">
            <span className="block text-lg text-gray-800 hover:text-primary-light-green">Chủ Đề Môi Trường</span>
          </Link>
        </div>

        {/* Thêm các chủ đề khác nếu cần */}
      </div>
    </div>
  );
}
