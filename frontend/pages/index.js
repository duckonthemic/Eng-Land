import Head from 'next/head';
import Footer from '../components/Footer'; // Import Footer component
const Home = () => {
  return (
    <>
      <Head>
        <title>Eng Land - Học tiếng Anh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-4">Chào mừng đến với nền tảng học tiếng Anh</h1>
        <p className="text-gray-700 mb-6">
          Nâng cao kỹ năng tiếng Anh của bạn với các bài học, bài tập và bài kiểm tra của chúng tôi.
        </p>
      </div>
      {/* Thêm component Footer vào đây */}
      <Footer />
    </>
  );
};
export default Home;