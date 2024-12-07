import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer'; // Import Footer component

const Home = () => {
  return (
    <>
      <Head>
        <title>EngLand - Nâng Tầm Tiếng Anh Của Bạn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container mx-auto px-6 py-8 bg-gradient-to-b from-indigo-50 to-white">
        {/* Header Section */}
        <header className="bg-indigo-600 text-white text-center py-12 rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold">EngLand</h1>
          <p className="text-xl mt-4">Hành trình chinh phục tiếng Anh bắt đầu từ đây!</p>
        </header>

        {/* Banner Section */}
        <section className="mt-12 bg-white py-12 px-8 rounded-lg shadow-lg text-center">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600">Học tiếng Anh - Dễ dàng và tiện lợi</h2>
          <p className="text-gray-700 text-lg mb-8">
            Cùng EngLand, bạn sẽ khám phá các khóa học hấp dẫn, phù hợp với mọi trình độ.
            Học mọi lúc, mọi nơi để cải thiện kỹ năng nhanh chóng.
          </p>
          <img
            src="/images/england-logo.png"
            alt="EngLand - Học tiếng Anh mọi lúc, mọi nơi"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
          />
        </section>

        {/* Main Content Section */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold mb-10 text-center text-indigo-600">Tại sao chọn EngLand?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality Lessons */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Bài học hấp dẫn</h3>
              <p className="text-gray-700 text-lg">
                Được biên soạn bởi chuyên gia, bài học phù hợp với thực tế, dễ hiểu và hấp dẫn.
              </p>
              <Image
                src="/images/course1.jpg"
                alt="Bài học hấp dẫn"
                width={100}
                height={100}
                className="w-full h-auto mt-6 rounded-lg shadow-md"
              />
            </div>

            {/* Varied Exercises */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Bài tập thực tế</h3>
              <p className="text-gray-700 text-lg">
                Rèn luyện với các bài tập đa dạng, từ giao tiếp cơ bản đến nâng cao.
              </p>
              <Image
                src="/images/course2.jpg"
                alt="Bài tập thực tế"
                width={100}
                height={100}
                className="w-full h-auto mt-6 rounded-lg shadow-md"
              />
            </div>

            {/* Regular Assessments */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Kiểm tra tiến độ</h3>
              <p className="text-gray-700 text-lg">
                Theo dõi tiến bộ qua các bài kiểm tra định kỳ, được cập nhật liên tục.
              </p>
              <Image
                src="/images/course3.jpg"
                alt="Kiểm tra tiến độ"
                width={100}
                height={100}
                className="w-full h-auto mt-6 rounded-lg shadow-md"
              />
            </div>

            {/* Learning Community */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Cộng đồng học tập</h3>
              <p className="text-gray-700 text-lg">
                Kết nối với hàng ngàn học viên để chia sẻ kinh nghiệm và học hỏi lẫn nhau.
              </p>
              <img
                src="/images/course4.avif"
                alt="Cộng đồng học tập"
                width={100}
                height={100}
                className="w-full h-auto mt-6 rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mt-16 bg-indigo-100 py-12 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600">Cùng EngLand chinh phục tiếng Anh</h2>
          <p className="text-gray-700 text-lg mb-8">
            Tham gia EngLand ngay để bắt đầu hành trình học tập của bạn và đạt được mục tiêu trong tiếng Anh!
          </p>
          <a
            href="/courses"
            className="bg-indigo-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Khám phá khóa học
          </a>
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
