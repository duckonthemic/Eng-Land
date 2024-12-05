// pages/courses.js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import CourseCard from '../components/CourseCard';
import coursesData from '../data/courses';
import Footer from '../components/Footer';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Lọc khóa học dựa trên tìm kiếm và các bộ lọc
  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  // Lấy danh sách các mức độ và danh mục duy nhất từ dữ liệu khóa học
  const levels = ['All', ...new Set(coursesData.map((course) => course.level))];
  const categories = ['All', ...new Set(coursesData.map((course) => course.category))];

  return (
    <>
      <Head>
        <title>Khóa Học | Eng Land</title>
        <meta
          name="description"
          content="Khám phá các khóa học tiếng Anh tại Eng Land để nâng cao kỹ năng ngôn ngữ của bạn một cách hiệu quả và linh hoạt."
        />
      </Head>

      <main className="container mx-auto px-6 py-12 bg-white text-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Banner Section */}
          <section className="mb-12 relative h-64">
            <Image
              src="/images/courses/banner.jpg" // Đảm bảo bạn có hình ảnh này
              alt="Khóa Học Eng Land"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-5xl font-extrabold text-white">
                Khóa Học của Chúng Tôi
              </h1>
            </div>
          </section>

          {/* Search and Filters */}
          <section className="mb-12 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Tìm kiếm khóa học..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light-green transition-colors duration-300"
              />

              {/* Filter by Level */}
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light-green transition-colors duration-300"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>

              {/* Filter by Category */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light-green transition-colors duration-300"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </section>

          {/* Courses List */}
          <section className="animate-fade-in">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-700">Không tìm thấy khóa học phù hợp.</p>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
