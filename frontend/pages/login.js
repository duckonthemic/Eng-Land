import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Đăng nhập</h1>
        <p style={styles.p}>
          Bạn không có tài khoản? <Link href="/signup" legacyBehavior><a style={styles.link}>Đăng ký</a></Link>
        </p>
        <div style={{ height: '30px' }}></div>
        <form>
          <div style={styles.formGroup}>
            <input type="email" placeholder="Email" required style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <input type="password" placeholder="Mật khẩu" required style={styles.input} />
          </div>
          <div style={{ height: '4vh' }}></div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submit}>Đăng nhập</button>
          </div>
        </form>
        <p style={styles.p}>
          <Link href="/forgotpassword" legacyBehavior><a style={styles.link}>Quên mật khẩu?</a></Link>
        </p>
      </div>
    </div>
  );
};
const styles = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    background: '#121212',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    height: '90.5vh',
    backgroundImage: 'url("https://i.ibb.co/kHKq22y/image.png")',
    backgroundSize: 'cover',
  },
  container: {
    background: '#e9e9e9',
    borderRadius: '15px',
    marginLeft: '8vw',
    padding: '50px',
    width: '30vw',
    height: '60vh',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
  h1: {
    fontSize: '2.5rem',
    color: '#43484a',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  p: {
    color: '#43484a',
    margin: '10px 0',
    fontSize: '0.9rem',
  },
  link: {
    color: '#03a9f4',
    textDecoration: 'none',
  },
  formGroup: {
    marginBottom: '15px',
    flex: 1,
  },
  input: {
    width: '90%',
    padding: '15px 0',
    border: 'none',
    borderRadius: '30px',
    background: '#ffffff',
    color: '#121212',
    fontSize: '1rem',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  submit: {
    background: '#059851',
    border: 'none',
    color: '#ffffff',
    padding: '15px',
    borderRadius: '30px',
    fontSize: '1.3rem',
    cursor: 'pointer',
    width: '90%',
  },
};
export default Login;