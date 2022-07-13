import { useTheme } from "next-themes";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Theme() {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useTheme();
  var lang;
  let router = useRouter();

  if(router.locale == "pt-BR") {
    lang = "en-US";
  } else {
    lang = "pt-BR"; 
  }

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setDarkMode(darkMode === false ? true : false);
  };

  return (
    <div>
      <div className="shadow-lg shadow-gray-400 rounded-full p-2 bg-elements">
        <DarkModeSwitch
          className="dark:text-white"
          checked={darkMode}
          onChange={toggleDarkMode}
          size={25}
        />
      </div>
      <Link href={router.asPath} locale={lang}>
        <a>{lang}</a>
      </Link>
    </div>
  );
}
