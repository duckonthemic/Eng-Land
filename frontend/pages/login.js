import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Đã xảy ra lỗi");
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/");
      }
    } catch (err) {
      setError("Không thể kết nối server");
    }
  };

  const handleSocialLogin = async (provider) => {
    await signIn(provider, { callbackUrl: "/" });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/loginbg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 relative animate-fadeIn">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Đăng nhập
        </h1>

        {error && (
          <p className="text-red-500 text-center font-semibold mb-4">{error}</p>
        )}

        {/* Nút đăng nhập Social */}
        <div className="flex flex-col space-y-3 mb-6">
          <button
            onClick={() => handleSocialLogin("google")}
            className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-2 hover:bg-gray-100 transition"
          >
            <Image
              src="/images/google_icon.webp"
              alt="Google"
              width={20}
              height={20}
            />
            <span className="font-medium text-gray-700">
              Tiếp tục với Google
            </span>
          </button>
          <button
            onClick={() => handleSocialLogin("facebook")}
            className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-2 hover:bg-gray-100 transition"
          >
            <Image
              src="/images/facebook_icon.png"
              alt="Facebook"
              width={20}
              height={20}
            />
            <span className="font-medium text-gray-700">
              Tiếp tục với Facebook
            </span>
          </button>
          <button
            onClick={() => handleSocialLogin("github")}
            className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-2 hover:bg-gray-100 transition"
          >
            <Image
              src="/images/github_icon.png"
              alt="GitHub"
              width={20}
              height={20}
            />
            <span className="font-medium text-gray-700">
              Tiếp tục với GitHub
            </span>
          </button>
        </div>

        <div className="relative flex items-center justify-center mb-6">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="px-2 bg-white text-gray-500 text-sm">Hoặc</span>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-full hover:bg-green-700 transition-colors"
          >
            Đăng nhập
          </button>
        </form>

        <div className="mt-4 flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-600">
            Bạn chưa có tài khoản?{" "}
            <Link
              href="/signup"
              className="text-green-600 font-semibold hover:underline"
            >
              Đăng ký
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            <Link
              href="/forgotpassword"
              className="text-blue-600 font-semibold hover:underline"
            >
              Quên mật khẩu?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
