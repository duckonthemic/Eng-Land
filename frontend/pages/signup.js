import React, { useState } from 'react';
import Link from 'next/link';

const Signup = () => {
  const [firstName, setFirstName]=useState('');
  const [lastName, setLastName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async(e) =>{
    e.preventDefault();
    setError('');
    if(password!==confirmPassword){
      setError('Mật khẩu không trùng khớp');
      return;
    }

    try {
      const res= await fetch('http://localhost:5000/api/auth/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({firstName,lastName,email,password})
      });
      const data= await res.json();
      if(!res.ok){
        setError(data.message||'Đã xảy ra lỗi');
      } else {
        alert('Đăng ký thành công, mời đăng nhập');
        window.location.href = '/login'; 
      }
    } catch(err){
      setError('Không thể kết nối server');
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.overlay}></div>
      <div style={styles.container}>
        <h1 style={styles.h1}>Tạo tài khoản</h1>
        <p style={styles.p}>
          Bạn đã có tài khoản?{' '}
          <Link href="/login" style={styles.link}>Đăng nhập</Link>
        </p>
        {error && <p style={{color:'red'}}>{error}</p>}
        <div style={{ height: '30px' }}></div>
        <form onSubmit={handleSignup} style={styles.form}>
          <div style={styles.nameContainer}>
            <div style={styles.formGroup}>
              <input type="text" placeholder="Họ" required style={styles.input}
                value={firstName} onChange={e=>setFirstName(e.target.value)} />
            </div>
            <div style={styles.formGroup}>
              <input type="text" placeholder="Tên" required style={styles.input}
                value={lastName} onChange={e=>setLastName(e.target.value)} />
            </div>
          </div>
          <div style={styles.formGroup}>
            <input type="email" placeholder="Email" required style={styles.input}
              value={email} onChange={e=>setEmail(e.target.value)} />
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
          <div style={styles.formGroup}>
            <input
              type="password"
              placeholder="Xác nhận mật khẩu"
              required
              style={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submit}>Tạo tài khoản</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    background: 'url("https://i.ibb.co/kHKq22y/image.png") no-repeat center center fixed',
    backgroundSize: 'cover',
    position:'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    overflow: 'hidden',
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
    minWidth:'320px',
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
  nameContainer: {
    width: '90%',
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    margin: '0 auto',
  },
  form: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  formGroup: {
    marginBottom: '15px',
    flex: 1,
    width:'100%',
    display:'flex',
    justifyContent:'center'
  },
  input: {
    width: '90%',
    padding: '15px 0',
    border: '2px solid #ccc',
    borderRadius: '30px',
    background: '#ffffff',
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

export default Signup;
