import React from 'react'
import Logo from "../../assets/logoE.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'

const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/about"
    },
    {
        title: "Contact",
        link: "/contact"
    },
    {
        title: "Blog",
        link: "/blog"
    },
]

const Footer = () => {
  return (
    <div className=' bg-gradient-to-r from-primary/75 to-primary/40 dark:bg-gray-800 text-white'>
        <div className='container'>
            <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-10 pt-5'>
                {/* company details  */}
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                        <img src={Logo} alt="" className='max-w-[50px]'/>
                        GizmoGalaxy
                    </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quae cumque unde, est ullam id.</p>
                </div>

                {/* Footer links  details  */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div >
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>
                                Important Links
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map(link => 
                                        <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                            <span>{link.title}</span>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div >
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>
                                Links
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map(link => 
                                        <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                            <span>{link.title}</span>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                    {/* social links  */}
                    <div>
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="https://instagram.com" target='_blank'>
                                <FaInstagram className='text-3xl' />
                            </a>
                            <a href="https://facebook.com" target='_blank'>
                                <FaFacebook className='text-3xl' />
                            </a>
                            <a href="https://linkedin.com" target='_blank'>
                                <FaLinkedin className='text-3xl' />
                            </a>
                        </div>
                        <div className='mt-6'>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow />
                                    <p>Las Vegas, Nevada, US.</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FaMobileAlt />
                                    <p>+1 7021234567</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer