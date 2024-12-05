// pages/courses/[id].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
// Cập nhật đường dẫn nhập biểu tượng cho Heroicons v2
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import coursesData from '../../data/courses';

export default function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Tìm khóa học theo ID
  const course = coursesData.find((course) => course.id === parseInt(id));

  if (!course) {
    return <p className="text-center text-gray-700">Không tìm thấy khóa học.</p>;
  }

  return (
    <>
      <Head>
        <title>{course.title} | Eng Land</title>
        <meta name="description" content={course.description} />
        <meta property="og:title" content={`${course.title} | Eng Land`} />
        <meta property="og:description" content={course.description} />
        <meta property="og:image" content={course.image} />
        <meta
          property="og:url"
          content={`https://england.example.com/courses/${course.id}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="container mx-auto px-6 py-12 bg-white text-black transition-colors duration-300">
        <div className="max-w-3xl mx-auto">
          {/* Course Image */}
          <div className="relative w-full h-64 mb-6 rounded-lg shadow-md overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              layout="fill"
              objectFit="cover"
              className="hover:opacity-90 transition-opacity duration-300"
            />
          </div>

          {/* Course Title */}
          <h1 className="text-4xl font-bold text-primary-dark-green mb-4">
            {course.title}
          </h1>

          {/* Course Price */}
          <p className="text-3xl font-bold text-primary-light-green mb-4">
            {course.price.toLocaleString('vi-VN')} VND
          </p>

          {/* Course Meta */}
          <div className="flex flex-wrap space-x-4 mb-6">
            <span className="px-3 py-1 bg-primary-light-green text-white rounded-full text-sm">
              {course.category}
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              {course.level}
            </span>
            <span className="px-3 py-1 bg-blue-200 text-blue-700 rounded-full text-sm">
              Thời gian: {course.duration}
            </span>
            <span className="px-3 py-1 bg-yellow-200 text-yellow-700 rounded-full text-sm">
              Hình thức: {course.learningMethod}
            </span>
          </div>

          {/* Course Description */}
          <p className="text-lg mb-6">{course.details}</p>

          {/* Curriculum Accordion */}
          <div className="mb-6">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left text-2xl font-semibold bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-light-green focus-visible:ring-opacity-75">
                    <span>Lộ trình khóa học</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-primary-light-green`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700">
                    <ul className="list-decimal pl-5 space-y-1">
                      {course.curriculum.map((lesson, index) => (
                        <li key={index}>{lesson}</li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          {/* Instructors Accordion */}
          <div className="mb-6">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left text-2xl font-semibold bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-light-green focus-visible:ring-opacity-75">
                    <span>Giáo viên giảng dạy</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-primary-light-green`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700">
                    <ul className="list-disc pl-5 space-y-1">
                      {course.instructors.map((instructor, index) => (
                        <li key={index}>{instructor}</li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          {/* Enrollment Button */}
          <Link
            href="/signup"
            className="inline-block bg-primary-light-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark-green transition-colors duration-300"
          >
            Đăng Ký Ngay
          </Link>
        </div>
      </main>
    </>
  );
}
