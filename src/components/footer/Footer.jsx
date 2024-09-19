import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import { IoMailSharp } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-900 py-20 px-4'>
        <div className='m-auto max-w-7xl grid gap-10 md:grid-cols-3'>
            <div className='md:px-12'>
                <h3 className='text-white text-3xl mb-4'>ABAccount</h3>
                <p className=' text-sm text-gray-300'>AB Accounting Services provides comprehensive accounting solutions for UK businesses of all sizes. <br/> <br/> Our team of professional accountants is dedicated to helping your business grow through tailored financial strategies and seamless compliance with UK regulations.</p>

            </div>
            <div className='text-white text- md:px-10'>
                <h3 className='mb-6 text-lg'> Links</h3>
                <ul>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to={"/"}> Home</NavLink> </li>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to="/services"> Services</NavLink></li>
                <li className='hover:text-gray-400 cursor-pointer'> <NavLink to={"about-us"}> About Us</NavLink></li>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to={"contact-us"}> Contact US</NavLink></li>
                </ul>
                
            </div>
            <div className='text-white text-'>
                <h3>Contact Us</h3>
                <p></p>
                <div className='flex gap-5 my-4 items-center'>
                <FaHouse/> <address>18 Thricknells Close, Luton, LU3 3RP</address>

                </div><div className='flex gap-5 my-4 items-center'>
                <FaPhoneAlt/>       <a href="tel:+07405141694">07405141694</a>


                </div><div className='flex gap-5 my-4 items-center'>
                <IoMailSharp/> <a href="mailto:support@abfaccounting.com"> support@abfaccounting.com</a>

                </div>
                
                </div>
      
        </div>

        
    </footer>
  )
}

export default Footer