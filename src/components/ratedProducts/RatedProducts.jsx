import React from 'react'
import Image1 from '../../assets/ratedProducts/apple-airpods.png'
import Image2 from '../../assets/ratedProducts/iPod.png'
import Image3 from '../../assets/ratedProducts/Psp.png'

import { FaStar } from 'react-icons/fa'


const RatedProducts = ({handleOrderPopup}) => {

  const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Airpods Pro 6",
        rating: 4.4,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        color: "White",
        aosDelay: '0' 
    },
    {
        id: 2,
        img: Image2,
        title: "Ipod 2024 Max",
        rating: 4.8,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        color: "Black",
        aosDelay: '0' 
    },
    {
        id: 3,
        img: Image3,
        title: "PlayStation",
        rating: 4.7,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        color: "Blue",
        aosDelay: '0' 
    }
]
  return (
    <div>
        <div className='container'>
        {/* header section */}
        <div className='text-left mb-24 max-w-[600px] mx-auto'>
          <p  className='text-sm text-primary'>Top Rated Products</p>
          <h1 className='text-3xl font-bold'>Best Products</h1>
          <p  className='text-xs text-gray-400'>Loresm ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam quae necessitatibus.</p>
        </div>
        {/* body section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
            {
              ProductsData.map(data => 
                <div data-aos="zoom-in" className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-2xl duration-300 group max-w-[300px]'>
                  {/* image section */}
                  <div className='h-[100px]'>
                    <img src={data.img} alt="" className='max-w-[200px] max-h-[180px] block mx-auto transform -translate-y-20 group hover:scale-105 duration-300 drop-shadow-md' />
                  </div>
                  {/* details section  */}
                  <div className='p-4 text-center'>
                    {/* star rating */}
                    <div className='w-full flex items-center justify-center gap-1'>
                      <FaStar className='text-yellow-500' />
                      <FaStar className='text-yellow-500' />
                      <FaStar className='text-yellow-500' />
                      <FaStar className='text-yellow-500' />
                    </div>
                    <h1 className='text-xl font-bold dark:text-white'>{data.title}</h1>
                    <p className='text-gray-400 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                    <button onClick={() => handleOrderPopup()} className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>Order Now</button>
                  </div>
                </div>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default RatedProducts