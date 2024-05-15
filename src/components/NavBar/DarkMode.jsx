import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'

const DarkMode = () => {

    const element = document.documentElement

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            element.classList.remove('dark')
            localStorage.setItem('theme', 'light')          
        }
    }, [theme])


    
  return (
    <div>
        <button className={`text-primary text-xl pt-2  cursor-pointer ${theme === 'dark' ? 'hidden' : 'inline-block'}`} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}><MdDarkMode /></button>
        <button className={` text-primary pt-2 text-xl  cursor-pointer ${theme === 'light' ? 'hidden' : ' inline-block'}`}onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}><MdOutlineLightMode /></button>
    </div>
  )
}

export default DarkMode