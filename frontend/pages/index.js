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

      <div className="container mx-auto px-6 py-8 bg-gradient-to-b from-indigo-100 to-white min-h-screen">
        {/* Header Section */}
        <header className="bg-[#111827] text-white text-center py-16 rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold tracking-wide">EngLand</h1>
          <p className="text-2xl mt-4 font-light">
            Hành trình chinh phục tiếng Anh bắt đầu từ đây!
          </p>
        </header>


        {/* Timeline Section */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold mb-6 text-center text-indigo-600">
            Học tiếng Anh - Dễ dàng và tiện lợi
          </h2>
          <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl mx-auto">
            Cùng EngLand, bạn sẽ khám phá các khóa học hấp dẫn, phù hợp với mọi trình độ.
            Học mọi lúc, mọi nơi để cải thiện kỹ năng nhanh chóng.
          </p>
          <ul className="timeline space-y-8">
            {[
              {
                date: "NOV 7, 2024",
                href: "/selfstudy/common-sentences",
                title: "Giao tiếp hằng ngày",
                description: "Luyện nghe, nói câu tiếng Anh giao tiếp hằng ngày."
              },
              {
                date: "AUG 22, 2024",
                href: "/selfstudy/vocabulary/flashcards",
                title: "Flashcard",
                description:
                  "Công cụ học tập với hai mặt: một mặt có câu hỏi hoặc từ vựng, mặt kia có câu trả lời hoặc giải thích."
              },
              {
                date: "JUN 19, 2024",
                href: "https://www.englishpage.com/irregularverbs/irregularverbs.html",
                title: "Động từ bất quy tắc",
                description: "Tất cả những động từ bất quy tắc trong tiếng Anh."
              },
              {
                date: "JUN 03, 2024",
                href: "/selfstudy/grammar",
                title: "Ngữ pháp",
                description: "Danh sách tổng hợp những cấu trúc câu trong tiếng Anh."
              }
            ].map((item, index) => (
              <li key={index} className="timeline-item relative border-l border-gray-300 pl-6">
                <div className="timeline-date text-sm text-gray-600 font-medium mb-2">
                  {item.date}
                </div>
                <a
                  href={item.href}
                  className="block bg-white p-6 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors"
                >
                  <h3 className="text-2xl font-semibold text-indigo-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Main Content Section */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold mb-10 text-center text-indigo-600">
            Tại sao chọn EngLand?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Bài học hấp dẫn",
                description:
                  "Được biên soạn bởi chuyên gia, bài học phù hợp với thực tế, dễ hiểu và hấp dẫn.",
                image: "/images/course1.jpg",
                alt: "Bài học hấp dẫn"
              },
              {
                title: "Bài tập thực tế",
                description:
                  "Rèn luyện với các bài tập đa dạng, từ giao tiếp cơ bản đến nâng cao.",
                image: "/images/course2.jpg",
                alt: "Bài tập thực tế"
              },
              {
                title: "Kiểm tra tiến độ",
                description:
                  "Theo dõi tiến bộ qua các bài kiểm tra định kỳ, được cập nhật liên tục.",
                image: "/images/course3.jpg",
                alt: "Kiểm tra tiến độ"
              },
              {
                title: "Cộng đồng học tập",
                description:
                  "Kết nối với hàng ngàn học viên để chia sẻ kinh nghiệm và học hỏi lẫn nhau.",
                image: "/images/course4.avif",
                alt: "Cộng đồng học tập"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-lg">{item.description}</p>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={100}
                  height={100}
                  className="w-full h-auto mt-6 rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mt-16 bg-indigo-100 py-12 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600">
            Cùng EngLand chinh phục tiếng Anh
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto">
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
