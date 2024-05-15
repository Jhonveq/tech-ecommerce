import React from 'react'

const Subscribe = () => {
  return (
    <div data-aos="zoom-in" className='mb-20 bg-gradient-to-r from-primary/75 to-primary/40 dark:bg-gray-800 text-white'>
        <div className='container backdrop-blur-sm py-10'>
             <div className='space-y-6 max-w-xl mx-auto'>
                <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
                <input type="text" data-aos="fade-up" placeholder='Enter your email' className='w-full p-3 dark:bg-gray-900 dark:text-white text-gray-900'/>
            </div>
        </div>
    </div>
  )
}

export default Subscribe