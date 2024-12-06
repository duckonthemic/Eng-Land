import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cartStr = localStorage.getItem('cart');
      if (cartStr) {
        setCart(JSON.parse(cartStr));
      }
    }
  }, []);

  const removeCourse = (id) => {
    const newCart = cart.filter(c=>c.id!==id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const totalPrice = cart.reduce((sum, c) => sum+(c.price||0), 0);

  const goToPayment = () => {
    setError('');
    setMessage('');
    // Kiểm tra nếu user đã đăng nhập chưa
    const token = localStorage.getItem('token');
    if(!token) {
      setError('Vui lòng đăng nhập trước khi thanh toán.');
      return;
    }
    if(cart.length===0) {
      setError('Giỏ hàng rỗng.');
      return;
    }
    // Chuyển sang trang payment để điền thông tin thanh toán
    router.push('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Giỏ hàng</h1>
        {error && <p className="text-red-500 font-semibold mb-4">{error}</p>}
        {message && <p className="text-green-500 font-semibold mb-4">{message}</p>}

        {cart.length>0 ? (
          <div>
            <ul className="divide-y divide-gray-200 mb-4">
              {cart.map(course=>(
                <li key={course.id} className="flex justify-between items-center py-4">
                  <div>
                    <h2 className="font-bold text-lg">{course.title}</h2>
                    <p className="text-sm text-gray-600 mb-1">{course.description}</p>
                    <p className="text-green-600 font-semibold">{course.price} VND</p>
                  </div>
                  <button 
                    onClick={()=>removeCourse(course.id)}
                    className="text-red-500 hover:text-red-600 font-semibold"
                  >
                    Xóa
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">Tổng: {totalPrice} VND</p>
              <button 
                onClick={goToPayment}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Thanh toán
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Giỏ hàng rỗng</p>
        )}
      </div>
    </div>
  );
}
