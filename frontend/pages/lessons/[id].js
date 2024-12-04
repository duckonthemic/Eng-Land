import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const LessonDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/lessons/${id}`)
        .then(response => {
          setLesson(response.data);
        })
        .catch(error => {
          console.error('Có lỗi xảy ra khi lấy chi tiết bài học!', error);
        });
    }
  }, [id]);

  if (!lesson) return <p>Đang tải...</p>;

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <div className="prose">
        <p>{lesson.content}</p>
      </div>
    </div>
  );
};

export default LessonDetails;
