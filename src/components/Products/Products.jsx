import React from 'react'
import Image1 from '../../assets/topProducts/iphone15.jpg'
import Image2 from '../../assets/topProducts/iphone14.jpg'
import Image3 from '../../assets/topProducts/airpods.jpg'
import Image4 from '../../assets/topProducts/iphoneCase.jpg'
import Image5 from '../../assets/topProducts/iWatch.jpg'
import { FaStar } from 'react-icons/fa'

const Products = () => {

    const ProductsData = [
        {
            id: 1,
            img: Image1,
            title: "Iphone 15 Pro Max",
            rating: 4.7,
            color: "White",
            aosDelay: '0' 
        },
        {
            id: 2,
            img: Image2,
            title: "Iphone 14 Pro Max",
            rating: 4.7,
            color: "Purple",
            aosDelay: '0' 
        },
        {
            id: 3,
            img: Image3,
            title: "AirPods",
            rating: 4.7,
            color: "White",
            aosDelay: '0' 
        },
        {
            id: 4,
            img: Image4,
            title: "Iphone Case",
            rating: 4.7,
            color: "White",
            aosDelay: '0' 
        },
        {
            id: 5,
            img: Image5,
            title: "iWatch",
            rating: 4.7,
            color: "White",
            aosDelay: '0' 
        }
    ]

  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos='fade-up' className='text-sm text-primary'>Top Selling Products</p>
                    <h1 data-aos='fade-up' className='text-3xl font-bold'>Products</h1>
                    <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam quae necessitatibus.</p>
                </div>
            {/* Body section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4
                                lg:grid-cols-5 place-items-center gap-5'>
                {/* card section */}
                {
                    ProductsData.map(data => 
                        <div
                            data-aos='fade-up'
                            data-aos-delay={data.aosDelay} 
                            key={data.id} className='space-y-3'
                        >
                            <img src={data.img} alt="" 
                            className='h-[220px] w-[150px] object-cover rounded-md'/>
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex items-center gap-1'>
                                <FaStar className='text-yellow-400'/>
                                <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
                </div>
                {/* view all button */}
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cur bg-primary text-white py-2 px-5 rounded-md'>
                        View All
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products