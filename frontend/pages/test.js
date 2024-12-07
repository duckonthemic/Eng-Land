// pages/test.js

import { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { Disclosure } from '@headlessui/react';
import TestQuestion from '../components/TestQuestion';
import Timer from '../components/Timer';
import testQuestions from '../data/testQuestions';

export default function TestPage() {
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const totalQuestions = 10;
  const testDuration = 600; // 10 phút = 600 giây

  useEffect(() => {
    selectRandomQuestions();
  }, []);

  const selectRandomQuestions = () => {
    const shuffled = [...testQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, totalQuestions);
    setSelectedQuestions(selected);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleRetry = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    selectRandomQuestions();
  };

  const handleTimeUp = useCallback(() => {
    setIsSubmitted(true);
  }, []);

  const calculateScore = () => {
    let correctAnswers = 0;
    selectedQuestions.forEach((question) => {
      if (userAnswers[question.id] === question.answer) {
        correctAnswers += 1;
      }
    });
    return { correctAnswers, totalQuestions: selectedQuestions.length };
  };

  const { correctAnswers, totalQuestions: tq } = calculateScore();

  return (
    <>
      <Head>
        <title>Bài Kiểm Tra Tiếng Anh | Eng Land</title>
        <meta
          name="description"
          content="Tham gia bài kiểm tra tiếng Anh để đánh giá kiến thức của bạn về ngữ pháp và từ vựng."
        />
      </Head>

      <main className="container mx-auto px-6 py-12 bg-gray-50 text-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-primary-dark-green mb-6 text-center">
            Bài Kiểm Tra Tiếng Anh
          </h1>

          {!isSubmitted && <Timer duration={testDuration} onTimeUp={handleTimeUp} />}

          {!isSubmitted ? (
            <>
              {selectedQuestions.map((question) => (
                <TestQuestion
                  key={question.id}
                  questionData={question}
                  userAnswers={userAnswers}
                  setUserAnswers={setUserAnswers}
                  isSubmitted={isSubmitted}
                />
              ))}
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
                >
                  Nộp Bài
                </button>
              </div>
            </>
          ) : (
            <>
              {selectedQuestions.map((question) => (
                <TestQuestion
                  key={question.id}
                  questionData={question}
                  userAnswers={userAnswers}
                  setUserAnswers={setUserAnswers}
                  isSubmitted={isSubmitted}
                />
              ))}
              <div className="p-6 bg-white rounded-lg shadow-md text-center mt-6">
                <h2 className="text-3xl font-semibold mb-4">Kết Quả của Bạn</h2>
                <p className="text-xl mb-4">
                  Bạn đã trả lời đúng{' '}
                  <span className="font-bold text-green-500">{correctAnswers}</span> trong tổng số{' '}
                  <span className="font-bold text-blue-500">{tq}</span> câu hỏi.
                </p>
                <button
                  onClick={handleRetry}
                  className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Thực Hiện Lại
                </button>
                <Link
                  href="/"
                  className="inline-block mt-4 bg-primary-light-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark-green transition-colors duration-300"
                >
                  Quay Lại Trang Chủ
                </Link>
              </div>
            </>
          )}

          {/* Phần Thông Tin Thêm (Accordion) */}
          <section className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Thông Tin Thêm</h2>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left text-xl font-medium text-primary-dark-green bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-primary-light-green focus-visible:ring-opacity-75">
                    <span>Chi tiết về bài kiểm tra</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-primary-light-green`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700">
                    <p>
                      Bài kiểm tra này bao gồm {totalQuestions} câu hỏi về ngữ pháp và từ vựng
                      tiếng Anh nhằm đánh giá kiến thức của bạn. Bạn có {testDuration / 60} phút để
                      hoàn thành bài kiểm tra. Hãy trả lời hết các câu hỏi và nhấp vào "Nộp Bài" để
                      xem kết quả.
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </section>
        </div>
      </main>
    </>
  );
}
