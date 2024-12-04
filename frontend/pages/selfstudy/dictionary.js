import { useState } from 'react';
import axios from 'axios';

export default function Dictionary() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!word) return;

    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setDefinition(response.data[0]); // Lấy kết quả từ API
      setError(null); // Xóa lỗi nếu có
    } catch (err) {
      setError('Không tìm thấy từ này trong từ điển');
      setDefinition(null);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);  // Gọi hàm tìm kiếm khi nhấn Enter
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-6 text-primary-light-green">Từ Điển Anh-Việt</h1>

      {/* Tìm kiếm từ */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Nhập từ bạn muốn tìm"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyUp={handleKeyUp}  // Thêm sự kiện onKeyUp để bắt sự kiện nhấn Enter
          className="w-full border-2 rounded-lg px-4 py-2 mb-4 focus:outline-none text-black dark:text-white bg-white dark:bg-gray-800 dark:border-gray-600 border-gray-300 focus:border-primary-light-green dark:focus:border-primary-light-green"
        />
      </div>

      {/* Hiển thị kết quả từ điển */}
      {error && <p className="text-red-500">{error}</p>}

      {definition && (
        <div>
          <h2 className="text-2xl font-semibold text-neutral-light mb-4">
            Kết quả tìm kiếm cho: <span className="text-primary-light-green">{word}</span>
          </h2>
          <div className="bg-neutral-light p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Phiên âm:</h3>
            <p className="text-gray-700">{definition.phonetic || 'Không có phiên âm'}</p>

            <h3 className="text-xl font-bold mt-4 mb-2">Định nghĩa:</h3>
            <ul className="list-disc pl-6">
              {definition.meanings.map((meaning, index) => (
                <li key={index} className="mb-2">
                  <strong>{meaning.partOfSpeech}:</strong> {meaning.definitions[0].definition}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mt-4 mb-2">Ví dụ:</h3>
            <ul className="list-disc pl-6">
              {definition.meanings[0].definitions[0].example && (
                <li>{definition.meanings[0].definitions[0].example}</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
