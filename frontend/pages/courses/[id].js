// pages/courses/[id].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
        <meta
          name="description"
          content={course.description}
        />
        <meta property="og:title" content={`${course.title} | Eng Land`} />
        <meta
          property="og:description"
          content={course.description}
        />
        <meta property="og:image" content={course.image} />
        <meta property="og:url" content={`https://england.example.com/courses/${course.id}`} />
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

          {/* Course Meta */}
          <div className="flex space-x-4 mb-6">
            <span className="px-3 py-1 bg-primary-light-green text-white rounded-full text-sm">
              {course.category}
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              {course.level}
            </span>
          </div>

          {/* Course Description */}
          <p className="text-lg mb-6">
            {course.description}
          </p>

          {/* Course Details */}
          <div className="prose mb-6">
            {course.details}
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
