"use client";

import { useState } from "react";

export default function Consult() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    courseInterest: "",
    level: "",
    message: "",
    receiveCommunications: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setIsSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      courseInterest: "",
      level: "",
      message: "",
      receiveCommunications: false,
    });
  };

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row lg:space-x-12">
      {/* Thông tin giới thiệu */}
      <div className="bg-gradient-to-br from-green-800 to-green-400 text-gray-100 p-8 rounded-2xl shadow-lg lg:w-1/3 mb-8 lg:mb-0 animate-fade-in">
        <h1 className="text-3xl font-semibold mb-4">
          Liên hệ với đội ngũ của chúng tôi!
        </h1>
        <img src="/images/contact-hero.png" alt="Liên hệ" />
        <ul className="list-disc pl-5 space-y-2">
          <li>Thảo luận về nhu cầu học tiếng Anh của bạn.</li>
          <li>Tìm hiểu về các khóa học phù hợp với mục tiêu của bạn.</li>
          <li>Nhận tư vấn về lộ trình học tập và nâng cao kỹ năng.</li>
          <li>Và bất kỳ điều gì bạn quan tâm.</li>
        </ul>
      </div>

      {/* Form Liên hệ */}
      <div className="bg-white shadow-lg rounded-2xl p-8 lg:w-2/3 animate-slide-in">
        {isSubmitted && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {/* Họ và Tên */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="mb-4 md:flex-1">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="firstName"
              >
                Họ*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="shadow-sm appearance-none border border-green-300 hover:border-green-500 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                placeholder="Nhập họ của bạn"
                required
              />
            </div>

            <div className="mb-4 md:flex-1">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="lastName"
              >
                Tên*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="shadow-sm appearance-none border border-green-300 hover:border-green-500 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                placeholder="Nhập tên của bạn"
                required
              />
            </div>
          </div>

          {/* Email và Số Điện Thoại */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="mb-4 md:flex-1">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm appearance-none border border-green-300 hover:border-green-500 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                placeholder="Nhập email của bạn"
                required
              />
            </div>

            <div className="mb-4 md:flex-1">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="phone"
              >
                Số Điện Thoại*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow-sm appearance-none border border-green-300 hover:border-green-500 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                placeholder="Nhập số điện thoại của bạn"
                required
              />
            </div>
          </div>

          {/* Khóa Học Quan Tâm và Mức Độ */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="mb-4 md:flex-1">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="courseInterest"
              >
                Khóa Học Quan Tâm*
              </label>
              <select
                id="courseInterest"
                name="courseInterest"
                value={formData.courseInterest}
                onChange={handleChange}
                className="shadow-sm appearance-none border border-green-300 hover:border-green-500 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                required
              >
                <option value="">-- Chọn Khóa Học --</option>
                <option value="IELTS Cơ Bản">IELTS Cơ Bản</option>
                <option value="IELTS Nâng Cao">IELTS Nâng Cao</option>
                <option value="Khóa Thi Toàn Diện">Khóa Thi Toàn Diện</option>
                <option value="TOEIC">TOEIC</option>
              </select>
            </div>

            <div className="mb-4 md:flex-1">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="level"
              >
                Mức Độ*
              </label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="shadow-sm appearance-none border border-green-300 hover:border-green-500 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                required
              >
                <option value="">-- Chọn Mức Độ --</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Tin Nhắn */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="message"
            >
              Tin Nhắn*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow-sm appearance-none border border-green-300 hover:border-green-500 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
              placeholder="Vui lòng cung cấp một số thông tin về mục tiêu hoặc những gì bạn đang cố gắng giải quyết"
              rows="4"
              required
            />
          </div>

          {/* Nhận Thông Tin */}
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="receiveCommunications"
                checked={formData.receiveCommunications}
                onChange={handleChange}
                className="form-checkbox text-green-500 transition duration-200"
              />
              <span className="ml-2 text-gray-700">
                Tôi đồng ý nhận các thông tin liên lạc khác từ Eng Land
              </span>
            </label>
          </div>

          {/* Nút Gửi */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Gửi
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
