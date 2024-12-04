import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Về Eng Land</h4>
                    <ul>
                        <li><a href='/about' className="hover:text-green-500 hover:underline">Giới thiệu</a></li>
                        <li><a href='/terms' className="hover:text-green-500 hover:underline">Điều khoản sử dụng</a></li>
                        <li><a href='/privacy-policy' className="hover:text-green-500 hover:underline">Chính sách bảo mật</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Fanpage</h4>
                    <ul>
                        <li><a href="#" className="hover:text-green-500 hover:underline">Eng Land Official</a></li>
                        <li><a href="#" className="hover:text-green-500 hover:underline">Học tiếng Anh cùng Eng Land</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Social</h4>
                    <ul className="social-icons flex space-x-4">
                        <li><a href="#" className="hover:text-green-500 hover:underline"><i className="ti-facebook"></i></a></li>
                        <li><a href="#" className="hover:text-green-500 hover:underline"><i className="ti-youtube"></i></a></li>
                        <li><a href="#" className="hover:text-green-500 hover:underline"><i className="ti-instagram"></i></a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Liên hệ</h4>
                    <p><strong>Trụ sở chính:</strong> 123 Đường ABC, Quận X, TP.HCM</p>
                    <p><strong>Hotline:</strong> (+84) 123 456 789</p>
                    <p><strong>Email:</strong> support@england.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © {new Date().getFullYear()} Eng Land. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;