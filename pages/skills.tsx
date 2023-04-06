import Image from 'next/image';
import React, { FC } from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import NextJS from '../public/assets/skills/nextjs.png';
import Python from '../public/assets/skills/python.png';
import Django from '../public/assets/skills/django.png';
import useTranslation from 'next-translate/useTranslation';

const Skills: FC = () => {
  const { t } = useTranslation();

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest'>
          {t("translate:skills-1")}<span className='text-green'>{t("translate:skills-2")}</span>
        </p>
        <h2 className='py-4'>{t("translate:skills-sub")}</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            { image: Html, name: 'HTML' },
            { image: Css, name: 'CSS' },
            { image: Javascript, name: 'JavaScript' },
            { image: ReactImg, name: 'React' },
            { image: Tailwind, name: 'Tailwind CSS' },
            { image: Python, name: 'Python' },
            { image: Django, name: 'Django' },
            { image: NextJS, name: 'Next.js' },
          ].map((skill, index) => (
            <div
              key={index}
              className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-elements'
            >
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={skill.image} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
