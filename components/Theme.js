import { useTheme } from "next-themes";
import { useState } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Theme() {
  const [darkMode, setDarkMode] = useState(false);
  const {theme, setTheme} = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setDarkMode(darkMode === false ? true : false);
  }

  return (
      <div className='shadow-lg shadow-gray-400 rounded-full p-2 bg-elements'>
        <DarkModeSwitch
          className='dark:text-white'
          checked={darkMode}
          onChange={toggleDarkMode}
          size={25}
        />
      </div>
  )
}
