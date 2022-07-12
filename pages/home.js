import { Link } from "react-scroll";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 dark:text-title">
            Hi, I&#39;m <span className="text-green"> Rafael</span>!
          </h1>
          <p className="py-4 dark:text-text sm:max-w-[70%] m-auto">
            Experienced IT professional with knowledge in{" "}
            <span className="text-green">software development</span>,{" "}
            <span className="text-green">IT infraestructure</span> and{" "}
            <span className="text-green">business intelligence</span>, always
            looking for challanges and studying new technologies. This website
            was made with Next.js & Tailwind CSS. :)
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/rafaelsiq94"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 dark:bg-elements cursor-pointer hover:scale-110 hover:text-green ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/rafaelsiq94/"
              target="_blank"
              rel="noreferrer"
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
            {/* <Link href="/resume"> */}
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 dark:bg-elements cursor-pointer hover:scale-110 hover:text-green ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
