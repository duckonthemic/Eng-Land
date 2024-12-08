import React from "react";
import Image from "next/image";

const Fluency = () => {
    return (
        <div className="fluency-page bg-white text-gray-800">
            {/* Header */}
            <header className="relative bg-gradient-to-b from-green-600 to-green-400 text-white py-24 text-center">
                <h1 className="text-6xl font-extrabold">Chinh Phục Kỹ Năng Lưu Loát</h1>
                <p className="mt-6 text-2xl max-w-3xl mx-auto">
                    Phát triển kỹ năng ngôn ngữ để giao tiếp tự tin và lưu loát trong công việc và cuộc sống.
                </p>
            </header>

            {/* Giới Thiệu */}
            <section className="py-16 bg-green-50 px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    {/* Nội dung mô tả */}
                    <div className="text-gray-700 space-y-6">
                        <h2 className="text-4xl font-bold text-green-700">Vì Sao Cần Lưu Loát Tiếng Anh?</h2>
                        <p>
                            Lưu loát tiếng Anh không chỉ giúp bạn giao tiếp hiệu quả mà còn mở ra những cơ hội nghề nghiệp rộng lớn.
                            Kỹ năng này đóng vai trò then chốt trong việc thể hiện bản thân, tham gia các cuộc họp, và thuyết phục người khác.
                        </p>
                        <p>
                            Với chương trình học của chúng tôi, bạn sẽ trở thành một người sử dụng tiếng Anh tự tin thông qua các bài tập thực tế, tình huống mô phỏng, và các khóa học chuyên sâu.
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
                            src="https://www.really-learn-english.com/image-files/level-of-english-fluency.png"
                            alt="Lưu loát tiếng Anh"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Steps to Fluency */}
            <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-green-50">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-green-700">Lộ Trình Trở Nên Lưu Loát</h2>
                    <p className="mt-4 text-lg max-w-xl mx-auto">
                        Chúng tôi sẽ giúp bạn tiến bộ qua từng bước, giúp bạn từ việc học cơ bản đến giao tiếp chuyên nghiệp.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            step: "Bước 1",
                            title: "Xây Dựng Cơ Bản Vững Chắc",
                            description: "Học các từ vựng và cấu trúc ngữ pháp cần thiết để tạo nền tảng vững chắc.",
                            image: "/images/step1.jpg",
                        },
                        {
                            step: "Bước 2",
                            title: "Luyện Tập Nghe và Nói",
                            description: "Phát triển kỹ năng nghe và nói qua các tình huống giao tiếp thực tế.",
                            image: "/images/step2.jpg",
                        },
                        {
                            step: "Bước 3",
                            title: "Thực Hành và Tự Tin Giao Tiếp",
                            description: "Áp dụng những gì đã học để giao tiếp tự tin và lưu loát trong mọi tình huống.",
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
                            <h3 className="text-xl font-bold text-green-600 mt-4 text-center">{item.step}</h3>
                            <h4 className="text-lg font-semibold mt-2 text-center">{item.title}</h4>
                            <p className="text-gray-600 mt-2 text-center">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tại Sao Chọn Chúng Tôi */}
            <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-green-50 to-green-100">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-green-700">Tại Sao Chọn Eng Land?</h2>
                    <p className="text-lg mt-4 text-gray-600 max-w-xl mx-auto">
                        Eng Land cam kết giúp bạn trở nên lưu loát với chương trình học hiện đại, phù hợp với nhu cầu và mục tiêu cá nhân của bạn.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {[
                        {
                            title: "Giáo Viên Bản Ngữ Chuyên Nghiệp",
                            description:
                                "Luyện tập với giáo viên bản ngữ giúp bạn cải thiện phát âm và khả năng giao tiếp tự nhiên.",
                        },
                        {
                            title: "Môi Trường Học Tập Đa Tương Tác",
                            description:
                                "Các hoạt động nhóm, trò chơi ngôn ngữ và phản hồi từ giáo viên giúp bạn học hiệu quả.",
                        },
                        {
                            title: "Lộ Trình Học Cá Nhân Hóa",
                            description:
                                "Chúng tôi thiết kế lộ trình học phù hợp với mục tiêu và khả năng của bạn, đảm bảo hiệu quả.",
                        },
                        {
                            title: "Khóa Học Chuyên Sâu và Thực Tế",
                            description:
                                "Khóa học kết hợp lý thuyết với thực hành, giúp bạn áp dụng tiếng Anh trong cuộc sống và công việc.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-105 transition-all"
                        >
                            {/* Nội dung */}
                            <div className="relative z-10 p-6 text-center">
                                <div className="text-6xl text-green-600 mb-4">{index + 1}</div>
                                <h3 className="text-xl font-bold text-green-700">{item.title}</h3>
                                <p className="text-gray-600 mt-3">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <footer id="register" className="py-20 bg-green-700 text-white text-center">
                <h2 className="text-5xl font-bold mb-6">Sẵn Sàng Trở Nên Lưu Loát?</h2>
                <p className="text-lg mb-8">
                    Tham gia khóa học ngay hôm nay để bắt đầu hành trình trở thành người giao tiếp lưu loát!
                </p>
                <a
                    href="/courses/4"
                    className="px-8 py-4 bg-white text-green-700 font-semibold rounded-full shadow-md hover:bg-green-600 hover:text-white transition"
                >
                    Đăng Ký Ngay
                </a>
            </footer>
        </div>
    );
};

export default Fluency;
