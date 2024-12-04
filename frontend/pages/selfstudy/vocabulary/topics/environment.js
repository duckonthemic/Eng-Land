// pages/selfstudy/vocabulary/environment.js
export default function Environment() {
    const vocabulary = [
      { word: 'Pollution', meaning: 'Ô nhiễm', example: 'Pollution is a serious problem in many cities.' },
      { word: 'Climate', meaning: 'Khí hậu', example: 'The climate in this region is very hot.' },
      { word: 'Recycling', meaning: 'Tái chế', example: 'Recycling helps protect the environment.' },
      { word: 'Sustainability', meaning: 'Sự bền vững', example: 'Sustainability is important for future generations.' },
      // Thêm các từ vựng khác ở đây
    ];
  
    return (
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-primary-dark-green mb-8">Từ Vựng Chủ Đề Môi Trường</h1>
  
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
  