// pages/_app.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import '../styles/footer.css';  // Import footer.css vào _app.js

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
