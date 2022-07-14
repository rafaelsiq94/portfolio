import Image from 'next/image';
import React from 'react';
import MundoLolita from '../public/assets/resume/mundololita.jpeg';
import TIE from '../public/assets/resume/tie.jpeg';
import useTranslation from 'next-translate/useTranslation';

const Resume = () => {
  let { t } = useTranslation();

  return (
    <div id='resume' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest'>
          {t("translate:resume-title-1")}<span className='text-green'>{t("translate:resume-title-2")}</span>
        </p>
        <h2 className='py-4'>{t("translate:resume-sub-1")}<a href="/assets/resume/RAFAELDESIQUEIRA.pdf" download><span className='text-green hover:scale-110 hover:text-greenDark cursor-pointer'>{t("translate:resume-sub-2")}</span></a>!</h2>
        <div className='grid grid-cols-2 lg:grid-cols-2 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-elements'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='items-center p-6'>
                <Image src={MundoLolita} width='200px' height='200px' alt='/' className='rounded-full' />
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className='text-tile'>Mundo Lolita</h3>
								<h3 className='text-green'>{t("translate:resume-job-title-1")}</h3>
								<h3 className='dark:text-text'>2021-{t("translate:resume-job-date-1")}</h3>
								<br/>
								<span className='dark:text-text'>{t("translate:resume-job-description-1")}</span>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-elements'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='items-center p-6'>
                <Image src={TIE} width='200px' height='200px' alt='/' className='rounded-full' />
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className='text-tile'>TIE Tecnologia da Informação Empresarial</h3>
								<h3 className='text-green'>{t("translate:resume-job-title-2")}</h3>
								<h3 className='dark:text-text'>2018-2021</h3>
								<br/>
								<span className='dark:text-text'>{t("translate:resume-job-description-2")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;