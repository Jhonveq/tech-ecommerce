import React from 'react'
import Image1 from '../../assets/hero/metaverse.png'
import Image2 from '../../assets/hero/image-robot2.png'
import Slider from 'react-slick'

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Up to 50% off on all Smart Home products" ,
        description: 'Ready to take your tech game to the next level? Try our products today and discover the difference for yourself!'
    },
    {
        id: 2,
        img: Image2,
        title: "Up to 30% off on all Apple's products" ,
        description: 'Cutting-Edge Technology: Stay ahead of the curve with our state-of-the-art technology and innovative features.'
    }
]

const Hero = ({handleOrderPopup}) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true      
    }

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px]
                    bg-gray-100 flex justify-center items-center dark:bg-gray-950 
                    dark:text-white duration-500'>
        
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'></div>
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                {ImageList.map(data => (     
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 overflow-hidden'>
                        <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                            <p className='text-sm'>{data.description}</p>
                            <div>
                                <button onClick={() => handleOrderPopup()} className=' bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200
                                                    text-white py-2 px-4 rounded-full ml-2'>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* Image Section */}
                        <div className='order-1 sm:order-2'>
                            <div className='relative z-10'>
                                <img src={data.img} alt="" 
                                    className='w-[300px] h-[300px] aspect-auto sm:w-[300px] sm:h-[450px] sm:scale-125 object-contain mx-auto lg:scale-125' 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                </Slider>
            </div>
    </div>
  )
}

export default Hero