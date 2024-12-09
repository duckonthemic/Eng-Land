import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function UserPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showChangeAvatar, setShowChangeAvatar] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);

  const [message, setMessage] = useState("");

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) {
      router.push("/login");
      return;
    }

    async function fetchUserData() {
      try {
        const res = await fetch("http://localhost:5000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setUser(data.user);
        }
      } catch (err) {
        console.log("Lỗi khi lấy thông tin user:", err);
      }
    }

    async function fetchUserCourses() {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch("http://localhost:5000/api/user/courses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setPurchasedCourses(data.courses);
        }
      } catch (err) {
        console.log("Lỗi khi lấy danh sách khóa học:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
    fetchUserCourses();
  }, [router]);

  if (loading) return <div className="text-center mt-10">Đang tải...</div>;

  if (!user)
    return (
      <div className="text-center mt-10">
        Không thể lấy thông tin người dùng
      </div>
    );

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setMessage("");
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:5000/api/user/password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Đổi mật khẩu thành công!");
        setShowChangePassword(false);
        setOldPassword("");
        setNewPassword("");
      } else {
        setMessage(data.message || "Đổi mật khẩu thất bại");
      }
    } catch (err) {
      setMessage("Lỗi kết nối máy chủ");
    }
  };

  const handleChangeAvatar = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!avatarFile) {
      setMessage("Vui lòng chọn hình ảnh");
      return;
    }
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("avatar", avatarFile);

    try {
      const res = await fetch("http://localhost:5000/api/user/avatar", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Đổi avatar thành công!");
        const updatedUser = { ...user, avatar: data.avatar };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setShowChangeAvatar(false);
        setAvatarFile(null);
      } else {
        setMessage(data.message || "Đổi avatar thất bại");
      }
    } catch (err) {
      console.log(err);
      setMessage("Lỗi kết nối máy chủ");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-6 text-green-700">
          Trang Tài Khoản
        </h1>

        {message && (
          <p className="text-center text-green-600 font-semibold mb-4">
            {message}
          </p>
        )}

        <div className="flex flex-col md:flex-row md:space-x-8 items-center mb-8 shadow-md p-4 rounded-lg bg-green-100">
          <div className="flex-shrink-0">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
            ) : (
              <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center shadow-md">
                No Avatar
              </div>
            )}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-lg">
              <strong>Họ Tên:</strong> {user.firstName} {user.lastName}
            </p>
            <p className="text-lg">
              <strong>Email:</strong> {user.email}
            </p>

            <button
              onClick={() => setShowChangeAvatar(!showChangeAvatar)}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition shadow-lg"
            >
              Đổi Avatar
            </button>

            {showChangeAvatar && (
              <form
                className="mt-4"
                onSubmit={handleChangeAvatar}
                encType="multipart/form-data"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setAvatarFile(e.target.files[0])}
                  className="block mb-2 w-full"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition shadow-lg"
                >
                  Cập nhật Avatar
                </button>
              </form>
            )}
          </div>
        </div>

        <button
          onClick={() => setShowChangePassword(!showChangePassword)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition mb-8 shadow-lg"
        >
          Đổi mật khẩu
        </button>

        {showChangePassword && (
          <form
            onSubmit={handleChangePassword}
            className="mb-8 shadow p-4 rounded-lg bg-green-50"
          >
            <div className="mb-4">
              <input
                type="password"
                placeholder="Mật khẩu cũ"
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Mật khẩu mới"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition shadow-lg"
            >
              Cập nhật mật khẩu
            </button>
          </form>
        )}

        <h2 className="text-2xl font-semibold mb-4 text-green-700">
          Khóa Học Đã Mua
        </h2>
        {purchasedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {purchasedCourses.map((course) => (
              <div
                key={course.id}
                className="border border-green-300 rounded p-6 shadow hover:shadow-lg transition bg-green-50"
              >
                <h3 className="font-bold text-xl text-green-800">
                  {course.title}
                </h3>
                <p className="text-sm text-green-600 mb-2">
                  {course.description}
                </p>
                <p className="font-semibold text-green-600">
                  {course.price} VND
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-green-600">Bạn chưa mua khóa học nào.</p>
        )}
      </div>
    </div>
  );
}
