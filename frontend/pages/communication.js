import React from "react";
import Image from "next/image";

const Communication = () => {
  return (
    <div className="communication-page bg-white text-gray-800">
      {/* Header */}
      <header className="relative bg-gradient-to-b from-green-600 to-green-400 text-white py-24 text-center">
        <h1 className="text-6xl font-extrabold">
          Kỹ Năng Giao Tiếp Chuyên Sâu
        </h1>
        <p className="mt-6 text-2xl max-w-3xl mx-auto">
          Nắm vững kỹ năng giao tiếp toàn diện để tự tin đối mặt với mọi thử
          thách trong công việc và cuộc sống.
        </p>
      </header>

      {/* Giới Thiệu */}
      <section className="py-16 bg-green-50 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Nội dung mô tả */}
          <div className="text-gray-700 space-y-6">
            <h2 className="text-4xl font-bold text-green-700">
              Vì Sao Cần Giao Tiếp Hiệu Quả?
            </h2>
            <p>
              Giao tiếp là chìa khóa để mở ra những cơ hội lớn trong cuộc sống
              và sự nghiệp. Đây không chỉ là việc nói chuyện, mà còn là nghệ
              thuật truyền tải ý tưởng, xây dựng mối quan hệ, và thuyết phục
              người khác.
            </p>
            <p>
              Với chương trình học chuyên sâu của chúng tôi, bạn sẽ nâng cao khả
              năng giao tiếp bằng cách thực hành qua các tình huống thực tế, bài
              tập nhóm và các buổi workshop.
            </p>
            <a
              href="#register"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-green-700 transition"
            >
              Đăng Ký Ngay
            </a>
          </div>
          {/* Hình ảnh minh họa */}
          <div>
            <Image
              src="/images/communication-success.png"
              alt="Giao tiếp hiệu quả"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-green-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-700">
            Lộ Trình Học Tập
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Chương trình của chúng tôi được thiết kế để dẫn dắt bạn qua từng
            bước phát triển kỹ năng giao tiếp một cách bài bản.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "Bước 1",
              title: "Nắm Vững Nguyên Tắc",
              description:
                "Học các nguyên tắc cơ bản để xây dựng nền tảng giao tiếp vững chắc.",
              image: "/images/step1.jpg",
            },
            {
              step: "Bước 2",
              title: "Thực Hành Ngôn Ngữ Cơ Thể",
              description:
                "Tận dụng ngôn ngữ cơ thể để truyền tải thông điệp mạnh mẽ.",
              image: "/images/step2.jpg",
            },
            {
              step: "Bước 3",
              title: "Ứng Dụng Chuyên Nghiệp",
              description:
                "Áp dụng kỹ năng giao tiếp vào các tình huống thực tế và chuyên môn.",
              image: "/images/step3.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all"
            >
              <div className="overflow-hidden rounded-lg flex items-center justify-center h-[200px] bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-green-600 mt-4 text-center">
                {item.step}
              </h3>
              <h4 className="text-lg font-semibold mt-2 text-center">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tại Sao Chọn Chúng Tôi */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-green-50 to-green-100">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-green-700">
            Tại Sao Chọn Eng Land?
          </h2>
          <p className="text-lg mt-4 text-gray-600 max-w-xl mx-auto">
            Eng Land cam kết giúp bạn cải thiện kỹ năng giao tiếp tiếng Anh vượt
            bậc thông qua chương trình học hiện đại, hiệu quả và phù hợp với nhu
            cầu cá nhân.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: "Giáo Viên Bản Ngữ Chuyên Nghiệp",
              description:
                "Học với đội ngũ giáo viên bản ngữ giàu kinh nghiệm, giúp bạn phát âm chuẩn và giao tiếp tự nhiên hơn.",
            },
            {
              title: "Tình Huống Giao Tiếp Thực Tế",
              description:
                "Thực hành giao tiếp trong các tình huống thực tế như thuyết trình, phỏng vấn, và hội thoại hàng ngày.",
            },
            {
              title: "Cá Nhân Hóa Lộ Trình",
              description:
                "Lộ trình học tập được cá nhân hóa, phù hợp với trình độ và mục tiêu giao tiếp của từng học viên.",
            },
            {
              title: "Môi Trường Học Tập Đa Tương Tác",
              description:
                "Học tập trong môi trường tương tác cao với các hoạt động nhóm, trò chơi ngôn ngữ và phản hồi từ giáo viên.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-105 transition-all"
            >
              {/* Nội dung */}
              <div className="relative z-10 p-6 text-center">
                <div className="text-6xl text-green-600 mb-4">{index + 1}</div>
                <h3 className="text-xl font-bold text-green-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <footer
        id="register"
        className="py-20 bg-green-700 text-white text-center"
      >
        <h2 className="text-5xl font-bold mb-6">
          Sẵn Sàng Phát Triển Kỹ Năng Giao Tiếp Của Bạn?
        </h2>
        <p className="text-lg mb-8">
          Tham gia khóa học ngay hôm nay để trở thành bậc thầy giao tiếp!
        </p>
        <a
          href="/courses/3"
          className="px-8 py-4 bg-white text-green-700 font-semibold rounded-full shadow-md hover:bg-green-600 hover:text-white transition"
        >
          Đăng Ký Ngay
        </a>
      </footer>
    </div>
  );
};

export default Communication;
