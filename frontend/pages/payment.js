import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function PaymentPage() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [fullName, setFullName] = useState('');
  const [bankName, setBankName] = useState('Vietcombank');
  const [accountNumber, setAccountNumber] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Danh sách ngân hàng
  const banks = ['Vietcombank', 'Agribank', 'BIDV', 'ShinhanBank', 'ACB', 'DongABank'];

  useEffect(() => {
    // Lấy cart từ localStorage
    if (typeof window !== 'undefined') {
      const cartStr = localStorage.getItem('cart');
      if (cartStr) {
        setCart(JSON.parse(cartStr));
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    const token = localStorage.getItem('token');
    if(!token) {
      setError('Vui lòng đăng nhập trước khi thanh toán.');
      setLoading(false);
      return;
    }
    if(cart.length===0) {
      setError('Giỏ hàng rỗng.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/checkout', {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          courses: cart,
          fullName,
          bankName,
          accountNumber
        })
      });
      const data = await res.json();
      if(!res.ok) {
        setError(data.message||'Thanh toán thất bại');
      } else {
        setMessage('Thanh toán thành công!');
        // Xóa giỏ hàng
        localStorage.removeItem('cart');
        // Cập nhật user info nếu trả về
        if(data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        // Chuyển hướng về /user sau 2s
        setTimeout(() => {
          router.push('/user');
        },2000);
      }
    } catch(err) {
      console.log(err);
      setError('Lỗi kết nối máy chủ');
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = cart.reduce((sum, c) => sum+(c.price||0),0);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Thông tin thanh toán</h1>
        {error && <p className="text-red-500 font-semibold mb-4">{error}</p>}
        {message && <p className="text-green-500 font-semibold mb-4">{message}</p>}

        {/* Thông tin thanh toán ABCXYZ */}
        <div className="mb-4">
          <p className="mb-2 font-semibold text-gray-800">Thông tin thanh toán: ABCXYZ</p>
          <p className="mb-2 font-semibold">STK: 04412312342</p>
          <p className="mb-2 font-semibold">Ngân hàng Vietcombank</p>          
        </div>

        {cart.length === 0 && (
          <p className="text-gray-600 mb-4">Giỏ hàng rỗng</p>
        )}

        {cart.length > 0 && (
          <div className="mb-4">
            <h2 className="font-bold mb-2">Khóa học trong giỏ:</h2>
            <ul className="list-disc list-inside mb-2">
              {cart.map(c=>(
                <li key={c.id} className="mb-2 flex items-center space-x-2">
                  <div className="w-16 h-16 flex-shrink-0 relative">
                    {/* Hiển thị hình ảnh khóa học */}
                    <Image
                      src={c.image || '/image/course-default.jpg'}
                      alt={c.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{c.title}</p>
                    <p className="text-sm text-gray-600">{c.price} VND</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="font-bold">Tổng: {totalPrice} VND</p>
          </div>
        )}

        {/* Form nhập thông tin thanh toán */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Họ và Tên</label>
            <input
              type="text"
              value={fullName}
              onChange={(e)=>setFullName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Ngân hàng</label>
            <select
              value={bankName}
              onChange={(e)=>setBankName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              {banks.map(bank=>(
                <option key={bank} value={bank}>{bank}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Số Tài Khoản</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e)=>setAccountNumber(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>

          {/* Hiển thị mã QR */}
          <div className="mb-4 text-center">
            <p className="mb-2 font-semibold">Quét mã QR để thanh toán</p>
            <div className="inline-block relative w-40 h-40">
              <Image
                src="/images/qrpayment.png"
                alt="QR Code Thanh Toán"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition ${loading?'opacity-50 cursor-not-allowed':''}`}
          >
            {loading ? 'Đang xử lý...' : 'Xác nhận thanh toán'}
          </button>
        </form>
      </div>
    </div>
  );
}
