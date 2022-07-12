import Image from 'next/image';
import React from 'react';
import MundoLolita from '../public/assets/resume/mundololita.jpeg';
import TIE from '../public/assets/resume/tie.jpeg';

const Resume = () => {
  return (
    <div id='resume' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest'>
          My last 2 <span className='text-green'>Experiences</span>
        </p>
        <h2 className='py-4'>Download the full PDF <span className='text-green'>here</span>!</h2>
        <div className='grid grid-cols-2 lg:grid-cols-2 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-elements'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='items-center p-6'>
                <Image src={MundoLolita} width='200px' height='200px' alt='/' className='rounded-full' />
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className='text-tile'>Mundo Lolita</h3>
								<h3 className='text-green'>IT Analyst</h3>
								<h3 className='dark:text-text'>2021-Today</h3>
								<br/>
								<span className='dark:text-text'>Software Development with Python, Django, JavaScript and React. I developed many integrations between VTEX, carriers, TikTok, Pinterest, OnClick ERP to achive better results with our ecommerce and create a Datawarehouse to support BI Dashboards.</span>
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
								<h3 className='text-green'>IT Coordinator</h3>
								<h3 className='dark:text-text'>2018-2021</h3>
								<br/>
								<span className='dark:text-text'>Coordination of IT technical support team, projects for infraestructure, security, improvements and Microsoft licensing. I provided an increase in the solutions offered by the company, through partnerships with Kaspersky, VMWare and Veeam.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;