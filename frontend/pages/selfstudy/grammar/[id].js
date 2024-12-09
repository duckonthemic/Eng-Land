"use client";

import { useRouter } from 'next/router';
import grammarTopics from '../../../data/grammarTopics';
import Link from 'next/link';
import GrammarExample from '../../../components/GrammarExample';
import ReactMarkdown from 'react-markdown';

export default function GrammarDetail() {
  const router = useRouter();
  const { id } = router.query;

  const topic = grammarTopics.find(t => t.id === parseInt(id));

  if (!topic) {
    return (
      <main className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-red-500 text-center">Chủ đề không tồn tại</h1>
          <div className="flex justify-center">
            <Link
              href="/selfstudy/grammar"
              className="bg-primary-light-green hover:bg-primary-dark-green text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
            >
              Quay Lại Ngữ Pháp
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4 text-primary-light-green text-center">{topic.title}</h1>
        <p className="text-gray-700 mb-6">{topic.description}</p>
        <div className="prose prose-lg">
          <ReactMarkdown>{topic.content}</ReactMarkdown>
        </div>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Ví dụ</h3>
        <ul className="list-disc list-inside space-y-2">
          {topic.examples.map((example, index) => (
            <GrammarExample key={index} example={example} />
          ))}
        </ul>
        <div className="flex justify-center mt-8">
          <Link
            href="/selfstudy/grammar"
            className="bg-primary-light-green hover:bg-primary-dark-green text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
          >
            Quay Lại Ngữ Pháp
          </Link>
        </div>
      </div>
    </main>
  );
}
