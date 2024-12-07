import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || 'Đã xảy ra lỗi');
      } else {
        // Đăng nhập thành công
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/'); // Chuyển về trang chủ, navbar sẽ đọc user và token ngay
      }
    } catch (err) {
      setError('Không thể kết nối server');
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.overlay}></div>
      <div style={styles.container}>
        <h1 style={styles.h1}>Đăng nhập</h1>
        <p style={styles.p}>
          Bạn chưa có tài khoản?{' '}
          <Link href="/signup" style={styles.link}>Đăng ký</Link>
        </p>
        {error && <p style={{color:'red', textAlign:'center'}}>{error}</p>}
        <div style={{ height: '30px' }}></div>
        <form style={styles.form} onSubmit={handleLogin}>
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
          <div style={styles.formGroup}>
            <input
              type="password"
              placeholder="Mật khẩu"
              required
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ height: '4vh' }}></div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submit}>Đăng nhập</button>
          </div>
        </form>
        <p style={styles.p}>
          <Link href="/forgotpassword" style={styles.link}>Quên mật khẩu?</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    background: 'url("https://i.ibb.co/kHKq22y/image.png") no-repeat center center fixed',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  overlay: {
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    background:'rgba(0,0,0,0.5)',
    zIndex:1
  },
  container: {
    position:'relative',
    zIndex:2,
    background: '#fefefe',
    borderRadius: '15px',
    marginLeft: '8vw',
    padding: '50px',
    width: '30vw',
    minWidth:'300px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
  h1: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  p: {
    color: '#555',
    margin: '10px 0',
    fontSize: '0.95rem',
  },
  link: {
    color: '#03a9f4',
    textDecoration: 'none',
    fontWeight:'bold'
  },
  form: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  formGroup: {
    marginBottom: '15px',
    width:'100%'
  },
  input: {
    width: '90%',
    padding: '15px 0',
    border: '2px solid #ccc',
    borderRadius: '30px',
    background: '#fff',
    color: '#333',
    fontSize: '1rem',
    textAlign: 'center',
    transition:'border-color 0.3s',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width:'100%'
  },
  submit: {
    background: '#059851',
    border: 'none',
    color: '#ffffff',
    padding: '15px',
    borderRadius: '30px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    width: '90%',
    transition:'background 0.3s',
  },
};

export default Login;
