// pages/selfstudy/vocabulary/family.js
export default function Family() {
    const vocabulary = [
      { word: 'Father', meaning: 'Cha', example: 'My father is a doctor.' },
      { word: 'Mother', meaning: 'Mẹ', example: 'My mother loves to cook.' },
      { word: 'Brother', meaning: 'Anh, em trai', example: 'I have one brother.' },
      { word: 'Sister', meaning: 'Chị, em gái', example: 'My sister is very kind.' },
      // Thêm các từ vựng khác ở đây
    ];
  
    return (
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-primary-dark-green mb-8">Từ Vựng Chủ Đề Gia Đình</h1>
  
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
  