import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Lessons = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/lessons')
      .then(response => {
        setLessons(response.data);
      })
      .catch(error => {
        console.error('Có lỗi xảy ra khi lấy dữ liệu bài học!', error);
      });
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-4">Bài học</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div key={lesson._id} className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold">{lesson.title}</h2>
            <p className="text-gray-600">{lesson.description}</p>
            <Link href={`/lessons/${lesson._id}`}>
              <a className="text-blue-500 hover:underline mt-2 block">Xem chi tiết</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
