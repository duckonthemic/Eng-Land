import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function PaymentPage() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [fullName, setFullName] = useState("");
  const [bankName, setBankName] = useState("Vietcombank");
  const [accountNumber, setAccountNumber] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const banks = [
    "Vietcombank",
    "Agribank",
    "BIDV",
    "ShinhanBank",
    "ACB",
    "DongABank",
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartStr = localStorage.getItem("cart");
      if (cartStr) {
        setCart(JSON.parse(cartStr));
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Vui lòng đăng nhập trước khi thanh toán.");
      setLoading(false);
      return;
    }
    if (cart.length === 0) {
      setError("Giỏ hàng rỗng.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          courses: cart,
          fullName,
          bankName,
          accountNumber,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Thanh toán thất bại");
      } else {
        setMessage("Thanh toán thành công!");
        localStorage.removeItem("cart");
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }
        setTimeout(() => {
          router.push("/user");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
      setError("Lỗi kết nối máy chủ");
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = cart.reduce((sum, c) => sum + (c.price || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Thông Tin Thanh Toán
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}

        <div className="mb-6 bg-green-100 p-4 rounded">
          <p className="font-semibold text-green-700">Thông tin thanh toán: ABCXYZ</p>
          <p className="font-semibold text-green-700">STK: 04412312342</p>
          <p className="font-semibold text-green-700">Ngân hàng Vietcombank</p>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600 mb-6">Giỏ hàng rỗng</p>
        ) : (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Khóa học trong giỏ:</h2>
            <ul className="space-y-4">
              {cart.map((c) => (
                <li key={c.id} className="flex items-center bg-green-50 p-4 rounded-lg shadow">
                  <div className="w-20 h-20 relative mr-4">
                    <Image
                      src={c.image || "/image/course-default.jpg"}
                      alt={c.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">{c.title}</h3>
                    <p className="text-green-600">{c.price.toLocaleString()} VND</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right">
              <span className="text-xl font-bold text-green-800">Tổng: {totalPrice.toLocaleString()} VND</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-green-700 font-medium mb-2">Họ và Tên</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-green-700 font-medium mb-2">Ngân hàng</label>
            <select
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full px-4 py-3 border border-green-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {banks.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-green-700 font-medium mb-2">Số Tài Khoản</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
              className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="text-center">
            <p className="text-green-700 font-medium mb-2">Quét mã QR để thanh toán</p>
            <div className="inline-block w-40 h-40 relative mx-auto">
              <Image
                src="/images/qrpayment.png"
                alt="QR Code Thanh Toán"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Đang xử lý..." : "Xác nhận thanh toán"}
          </button>
        </form>
      </div>
    </div>
  );
}
