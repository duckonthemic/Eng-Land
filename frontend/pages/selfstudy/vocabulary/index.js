// pages/selfstudy/vocabulary/index.js
import Link from 'next/link';

export default function Vocabulary() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-primary-dark-green mb-8">Học Từ Vựng Theo Chủ Đề</h1>

      <div className="space-y-6">
        <div>
          <Link href="/selfstudy/vocabulary/topics/family">
            <a className="block text-lg text-gray-800 hover:text-primary-light-green">Chủ Đề Gia Đình</a>
          </Link>
        </div>

        <div>
          <Link href="/selfstudy/vocabulary/topics/work">
            <a className="block text-lg text-gray-800 hover:text-primary-light-green">Chủ Đề Công Việc</a>
          </Link>
        </div>

        <div>
          <Link href="/selfstudy/vocabulary/topics/environment">
            <a className="block text-lg text-gray-800 hover:text-primary-light-green">Chủ Đề Môi Trường</a>
          </Link>
        </div>

        {/* Bạn có thể thêm nhiều chủ đề khác ở đây */}
      </div>
    </div>
  );
}
