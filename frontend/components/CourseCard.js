// components/CourseCard.js
import Link from 'next/link';
import Image from 'next/image';

const CourseCard = ({ course }) => {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      <div className="relative h-48">
        <Image
          src={course.image}
          alt={course.title}
          layout="fill"
          objectFit="cover"
          className="hover:opacity-90 transition-opacity duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-primary-dark-green mb-2">
          {course.title}
        </h3>
        <p className="text-gray-700 mb-4">
          {course.description}
        </p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{course.category}</span>
          <span>{course.level}</span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
