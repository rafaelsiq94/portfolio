import React from 'react'

export default function Footer() {
	const year = new Date().getFullYear();

  return (
    <div className='w-full h-16 flex justify-center items-center'>
      <h1 className="text-xl ml-2 dark:text-title">
			 © {year} - Developed by <span className='text-green'>Rafael de Siqueira</span>
			</h1>
		</div>
  )
}
