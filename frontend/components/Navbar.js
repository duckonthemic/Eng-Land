import Link from 'next/link';
import Image from 'next/image';
import ColorModeToggle from './ColorModeToggle';
import { useEffect, useState } from 'react';



export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        {/* Logo và Tên Trang Web */}
        <div className="flex items-center space-x-1">
          <Image
            src="/images/england-logo.png" // Đảm bảo logo đã có trong public/images
            alt="Eng Land Logo"
            width={36} 
            height={36}
            className="rounded-full"
          />
          <Link href="/">
            <h1 className="text-2xl font-bold text-white">Eng Land</h1>
          </Link>
        </div>

        {/* Các liên kết điều hướng */}
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
        <Link href="/schedule" className="text-white text-lg hover:text-green-400 transition ease-in-out duration-300">
          Lịch học
        </Link>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Nút Đăng nhập và Đăng ký */}
        <Link href="/login" className="text-white hover:text-green-400">
          Login
        </Link>
        <Link href="/signup">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition ease-in-out duration-300">
            Sign Up
          </button>
        </Link>
        
        {/* Chuyển đổi chế độ sáng/tối */}
        <ColorModeToggle />

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="SEARCH ⌘ + K"
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
