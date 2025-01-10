import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark' || false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.removeItem('theme');
    }
  }, [isDarkMode]);

  return (
    <motion.button
      dir="ltr"
      className={`w-16 h-8 flex items-center justify-between rounded-full ${isDarkMode ? 'bg-primary' : 'bg-gray-50'} shadow-toggle-shadow relative p-1 z-[999]`}
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      <Image src={isDarkMode ? `/assets/icons/Sun_Dark_Inactive.svg` : `/assets/icons/Sun_Light_Active.svg`} alt="Sun" className="z-[50]" width={20} height={20} />

      <Image src={isDarkMode ? `/assets/icons/Moon-Dark-Active.svg` : `/assets/icons/Moon_Light_Inactive.svg`} className="z-[50]" alt="Moon" width={20} height={20} />

      <motion.div
        className="absolute w-6 h-6 bg-[#D7383B] rounded-full shadow"
        initial={{ x: -2 }} // Starting position
        animate={{
          x: isDarkMode ? 34 : -2,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 25,
        }}
      ></motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
