import React from "react";
const PrivacyPolicy = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 uppercase">
          Chính Sách Bảo Mật Thông Tin
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Mục Đích Thu Thập Thông Tin Cá Nhân
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nhằm quản lý cơ sở dữ liệu người dùng và hỗ trợ kịp thời cho các yêu
            cầu phát sinh từ phía khách hàng.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Loại Dữ Liệu Được Thu Thập
          </h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>Facebook auth ID</li>
            <li>Email</li>
            <li>Tên</li>
            <li>Avatar</li>
          </ul>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Các dữ liệu này được sử dụng để lưu trữ thông tin đăng nhập của
            người dùng thông qua các phương thức đăng nhập nhanh như Facebook,
            Google, iCloud. Người dùng có thể xóa thông tin này bất kỳ lúc nào.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Phạm Vi Sử Dụng Thông Tin
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Thông tin cá nhân được sử dụng để:
          </p>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>Hỗ trợ khách hàng khi mua sản phẩm.</li>
            <li>Giải đáp thắc mắc, khiếu nại.</li>
            <li>Tư vấn và quảng bá các sản phẩm, chương trình khuyến mãi.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Thời Gian Lưu Trữ Thông Tin
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Thông tin cá nhân sẽ được lưu trữ cho đến khi tài khoản của khách
            hàng bị vô hiệu hóa. Khách hàng có thể tự xóa hoặc liên hệ để được
            hỗ trợ.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Đối Tượng Chia Sẻ Thông Tin
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Các đối tượng có thể tiếp cận thông tin người dùng bao gồm:
          </p>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>Ban quản trị</li>
            <li>Đội ngũ phát triển trang web</li>
            <li>Đội ngũ bán hàng và chăm sóc khách hàng</li>
            <li>Cơ quan nhà nước có thẩm quyền</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Chúng tôi sử dụng cookie để ghi nhớ thông tin khách hàng và cải
            thiện trải nghiệm người dùng, chẳng hạn như lưu trạng thái bài học.
            Đồng thời, cookie giúp ngăn chặn hành vi chia sẻ tài khoản trái
            phép.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Cam Kết Bảo Mật Thông Tin
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Thông tin cá nhân của khách hàng được bảo mật tuyệt đối theo chính
            sách của chúng tôi. Trong trường hợp dữ liệu bị tấn công, chúng tôi
            sẽ thông báo và phối hợp với cơ quan chức năng để xử lý.
          </p>
        </section>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
