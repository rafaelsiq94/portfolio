import { useTheme } from "next-themes";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Link from "next/link";
import { useRouter } from "next/router";
import { US, BR } from 'country-flag-icons/react/3x2';

interface ThemeProps { }

const Theme: React.FC<ThemeProps> = () => {
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();
  const lang = router.locale == "pt-BR" ? "en-US" : "pt-BR";

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="grid grid-cols-2 items-center gap-4">
      <div className="shadow-lg shadow-gray-400 rounded-full p-2 bg-elements hover:scale-110">
        <DarkModeSwitch
          className="dark:text-white hover:scale-110"
          checked={darkMode}
          onChange={toggleDarkMode}
          size={25}
        />
      </div>
      <Link href={router.asPath} locale={lang}>
        {router.locale == "pt-BR" ?
          <US title="English" className="cursor-pointer hover:scale-110" /> :
          <BR title="Portuguese" className="cursor-pointer hover:scale-110" />
        }
      </Link>
    </div>
  );
};

export default Theme;
