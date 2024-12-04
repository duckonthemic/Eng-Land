// pages/about.js
import Link from 'next/link';

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-primary-dark-green mb-8">
          Về Chúng Tôi
        </h1>

        <p className="text-lg text-gray-800 mb-6">
          Eng Land là nền tảng học tiếng Anh trực tuyến giúp bạn nâng cao kỹ năng ngôn ngữ của mình một cách hiệu quả và linh hoạt. Chúng tôi tin rằng ai cũng có thể học tiếng Anh và cải thiện khả năng giao tiếp quốc tế của mình, bất kể ở đâu và khi nào.
        </p>

        <p className="text-lg text-gray-800 mb-6">
          Với các khóa học chất lượng, từ cơ bản đến nâng cao, chúng tôi cung cấp các bài học thực tiễn, bài tập thú vị và kiểm tra định kỳ để đảm bảo bạn có thể phát triển tốt nhất. Ngoài ra, chúng tôi còn có những giáo viên và chuyên gia nhiệt tình hỗ trợ bạn trong quá trình học.
        </p>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-primary-dark-green mb-4">Sứ Mệnh Của Chúng Tôi</h2>
          <p className="text-lg text-gray-700 mb-4">
            Chúng tôi mong muốn mang lại kiến thức tiếng Anh cho mọi người một cách dễ dàng, thú vị, và không giới hạn. Eng Land cam kết mang đến một nền giáo dục chất lượng, giúp người học tự tin sử dụng tiếng Anh trong cuộc sống và công việc.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-primary-dark-green mb-4">Giá Trị Cốt Lõi</h2>
          <ul className="list-disc pl-5 space-y-3 text-lg text-gray-700">
            <li>Tính linh hoạt: Học mọi lúc, mọi nơi, phù hợp với thời gian biểu của bạn.</li>
            <li>Tương tác cao: Các bài học và bài kiểm tra được thiết kế để thúc đẩy sự tương tác và thực hành liên tục.</li>
            <li>Chất lượng: Đội ngũ giáo viên chuyên nghiệp và nội dung học tập được nghiên cứu và kiểm duyệt kỹ lưỡng.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-primary-dark-green mb-4">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-lg text-gray-700 mb-4">
            Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, hãy{' '}
            <Link href="/contact" className="text-green-500 hover:underline font-semibold">
              liên hệ với chúng tôi
            </Link>. Chúng tôi luôn sẵn lòng hỗ trợ bạn trên hành trình học tập.
          </p>
        </div>
      </div>
    </div>
  );
}
