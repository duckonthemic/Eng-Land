// data/courses.js

const courses = [
  {
    id: 1,
    title: "Ngữ Pháp Cơ Bản",
    description: "Hiểu rõ các cấu trúc ngữ pháp cơ bản trong tiếng Anh.",
    category: "Ngữ pháp",
    level: "Cơ Bản",
    price: 1999000, // Giá bán
    duration: "3 tháng", // Thời gian
    instructors: ["Nguyễn Văn A", "Trần Thị B"], // Giáo viên giảng dạy
    learningMethod: "Online", // Hình thức học
    curriculum: [
      "Bài 1: Giới thiệu về ngữ pháp tiếng Anh",
      "Bài 2: Thì hiện tại đơn và hiện tại tiếp diễn",
      "Bài 3: Danh từ và đại từ",
      "Bài 4: Tính từ và trạng từ",
      "Bài 5: Giới từ và liên từ",
      "Bài 6: Câu điều kiện cơ bản",
      "Bài 7: Câu so sánh",
      "Bài 8: Ôn tập và kiểm tra cuối khóa",
    ], // Lộ trình
    image: "/images/courses/grammar-basics.jpg",
    details:
      "Trong khóa học Ngữ Pháp Cơ Bản này, bạn sẽ học về các thì trong tiếng Anh, cách sử dụng danh từ, động từ, tính từ, trạng từ, giới từ và các cấu trúc câu cơ bản. Khóa học sẽ giúp bạn xây dựng nền tảng vững chắc để tiếp tục học các khóa nâng cao hơn.",
  },
  {
    id: 2,
    title: "Từ Vựng Hằng Ngày",
    description: "Mở rộng vốn từ vựng hàng ngày một cách hiệu quả.",
    category: "Từ vựng",
    level: "Cơ Bản",
    price: 1999000,
    duration: "2 tháng",
    instructors: ["Lê Văn C"],
    learningMethod: "Online",
    curriculum: [
      "Bài 1: Từ vựng về gia đình",
      "Bài 2: Từ vựng về công việc",
      "Bài 3: Từ vựng về mua sắm",
      "Bài 4: Từ vựng về du lịch",
      "Bài 5: Từ vựng về sức khỏe",
      "Bài 6: Từ vựng về giải trí",
      "Bài 7: Ôn tập và kiểm tra cuối khóa",
    ],
    image: "/images/courses/vocabulary-daily.jpg",
    details:
      "Khóa học Từ Vựng Hằng Ngày giúp bạn học và ghi nhớ từ mới thông qua các bài học thú vị và thực hành hàng ngày. Bạn sẽ mở rộng vốn từ vựng trong các chủ đề quen thuộc, giúp giao tiếp tự tin hơn trong cuộc sống hàng ngày.",
  },
  {
    id: 3,
    title: "Kỹ Năng Nói",
    description: "Cải thiện kỹ năng giao tiếp và nói tiếng Anh tự tin.",
    category: "Kỹ năng nói",
    level: "Trung Bình",
    price: 1999000,
    duration: "4 tháng",
    instructors: ["Phạm Thị D"],
    learningMethod: "Online",
    curriculum: [
      "Bài 1: Phát âm cơ bản",
      "Bài 2: Ngữ điệu và nhấn âm",
      "Bài 3: Giao tiếp hàng ngày",
      "Bài 4: Thảo luận nhóm",
      "Bài 5: Trình bày trước đám đông",
      "Bài 6: Phản xạ trong giao tiếp",
      "Bài 7: Ôn tập và kiểm tra cuối khóa",
    ],
    image: "/images/courses/speaking-skills.jpg",
    details:
      "Trong khóa học Kỹ Năng Nói, bạn sẽ tham gia các buổi thực hành giao tiếp, thảo luận nhóm và luyện phát âm để nâng cao khả năng nói tiếng Anh. Khóa học giúp bạn tự tin hơn khi giao tiếp trong các tình huống thực tế.",
  },
  {
    id: 4,
    title: "Kỹ Năng Nghe",
    description: "Nâng cao khả năng nghe hiểu tiếng Anh trong các tình huống thực tế.",
    category: "Kỹ năng nghe",
    level: "Trung Bình",
    price: 1999000,
    duration: "3 tháng",
    instructors: ["Trần Văn E"],
    learningMethod: "Online",
    curriculum: [
      "Bài 1: Nghe hiểu cơ bản",
      "Bài 2: Nghe hội thoại hàng ngày",
      "Bài 3: Nghe trong môi trường công việc",
      "Bài 4: Nghe bài giảng và thuyết trình",
      "Bài 5: Nghe tin tức và phim ảnh",
      "Bài 6: Ôn tập và kiểm tra cuối khóa",
    ],
    image: "/images/courses/listening-skills.jpg",
    details:
      "Khóa học Kỹ Năng Nghe giúp bạn cải thiện khả năng nghe hiểu thông qua việc nghe các bài giảng, đoạn hội thoại và bài tập thực tế. Bạn sẽ làm quen với các giọng nói và ngữ điệu khác nhau trong tiếng Anh.",
  },
  {
    id: 5,
    title: "Ngữ Pháp Nâng Cao",
    description: "Sâu hơn vào các cấu trúc ngữ pháp phức tạp.",
    category: "Ngữ pháp",
    level: "Nâng Cao",
    price: 1999000,
    duration: "4 tháng",
    instructors: ["Nguyễn Thị F"],
    learningMethod: "Online",
    curriculum: [
      "Bài 1: Thì hoàn thành và hoàn thành tiếp diễn",
      "Bài 2: Câu bị động nâng cao",
      "Bài 3: Câu điều kiện loại 3 và hỗn hợp",
      "Bài 4: Mệnh đề quan hệ phức",
      "Bài 5: Câu gián tiếp và tường thuật",
      "Bài 6: Cách sử dụng từ nối và liên từ phức tạp",
      "Bài 7: Ôn tập và kiểm tra cuối khóa",
    ],
    image: "/images/courses/grammar-advanced.jpg",
    details:
      "Khóa học Ngữ Pháp Nâng Cao tập trung vào các cấu trúc ngữ pháp phức tạp, giúp bạn sử dụng tiếng Anh một cách chính xác và linh hoạt. Khóa học phù hợp với những người đã có nền tảng ngữ pháp cơ bản và muốn nâng cao trình độ.",
  },
  // Bạn có thể thêm các khóa học khác tương tự tại đây
];

export default courses;
