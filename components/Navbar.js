import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Theme from "./Theme";
import useTranslation from "next-translate/useTranslation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let { t } = useTranslation();

  return (
    <div>
      <nav className="fixed z-20 w-full">
        <div className="w-full">
          <div className="flex items-center h-20 w-full bg-white dark:bg-background ">
            <div className="flex items-center sm:mx-10 md:mx-20 justify-between w-full">
              <div className="ml-3 flex justify-center items-center flex-shrink-0">
                <Theme/>
                <h1 className="ml-14 font-bold text-xl dark:text-title">
                  Rafael de Siqueira
                </h1>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    activeClass="Home"
                    to="home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-green px-3 py-2 text-md"
                  >
                    {t("translate:nav-1")}
                  </Link>
                  <Link
                    activeClass="Skills"
                    to="skills"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-green px-3 py-2 text-md"
                  >
                    {t("translate:nav-2")}
                  </Link>
                  <Link
                    activeClass="Resume"
                    to="resume"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-green px-3 py-2 text-md"
                  >
                    {t("translate:nav-3")}
                  </Link>
                  <Link
                    activeClass="Contact"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-green hover:dark:text-greenDark px-3 py-2 text-md"
                  >
                    {t("translate:nav-4")}
                  </Link>
                </div>
              </div>
            </div>

            <div className="mr-3 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-green text-white inline-flex items-justify-center p-2 rounded-md hover:bg-greenDark focus:outline-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white dark:bg-elements mx-4 mr-20 pt-4 pb-4 space-y-1"
              >
                <Link
                  href="/home"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-green dark:text-green hover:dark:text-greenDark block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("translate:nav-1")}
                </Link>
                <Link
                  href="/skills"
                  activeClass="skills"
                  to="skills"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="cursor-pointer hover:text-green dark:text-green hover:dark:text-greenDark block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("translate:nav-2")}
                </Link>

                <Link
                  href="/resume"
                  activeClass="resume"
                  to="resume"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="cursor-pointer hover:text-green dark:text-green hover:dark:text-greenDark block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("translate:nav-3")}
                </Link>

                <Link
                  href="/contact"
                  activeClass="contact"
                  to="contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:text-green dark:text-green hover:dark:text-greenDark block px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("translate:nav-4")}
                </Link>
              </div>
            </div>
          )}
        </Transition>

      </nav>
    </div>
  );
}

export default Navbar;
