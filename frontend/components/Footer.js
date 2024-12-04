// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-black p-4">
      <div className="container mx-auto text-center space-x-2">
        <Link href="/privacy" className="hover:text-primary-light-green transition-colors duration-300">
          Privacy Policy
        </Link>
        <span>|</span>
        <Link href="/terms" className="hover:text-primary-light-green transition-colors duration-300">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
