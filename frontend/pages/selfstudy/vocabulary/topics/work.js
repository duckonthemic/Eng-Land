export default function Work() {
  const vocabulary = [
    {
      word: "Job",
      meaning: "Công việc",
      example: "She loves her job as a teacher.",
    },
    {
      word: "Colleague",
      meaning: "Đồng nghiệp",
      example: "I met my colleague at the meeting.",
    },
    { word: "Boss", meaning: "Sếp", example: "My boss is very supportive." },
    { word: "Salary", meaning: "Lương", example: "His salary is very high." },
    {
      word: "Job",
      meaning: "Công việc",
      example: "She loves her job as a teacher.",
    },
    {
      word: "Colleague",
      meaning: "Đồng nghiệp",
      example: "I met my colleague at the meeting.",
    },
    { word: "Boss", meaning: "Sếp", example: "My boss is very supportive." },
    { word: "Salary", meaning: "Lương", example: "His salary is very high." },
    {
      word: "Career",
      meaning: "Sự nghiệp",
      example: "She is building a successful career in medicine.",
    },
    {
      word: "Promotion",
      meaning: "Sự thăng chức",
      example: "He received a promotion after six months.",
    },
    {
      word: "Meeting",
      meaning: "Cuộc họp",
      example: "We have a meeting scheduled for tomorrow.",
    },
    {
      word: "Resume",
      meaning: "Sơ yếu lý lịch",
      example: "She updated her resume for the new position.",
    },
    {
      word: "Interview",
      meaning: "Phỏng vấn",
      example: "He prepared well for the job interview.",
    },
    {
      word: "Employer",
      meaning: "Nhà tuyển dụng",
      example: "The employer values teamwork highly.",
    },
    {
      word: "Employee",
      meaning: "Nhân viên",
      example: "Employees are entitled to benefits.",
    },
    {
      word: "Office",
      meaning: "Văn phòng",
      example: "Her office is on the 10th floor.",
    },
    {
      word: "Meeting room",
      meaning: "Phòng họp",
      example: "Let’s book the meeting room for our discussion.",
    },
    {
      word: "Workplace",
      meaning: "Nơi làm việc",
      example: "A positive workplace boosts productivity.",
    },
    {
      word: "Task",
      meaning: "Nhiệm vụ",
      example: "Completing tasks on time is essential.",
    },
    {
      word: "Deadline",
      meaning: "Hạn chót",
      example: "The project deadline is next Monday.",
    },
    {
      word: "Project",
      meaning: "Dự án",
      example: "They are working on a new marketing project.",
    },
    {
      word: "Team",
      meaning: "Đội ngũ",
      example: "Our team achieved great results this quarter.",
    },
    {
      word: "Client",
      meaning: "Khách hàng",
      example: "Maintaining good relationships with clients is key.",
    },
    {
      word: "Meeting agenda",
      meaning: "Nội dung cuộc họp",
      example: "Please review the meeting agenda beforehand.",
    },
    {
      word: "Presentation",
      meaning: "Bài thuyết trình",
      example: "She gave an impressive presentation to the board.",
    },
    {
      word: "Report",
      meaning: "Báo cáo",
      example: "He submitted the financial report on time.",
    },
    {
      word: "Strategy",
      meaning: "Chiến lược",
      example: "Developing a solid strategy is crucial for success.",
    },
    {
      word: "Budget",
      meaning: "Ngân sách",
      example: "They allocated a budget for the new project.",
    },
    {
      word: "Meeting minutes",
      meaning: "Biên bản cuộc họp",
      example: "Please distribute the meeting minutes to all members.",
    },
    {
      word: "Task force",
      meaning: "Nhóm nhiệm vụ",
      example: "A task force was formed to address the issue.",
    },
    {
      word: "Performance review",
      meaning: "Đánh giá hiệu suất",
      example: "Employees have annual performance reviews.",
    },
    {
      word: "Workload",
      meaning: "Khối lượng công việc",
      example: "Managing workload is important to prevent burnout.",
    },
    {
      word: "Overtime",
      meaning: "Làm thêm giờ",
      example: "She worked overtime to meet the deadline.",
    },
    {
      word: "Benefits",
      meaning: "Phúc lợi",
      example:
        "Employee benefits include health insurance and retirement plans.",
    },
    {
      word: "Career development",
      meaning: "Phát triển sự nghiệp",
      example: "The company offers career development programs.",
    },
    {
      word: "Work-life balance",
      meaning: "Cân bằng công việc và cuộc sống",
      example: "Maintaining a work-life balance is essential for well-being.",
    },
    {
      word: "Remote work",
      meaning: "Làm việc từ xa",
      example: "Remote work options are available for this position.",
    },
    {
      word: "Freelancer",
      meaning: "Người làm tự do",
      example: "She works as a freelancer in graphic design.",
    },
    {
      word: "Internship",
      meaning: "Thực tập",
      example: "He completed an internship at a tech company.",
    },
    {
      word: "Networking",
      meaning: "Mở rộng mối quan hệ",
      example: "Networking can lead to new career opportunities.",
    },
    {
      word: "Mentor",
      meaning: "Người hướng dẫn",
      example: "Having a mentor helps in career growth.",
    },
    {
      word: "Job fair",
      meaning: "Hội chợ việc làm",
      example: "She attended a job fair to explore opportunities.",
    },
    {
      word: "Reference",
      meaning: "Thư giới thiệu",
      example: "Please provide references for your job application.",
    },
    {
      word: "Skillset",
      meaning: "Bộ kỹ năng",
      example: "A diverse skillset is beneficial in the workplace.",
    },
    {
      word: "Training",
      meaning: "Đào tạo",
      example: "The company provides training for new employees.",
    },
    {
      word: "Team building",
      meaning: "Xây dựng đội ngũ",
      example: "Team building activities improve collaboration.",
    },
    {
      word: "Promotion",
      meaning: "Sự thăng tiến",
      example: "She earned a promotion after her successful project.",
    },
    {
      word: "Layoff",
      meaning: "Sa thải",
      example: "The company announced layoffs due to restructuring.",
    },
    {
      word: "Resignation",
      meaning: "Từ chức",
      example: "He submitted his resignation letter yesterday.",
    },
    {
      word: "Contract",
      meaning: "Hợp đồng",
      example: "They signed a one-year contract with the firm.",
    },
    {
      word: "Full-time",
      meaning: "Toàn thời gian",
      example: "She is employed as a full-time developer.",
    },
    {
      word: "Part-time",
      meaning: "Bán thời gian",
      example: "He works part-time while studying.",
    },
    {
      word: "Benefits package",
      meaning: "Gói phúc lợi",
      example: "The benefits package includes health and dental insurance.",
    },
    {
      word: "Job description",
      meaning: "Mô tả công việc",
      example: "Please review the job description before applying.",
    },
    {
      word: "Onboarding",
      meaning: "Quy trình gia nhập",
      example: "The onboarding process helps new employees acclimate.",
    },
    {
      word: "Workstation",
      meaning: "Trạm làm việc",
      example: "Each employee has a personalized workstation.",
    },
    {
      word: "Performance metrics",
      meaning: "Chỉ số hiệu suất",
      example: "Performance metrics are used to evaluate success.",
    },
    {
      word: "Exit interview",
      meaning: "Cuộc phỏng vấn khi nghỉ việc",
      example: "They conduct exit interviews to gather feedback.",
    },
    {
      word: "Job satisfaction",
      meaning: "Sự hài lòng trong công việc",
      example: "Job satisfaction is important for employee retention.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-primary-dark-green mb-8">
        Từ Vựng Chủ Đề Công Việc
      </h1>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-primary-dark-green">
              {item.word}
            </h2>
            <p className="text-lg text-gray-700">Nghĩa: {item.meaning}</p>
            <p className="text-gray-600">Ví dụ: {item.example}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
