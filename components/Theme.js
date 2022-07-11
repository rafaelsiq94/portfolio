import { useTheme } from "next-themes";
import { useState } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Theme() {
  const [darkMode, setDarkMode] = useState(true);
  const {theme, setTheme} = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setDarkMode(darkMode === false ? true : false);
  }

  return (
        <DarkModeSwitch
          checked={darkMode}
          onChange={toggleDarkMode}
          size={25}
        />
  )
}
