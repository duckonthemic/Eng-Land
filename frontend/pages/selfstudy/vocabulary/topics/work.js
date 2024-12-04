// pages/selfstudy/vocabulary/work.js
export default function Work() {
    const vocabulary = [
      { word: 'Job', meaning: 'Công việc', example: 'She loves her job as a teacher.' },
      { word: 'Colleague', meaning: 'Đồng nghiệp', example: 'I met my colleague at the meeting.' },
      { word: 'Boss', meaning: 'Sếp', example: 'My boss is very supportive.' },
      { word: 'Salary', meaning: 'Lương', example: 'His salary is very high.' },
      // Thêm các từ vựng khác ở đây
    ];
  
    return (
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-primary-dark-green mb-8">Từ Vựng Chủ Đề Công Việc</h1>
  
        <div className="space-y-6">
          {vocabulary.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-primary-dark-green">{item.word}</h2>
              <p className="text-lg text-gray-700">Nghĩa: {item.meaning}</p>
              <p className="text-gray-600">Ví dụ: {item.example}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  