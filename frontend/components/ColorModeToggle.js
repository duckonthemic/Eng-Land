import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import IconLightMode from './IconLightMode'; // Thay thế bằng biểu tượng của bạn cho chế độ sáng
import IconDarkMode from './IconDarkMode'; // Thay thế bằng biểu tượng của bạn cho chế độ tối
import styles from './styles.module.css';

export default function ColorModeToggle() {
  const [colorMode, setColorMode] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode);
  }, [colorMode]);

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={clsx(styles.toggle)}>
      <button
        className={clsx('clean-btn', styles.toggleButton)}
        type="button"
        onClick={toggleColorMode}
        title={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
        aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}>
        {colorMode === 'light' ? <IconDarkMode /> : <IconLightMode />}
      </button>
    </div>
  );
}
