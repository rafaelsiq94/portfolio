import React from 'react'
import { Element } from 'react-scroll'
import Image from 'next/image'
import profileImage from "../public/images/profileImage.jpeg"

export default function HomePage() {
  return (
    <Element id="home" name="home">
      <div>
        <div className='flex justify-between text-center md:mx-20 md:pt-32 pt-28'>
          <div className='w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block'>
            <Image
              src={profileImage}
              alt="profileImage"
              layout="fill"
              objectFit="cover"
              className='rounded-full cursor-pointer hidden md:block'
            />
          </div>
          <div className='flex flex-col md:ml-20 mx-10 mt-10'>
            <h1 className='font-bold text-7xl text-left mb-5 dark:text-title'>
              Hi, I'm <span className='text-green'>Renan</span>!
            </h1>
            <p className='text-left font-normal font mb-5 flex-wrap dark:text-text'>
              And this website was made with Next.js & Tailwindcss. :)
            </p>
            <a href="https://www.linkedin.com/in/rafaelsiq94" target="_blank" rel="noreferrer" className='font-semibold pt-5 text-white bg-green rounded-md w-60 h-16 text-lg hover:bg-greenDark'>
              Check my LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Element>
  )
}
