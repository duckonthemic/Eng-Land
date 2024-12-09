import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>EngLand - Nâng Tầm Tiếng Anh Của Bạn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container mx-auto px-6 py-8 bg-white min-h-screen">
        {/* Header Banner */}
        <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden">
          <Image
            src="/images/banner.jpg"
            alt="Khám phá thế giới cùng EngLand"
            layout="intrinsic"
            width={1024}
            height={455}
            className="rounded-lg shadow-xl"
            priority
            quality={100}
          />
        </div>

        {/* Phần Timeline */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold mb-6 text-center text-green-600">
            Lộ Trình Học Tập Của Bạn
          </h2>
          <p className="text-green-700 text-lg mb-8 text-center max-w-2xl mx-auto">
            Khám phá lộ trình học tiếng Anh được cá nhân hóa, phù hợp với mục
            tiêu của bạn.
          </p>
          <ul className="timeline space-y-8">
            {[
              {
                date: "Bước 1",
                href: "/foundation",
                title: "Xây Dựng Nền Tảng",
                description:
                  "Bắt đầu với kiến thức cơ bản về từ vựng và ngữ pháp.",
              },
              {
                date: "Bước 2",
                href: "/communication",
                title: "Phát Triển Kỹ Năng Giao Tiếp",
                description:
                  "Luyện tập kỹ năng nghe và nói qua các tình huống thực tế.",
              },
              {
                date: "Bước 3",
                href: "/fluency",
                title: "Nâng Cao Độ Trôi Chảy",
                description:
                  "Hoàn thiện khả năng sử dụng tiếng Anh một cách tự tin.",
              },
              {
                date: "Bước 4",
                href: "/mastery",
                title: "Chinh Phục Tiếng Anh",
                description:
                  "Trở thành chuyên gia với kỹ năng tiếng Anh xuất sắc.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="timeline-item relative border-l border-green-300 pl-6"
              >
                <div className="timeline-date text-sm text-green-600 font-medium mb-2">
                  {item.date}
                </div>
                <a
                  href={item.href}
                  className="block bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform hover:shadow-2xl"
                >
                  <h3 className="text-2xl font-semibold text-green-600">
                    {item.title}
                  </h3>
                  <p className="text-green-700 mt-2">{item.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Main Content Section */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold mb-10 text-center text-green-600">
            Tại sao chọn EngLand?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Bài học sáng tạo",
                description:
                  "Nội dung được thiết kế sáng tạo, gắn liền với thực tế, giúp bạn tiếp thu nhanh chóng và hứng thú.",
                image: "/images/course1.png",
                alt: "Bài học sáng tạo",
              },
              {
                title: "Bài tập tương tác",
                description:
                  "Thực hành với bài tập tương tác đa dạng, nâng cao kỹ năng tiếng Anh mỗi ngày.",
                image: "/images/course2.png",
                alt: "Bài tập tương tác",
              },
              {
                title: "Theo dõi tiến bộ",
                description:
                  "Theo dõi sự tiến bộ của bạn với các đánh giá và phản hồi chi tiết.",
                image: "/images/course3.png",
                alt: "Theo dõi tiến bộ",
              },
              {
                title: "Cộng đồng năng động",
                description:
                  "Tham gia cộng đồng học tập năng động, kết nối và chia sẻ kinh nghiệm với người khác.",
                image: "/images/course4.png",
                alt: "Cộng đồng năng động",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform hover:shadow-2xl"
              >
                <h3 className="text-2xl font-semibold mb-4 text-green-600">
                  {item.title}
                </h3>
                <p className="text-green-700 text-lg">{item.description}</p>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={300}
                  height={200}
                  className="mt-6 rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mt-16 bg-green-100 py-12 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold mb-6 text-green-600">
            Hãy bắt đầu hành trình mới cùng EngLand
          </h2>
          <p className="text-green-700 text-lg mb-8 max-w-xl mx-auto">
            Tham gia EngLand ngay hôm nay để nâng cao trình độ tiếng Anh, mở ra
            cơ hội mới và đạt được mục tiêu của bạn!
          </p>
          <a
            href="/courses"
            className="bg-green-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Khám phá khóa học ngay
          </a>
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
