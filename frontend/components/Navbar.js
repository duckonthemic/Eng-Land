import Link from 'next/link';
import Image from 'next/image';
import ColorModeToggle from './ColorModeToggle';
import { useEffect, useState, useRef } from 'react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      setIsLoggedIn(true);
      const userStr = localStorage.getItem('user');
      if (userStr) {
        setUser(JSON.parse(userStr));
      }
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        {/* Logo và Tên Trang Web */}
        <div className="flex items-center space-x-1">
          <Image
            src="/images/england-logo.png"
            alt="Eng Land Logo"
            width={36} 
            height={36}
            className="rounded-full"
          />
          <Link href="/" className="text-2xl font-bold text-white hover:text-green-400 transition ease-in-out duration-300">
            Eng Land
          </Link>
        </div>

        {/* Các liên kết điều hướng (đã bỏ Lịch học, và giờ bỏ Thanh toán) */}
        <Link href="/about" className="text-white text-lg hover:text-green-400 transition ease-in-out duration-300">
          Giới thiệu
        </Link>
        <Link href="/courses" className="text-white text-lg hover:text-green-400 transition ease-in-out duration-300">
          Khóa học
        </Link>
        <Link href="/selfstudy" className="text-white text-lg hover:text-green-400 transition ease-in-out duration-300">
          Tự học
        </Link>
        <Link href="/news" className="text-white text-lg hover:text-green-400 transition ease-in-out duration-300">
          Tin tức
        </Link>
        <Link href="/consult" className="text-white text-lg hover:text-green-400 transition ease-in-out duration-300">
          Tư vấn
        </Link>
        <Link href="/test" className="text-white text-lg hover:text-green-400 transition ease-in-out duration-300">
          Test
        </Link>
      </div>
      
      <div className="flex items-center space-x-4">
        {!isLoggedIn && (
          <>
            <Link href="/login" className="text-white hover:text-green-400">
              Login
            </Link>
            <Link href="/signup">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition ease-in-out duration-300">
                Sign Up
              </button>
            </Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <Link href="/cart" className="text-white hover:text-green-400 text-lg">
              Giỏ hàng
            </Link>
            {/* Đã bỏ phần Thanh toán */}
            <div className="relative" ref={dropdownRef}>
              <Image
                src={user && user.avatar ? user.avatar : "/images/user-avatar.png"}
                alt="User Avatar"
                width={36}
                height={36}
                className="rounded-full cursor-pointer hover:opacity-80 transition"
                onClick={toggleDropdown}
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg text-black py-2 z-50">
                  <Link 
                    href="/user" 
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setShowDropdown(false)}
                  >
                    Thông tin tài khoản
                  </Link>
                  <button 
                    onClick={handleLogout} 
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        <ColorModeToggle />

        <div className="relative">
          <input
            type="text"
            className="bg-white text-gray-800 placeholder-gray-500 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500 hover:text-green-600">
            🔍
          </button>
        </div>
      </div>
    </nav>
  );
}
