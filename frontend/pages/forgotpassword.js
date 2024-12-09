import React, { useState } from "react";
import Link from "next/link";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(
      "If an account with that email exists, a password reset link has been sent."
    );
  };
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Quên mật khẩu</h1>
        <p style={styles.p}>
          Nhập email của bạn để nhận link đặt lại mật khẩu.
        </p>
        <div style={{ height: "30px" }}></div>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <input
              type="email"
              placeholder="Email"
              required
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {message && <p style={styles.message}>{message}</p>}
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submit}>
              Gửi link
            </button>
          </div>
        </form>
        <p style={styles.p}>
          <Link href="/login" legacyBehavior>
            <a style={styles.link}>Đăng nhập</a>
          </Link>
        </p>
      </div>
    </div>
  );
};
const styles = {
  body: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    background: "#121212",
    color: "#ffffff",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    height: "90.5vh",
    backgroundImage: 'url("https://i.ibb.co/kHKq22y/image.png")',
    backgroundSize: "cover",
    overflow: "hidden",
  },
  container: {
    background: "#e9e9e9",
    borderRadius: "15px",
    marginLeft: "8vw",
    padding: "50px",
    width: "30vw",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
  },
  h1: {
    fontSize: "2.5rem",
    color: "#43484a",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  p: {
    color: "#43484a",
    margin: "10px 0",
    fontSize: "0.9rem",
  },
  link: {
    color: "#03a9f4",
    textDecoration: "none",
  },
  formGroup: {
    marginBottom: "15px",
    flex: 1,
  },
  input: {
    width: "90%",
    padding: "15px 0",
    border: "none",
    borderRadius: "30px",
    background: "#ffffff",
    color: "#121212",
    fontSize: "1rem",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  submit: {
    background: "#059851",
    border: "none",
    color: "#ffffff",
    padding: "15px",
    borderRadius: "30px",
    fontSize: "1.3rem",
    cursor: "pointer",
    width: "90%",
  },
  message: {
    color: "green",
    fontSize: "0.9rem",
  },
};
export default ForgotPassword;
