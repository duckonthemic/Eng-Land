import React from "react";
import Image from "next/image";

const Mastery = () => {
  return (
    <div className="mastery-page bg-white text-gray-800">
      {/* Header */}
      <header className="relative bg-gradient-to-b from-green-600 to-green-400 text-white py-24 text-center">
        <h1 className="text-6xl font-extrabold">
          Đạt Được Sự Thành Thạo Ngôn Ngữ
        </h1>
        <p className="mt-6 text-2xl max-w-3xl mx-auto">
          Vươn tới đỉnh cao của khả năng ngôn ngữ với các kỹ năng giao tiếp và
          viết lách hoàn hảo.
        </p>
      </header>

      {/* Giới Thiệu */}
      <section className="py-16 bg-green-50 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Nội dung mô tả */}
          <div className="text-gray-700 space-y-6">
            <h2 className="text-4xl font-bold text-green-700">
              Tại Sao Cần Đạt Được Sự Thành Thạo?
            </h2>
            <p>
              Thành thạo ngôn ngữ là chìa khóa để bạn thể hiện sự tự tin trong
              giao tiếp, thuyết trình và viết lách. Đây là một kỹ năng không thể
              thiếu trong sự nghiệp và cuộc sống, đặc biệt trong một thế giới
              toàn cầu hóa.
            </p>
            <p>
              Với chương trình học của chúng tôi, bạn sẽ tiếp cận các bài học
              sâu sắc và kỹ thuật nâng cao, giúp bạn đạt được trình độ thành
              thạo trong mọi lĩnh vực ngôn ngữ.
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
              src="https://learnenglish.britishcouncil.org/sites/podcasts/files/inline-images/english-levels_1.jpg"
              alt="Thành thạo ngôn ngữ"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Steps to Mastery */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-green-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-700">
            Lộ Trình Đạt Được Sự Thành Thạo
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Để đạt được sự thành thạo ngôn ngữ, bạn cần theo một lộ trình học rõ
            ràng và thực hành một cách có hệ thống. Dưới đây là các bước chúng
            tôi giúp bạn vượt qua.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "Bước 1",
              title: "Xây Dựng Nền Tảng Vững Mạnh",
              description:
                "Học các cấu trúc ngữ pháp nâng cao và từ vựng chuyên ngành để tạo nền tảng chắc chắn.",
              image: "/images/step1.jpg",
            },
            {
              step: "Bước 2",
              title: "Luyện Tập Chuyên Sâu",
              description:
                "Thực hành các tình huống giao tiếp phức tạp và các bài tập nâng cao giúp bạn ứng dụng thành thạo.",
              image: "/images/step2.jpg",
            },
            {
              step: "Bước 3",
              title: "Áp Dụng Ngôn Ngữ Trong Cuộc Sống",
              description:
                "Sử dụng ngôn ngữ trong môi trường thực tế, giao tiếp và thuyết trình trước đám đông, viết bài luận.",
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
            Eng Land cam kết mang đến một chương trình học giúp bạn đạt được sự
            thành thạo ngôn ngữ một cách toàn diện, hiệu quả và cá nhân hóa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: "Giáo Viên Bản Ngữ Chuyên Nghiệp",
              description:
                "Học với đội ngũ giáo viên bản ngữ giúp bạn luyện tập và nắm vững ngữ điệu, phát âm chuẩn xác.",
            },
            {
              title: "Tình Huống Giao Tiếp Nâng Cao",
              description:
                "Thực hành giao tiếp trong các tình huống phức tạp, bao gồm thuyết trình, thương lượng và phản biện.",
            },
            {
              title: "Lộ Trình Học Cá Nhân Hóa",
              description:
                "Lộ trình học được cá nhân hóa tùy thuộc vào mục tiêu thành thạo của từng học viên, giúp tối đa hóa hiệu quả học tập.",
            },
            {
              title: "Môi Trường Học Tập Đa Tương Tác",
              description:
                "Cung cấp môi trường học tập tương tác với nhiều cơ hội thực hành giao tiếp và phát triển kỹ năng viết lách.",
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
          Sẵn Sàng Thành Thạo Ngôn Ngữ?
        </h2>
        <p className="text-lg mb-8">
          Hãy bắt đầu hành trình thành thạo ngôn ngữ của bạn ngay hôm nay với
          Eng Land!
        </p>
        <a
          href="/courses/5"
          className="px-8 py-4 bg-white text-green-700 font-semibold rounded-full shadow-md hover:bg-green-600 hover:text-white transition"
        >
          Đăng Ký Ngay
        </a>
      </footer>
    </div>
  );
};

export default Mastery;
