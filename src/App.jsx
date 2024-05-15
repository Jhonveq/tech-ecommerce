import React, { useEffect, useState } from 'react'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Aos from 'aos'
import 'aos/dist/aos.css'
import RatedProducts from './components/ratedProducts/RatedProducts'
import Banner from './components/banner/Banner'
import Subscribe from './components/subscribe/Subscribe'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Popup from './components/popup/Popup'

const App = () => {

  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup =() => {
    setOrderPopup(!orderPopup)
  }
  
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    }) 
  }, [])
  
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <RatedProducts  handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App