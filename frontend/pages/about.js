import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/Card';

export default function About() {
  return (
    <>
      <Head>
        <title>Về Chúng Tôi | Eng Land</title>
        <meta
          name="description"
          content="Eng Land là nền tảng học tiếng Anh trực tuyến giúp bạn nâng cao kỹ năng ngôn ngữ của mình một cách hiệu quả và linh hoạt."
        />
        <meta property="og:title" content="Về Chúng Tôi | Eng Land" />
        <meta
          property="og:description"
          content="Eng Land là nền tảng học tiếng Anh trực tuyến giúp bạn nâng cao kỹ năng ngôn ngữ của mình một cách hiệu quả và linh hoạt."
        />
        <meta property="og:image" content="/images/england-og-image.jpg" />
        <meta property="og:url" content="https://england.example.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <main className="container mx-auto px-6 py-12 bg-white text-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Header Section */}
          <section className="text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-extrabold text-primary-dark-green mb-4 transform transition-transform hover:scale-105">
              Về Eng Land
            </h1>
            <p className="text-lg md:text-xl">
              Eng Land là nền tảng học tiếng Anh trực tuyến hàng đầu, mang đến cho bạn những công cụ và tài nguyên cần thiết để nâng cao kỹ năng ngôn ngữ một cách hiệu quả và linh hoạt.
            </p>
          </section>
          
          {/* Trust Indicators */}
          <section className="animate-fade-in">
            <h2 className="text-4xl font-semibold text-primary-dark-green mb-6 text-center">
              Độ Uy Tín của Chúng Tôi
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { src: "/images/award.jpg", alt: "Award", text: "Giải thưởng giáo dục 2023" },
                { src: "/images/user.jpg", alt: "Users", text: "+10,000 người dùng hài lòng" },
                { src: "/images/certificate.jpg", alt: "Certification", text: "Chứng nhận ISO 9001" },
              ].map((item, index) => (
                <div key={item.src} className="flex flex-col items-center text-center transition-transform hover:scale-105">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={100}
                    height={100}
                    className="rounded-lg shadow-md object-cover transition-transform hover:rotate-6"
                  />
                  <p className="mt-2 text-lg font-medium text-black">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Mission Section */}
          <section className="animate-fade-in">
            <h2 className="text-4xl font-semibold text-primary-dark-green mb-4 text-center">
              Sứ Mệnh Của Chúng Tôi
            </h2>
            <p className="text-lg mb-6 text-center md:text-left">
              Chúng tôi cam kết cung cấp một nền tảng học tiếng Anh chất lượng cao, giúp người học tự tin giao tiếp quốc tế, mở rộng cơ hội nghề nghiệp và kết nối toàn cầu.
            </p>
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
              <div className="md:w-1/2 transition-transform hover:scale-105">
                <Image
                  src="/images/mission.WEBP"
                  alt="Mission"
                  width={350}
                  height={240}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <ul className="list-disc pl-5 space-y-3 text-black text-xl">
                  <li>Phát triển các khóa học linh hoạt và cập nhật liên tục.</li>
                  <li>Tạo ra môi trường học tập tương tác và thú vị.</li>
                  <li>Hỗ trợ học viên qua các kênh liên lạc đa dạng.</li>
                  <li>Giúp học viên tiếp cận với giáo viên nước người giàu kinh nghiệm.</li>
                  <li>Không chỉ là học, học viên sẽ được tiếp xúc với nhiều phương pháp học tập khác nhau từ nhiều quốc gia.</li>
                  <li>Đảm bảo chất lượng giảng dạy thông qua đội ngũ chuyên gia trong và ngoài nước.</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Hypothetical Articles Section */}
          <section className="animate-fade-in">
            <h2 className="text-4xl font-semibold text-primary-dark-green mb-6 text-center">
              Các Bài Báo Nổi Bật
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card
                image="/images/article1.jpg"
                title="Lợi Ích Của Việc Học Tiếng Anh Trực Tuyến"
                description="Khám phá những lợi ích vượt trội của việc học tiếng Anh trực tuyến và cách nó có thể giúp bạn tiến xa hơn trong sự nghiệp và cuộc sống cá nhân."
                link="/articles/1"
              />
              <Card
                image="/images/article2.jpg"
                title="Cách Tối Ưu Hóa Học Tiếng Anh Hàng Ngày"
                description="Những chiến lược hiệu quả để tích hợp việc học tiếng Anh vào thói quen hàng ngày của bạn một cách tự nhiên và bền vững."
                link="/articles/2"
              />
              <Card
                image="/images/article3.jpg"
                title="Thành Công Của Học Viên Eng Land"
                description="Câu chuyện về những học viên đã đạt được thành tựu vượt trội nhờ chương trình học tiếng Anh của Eng Land."
                link="/articles/3"
              />
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section className="animate-fade-in">
            <h2 className="text-4xl font-semibold text-primary-dark-green mb-6 text-center">
              Phản hồi của học viên
            </h2>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/student1.jpg" 
                  alt="Student 1"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-lg">
                    "Eng Land đã giúp tôi cải thiện kỹ năng tiếng Anh một cách đáng kể. Thầy cô nhiệt tình và quan tâm đến học sinh kể cả học online"
                  </p>
                  <p className="mt-2 font-semibold">
                    - Võ Duy Thịnh - siêu đẹp trai
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/student2.png" 
                  alt="Student 2"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-lg">
                    "Nhờ Eng Land, tôi đã tự tin giao tiếp bằng tiếng Anh trong môi trường làm việc quốc tế. Tham gia vào thị trường anime quốc tế một cách thoải mái"
                  </p>
                  <p className="mt-2 font-semibold">
                    - Lương Tuấn Vỹ - Wjpu lỏ
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/student3.jpg" 
                  alt="Student 3"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-lg">
                    "Các khóa học linh hoạt và hỗ trợ từ giáo viên đã giúp em học tiếng Anh hiệu quả hơn. Qua đây, em đã có nhiều trải nghiệm với giáo viên trong và ngoài nước, đồng thời còn tiếp thu được văn hóa học tập của các giáo viên nước ngoài"
                  </p>
                  <p className="mt-2 font-semibold">
                    - Hoàng Bảo Long -
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Statistics Section */}
          <section className="animate-fade-in">
            <h2 className="text-3xl font-semibold text-primary-dark-green mb-6 text-center">
              Số Liệu Đáng Kể
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { number: "10,000+", label: "Học viên" },
                { number: "5+", label: "Năm kinh nghiệm" },
                { number: "100%", label: "Học viên hài lòng" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-bold text-primary-light-green">{stat.number}</p>
                  <p className="mt-2 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="text-center animate-fade-in">
            <h2 className="text-4xl font-semibold text-primary-dark-green mb-4">
              Bắt Đầu Học Tiếng Anh Ngay Hôm Nay!
            </h2>
            <p className="text-lg mb-6">
              Tham gia cộng đồng học viên Eng Land và trải nghiệm phương pháp học tiếng Anh hiệu quả nhất.
            </p>
            <Link href="/courses" className="inline-block bg-primary-light-green text-green py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark-green hover:text-green transition-colors duration-300">
              Đăng ký ngay hôm nay để nhận ưu đãi
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
