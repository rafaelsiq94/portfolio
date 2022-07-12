import { useTheme } from "next-themes";
import { useState } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Theme() {
  const [darkMode, setDarkMode] = useState(false);
  const {theme, setTheme} = useTheme('dark');

  const toggleDarkMode = () => {
    console.log(darkMode);
    console.log(theme);
    setTheme(theme === 'system' ? 'light' : theme === 'dark' ? 'light' : 'dark');
    setDarkMode(darkMode === false ? true : false);
    console.log(darkMode);
    console.log(theme);
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
