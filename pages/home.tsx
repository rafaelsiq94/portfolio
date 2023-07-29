import { Link } from "react-scroll";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const Main: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 dark:text-title">
            {t("translate:home-title")}
            <span className="text-green"> Rafael</span>!
          </h1>
          <p className="py-4 dark:text-text sm:max-w-[70%] m-auto">
            {t("translate:home-text")}
            <span className="text-green">
              {t("translate:home-text-item-1")}
            </span>
            ,
            <span className="text-green">
              {t("translate:home-text-item-2")}
            </span>{" "}
            {t("translate:home-text-item-3")}
            <span className="text-green"> business intelligence</span>
            {t("translate:home-text-2")}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/rafaelsiq94"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 dark:bg-elements cursor-pointer hover:scale-110 hover:text-green ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/rafaelsiq94/"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 dark:bg-elements cursor-pointer hover:scale-110 hover:text-green ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link
              activeClass="Contact"
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 dark:bg-elements cursor-pointer hover:scale-110 hover:text-green ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            {router.locale == "pt-BR" ? (
              <a href="/assets/resume/RAFAELDESIQUEIRA.pdf" aria-label="Resume" download>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 dark:bg-elements cursor-pointer hover:scale-110 hover:text-green ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </a>
            ) : (
              <a href="/assets/resume/RAFAELDESIQUEIRAEN.pdf" aria-label="Resume" download>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 dark:bg-elements cursor-pointer hover:scale-110 hover:text-green ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
