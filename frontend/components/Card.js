// components/Card.js
import Link from 'next/link';
import Image from 'next/image';

const Card = ({ image, title, description, link }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary-dark-green mb-2">
          {title}
        </h3>
        <p className="text-lg">
          {description}
        </p>
        <Link href={link} className="text-primary-light-green font-semibold hover:underline">
          Đọc thêm &rarr;
        </Link>
      </div>
    </article>
  );
};

export default Card;
