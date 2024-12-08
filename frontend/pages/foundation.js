import React from "react";
import Image from "next/image";

const Foundation = () => {
  return (
    <div className="foundation-page bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-400 text-white py-20 text-center shadow-lg">
        <h1 className="text-6xl font-extrabold">Lộ Trình Học Tập Cơ Bản</h1>
        <p className="mt-4 text-2xl font-semibold">
          Nền tảng vững chắc cho hành trình học tập thành công của bạn
        </p>
      </header>

      {/* Giới Thiệu */}
      <section className="py-16 px-6 md:px-20 bg-green-50">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700">
            Giới Thiệu
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-600 mt-4 max-w-2xl mx-auto">
            Lộ trình học tập toàn diện, được thiết kế để giúp bạn đạt được thành
            công trong mọi mục tiêu học tập của mình.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
          {/* Hình ảnh minh họa */}
          <div className="flex-1">
            <Image
              src="/images/learning-path.png"
              alt="Lộ trình học tập"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          {/* Nội dung mô tả */}
          <div className="flex-1 text-gray-700 text-base md:text-lg">
            <p className="mb-6">
              Lộ trình học tập được xây dựng dựa trên nhu cầu và mục tiêu cá
              nhân, đảm bảo hiệu quả tối đa. Chúng tôi cung cấp các bài giảng
              được nghiên cứu kỹ lưỡng, kết hợp với thực hành thực tế để học
              viên dễ dàng áp dụng.
            </p>
            <p className="mb-6">
              Các khóa học của chúng tôi không chỉ dừng lại ở việc học lý thuyết
              mà còn chú trọng vào việc phát triển tư duy sáng tạo và kỹ năng
              mềm. Đây là nền tảng giúp bạn thành công trong mọi lĩnh vực.
            </p>
            {/* Danh sách các lợi ích */}
            <ul className="list-disc list-inside space-y-4">
              <li>
                <span className="font-semibold text-green-700">
                  Chương trình học linh hoạt:
                </span>{" "}
                Phù hợp với mọi lịch trình và nhu cầu học tập.
              </li>
              <li>
                <span className="font-semibold text-green-700">
                  Chuyên gia hướng dẫn:
                </span>{" "}
                Đội ngũ giảng viên dày dặn kinh nghiệm.
              </li>
              <li>
                <span className="font-semibold text-green-700">
                  Tài liệu độc quyền:
                </span>{" "}
                Cung cấp tài liệu và bài giảng chi tiết cho từng khóa học.
              </li>
              <li>
                <span className="font-semibold text-green-700">
                  Cộng đồng học tập:
                </span>{" "}
                Kết nối với các học viên khác để chia sẻ và học hỏi.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Các Bước */}
      <section className="py-24 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              step: "Bước 1",
              title: "Ngữ Pháp Cơ Bản",
              description:
                "Hiểu các cấu trúc ngữ pháp cơ bản để xây dựng nền tảng vững chắc cho kỹ năng tiếng Anh của bạn.",
              image: "/images/grammar-basics.jpg",
            },
            {
              step: "Bước 2",
              title: "Từ Vựng Hằng Ngày",
              description:
                "Mở rộng vốn từ vựng thông qua các chủ đề hàng ngày và thực hành giao tiếp.",
              image: "/images/vocabulary-daily.jpg",
            },
            {
              step: "Bước 3",
              title: "Kỹ Năng Nghe Nói",
              description:
                "Phát triển kỹ năng nghe và nói thông qua các bài luyện tập thực tế và tương tác.",
              image: "/images/listening-skills.jpg",
            },
            {
              step: "Bước 4",
              title: "Thực Hành Liên Tục",
              description:
                "Tham gia vào các hoạt động thực hành liên tục để duy trì và nâng cao trình độ tiếng Anh.",
              image: "/images/continuous-practice.jpg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-green-600">
                {item.step}
              </h3>
              <h4 className="text-xl font-bold mt-3">{item.title}</h4>
              <p className="text-gray-600 mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tại Sao Chọn Chúng Tôi */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-green-400 to-green-600 text-black">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Tại Sao Chọn Chúng Tôi?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              title: "Giảng Viên Chuyên Gia",
              description: "Kinh nghiệm thực tiễn và chuyên môn cao.",
              icon: "👩‍🏫",
            },
            {
              title: "Lịch Học Linh Hoạt",
              description: "Phù hợp với mọi nhu cầu của học viên.",
              icon: "📅",
            },
            {
              title: "Tài Nguyên Hỗ Trợ",
              description: "Cung cấp tài liệu và công cụ học tập toàn diện.",
              icon: "📚",
            },
            {
              title: "Chứng Nhận Uy Tín",
              description: "Được công nhận bởi các tổ chức hàng đầu.",
              icon: "🏆",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-shadow"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="text-2xl font-bold">{item.title}</h4>
              <p className="mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <footer className="py-20 text-center bg-green-700 text-white">
        <h2 className="text-5xl font-bold mb-6">
          Bắt đầu hành trình của bạn ngay hôm nay!
        </h2>
        <p className="text-2xl mb-8">
          Đừng chần chừ! Hãy tham gia ngay để xây dựng nền tảng vững chắc cho
          tương lai của bạn.
        </p>
        <a
          href="/courses"
          className="inline-block bg-white text-green-700 font-semibold py-4 px-12 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-colors"
        >
          Đăng Ký Ngay
        </a>
      </footer>
    </div>
  );
};

export default Foundation;
