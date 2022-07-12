import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setName(name);
    setEmail(email);
    setSubject(subject);
    setMessage(message);
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto flex flex-col justify-center h-full ">
        <h2 className="py-4">
          Say <span className="text-green">Hi</span>!
        </h2>
        <div className="col-span-3 w-full h-auto shadow-xl rounded-xl lg:p-4">
          <div className="p-4">
            <form
              onSubmit={handleSubmit}
              action="https://getform.io/f/3e3edca7-a7d2-427b-8e95-7750e5996259"
              method="POST"
            >
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="border-2 rounded-lg p-2 flex border-text2"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">EMAIL</label>
                  <input
                    className="border-2 rounded-lg p-2 flex border-text2"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject</label>
                <input
                  className="border-2 rounded-lg p-2 flex border-text2"
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  className="border-2 rounded-lg p-2 border-text2"
                  rows="5"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className="w-full p-4 mt-4 text-white bg-green hover:bg-greenDark shadow-xl uppercase rounded-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
{/*         <div className="flex justify-center py-12">
          <Link
            activeClass="Home"
            to="home"
            smooth={true}
            offset={50}
            duration={500}
          >
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-elements">
                <HiOutlineChevronDoubleUp
                  className="text-green hover:text-greenDark"
                  size={30}
                />
              </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
