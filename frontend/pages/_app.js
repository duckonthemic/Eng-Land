import "../styles/globals.css";
import Navbar from "../components/Navbar";
import "../styles/footer.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
