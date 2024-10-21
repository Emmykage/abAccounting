import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTiktok } from 'react-icons/fa'
import { FaHouse, FaXTwitter } from 'react-icons/fa6'
import { IoMailSharp } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo/logo.png'
const Footer = () => {
  return (
    <section className=''>

    <footer className='bg-gray-900 py-20 px-4'>
        <div className='m-auto max-w-7xl grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
            <div className=''>
                <h3 className='font-medium text-3xl mb-4 text-alt'><NavLink to={"/"} ><img src={logo} alt="logo" className='w-36 bg-red-32 block m-auto md:inline-block' /> </NavLink> </h3>
                <p className=' text-sm text-gray-300 text-center md:text-left'>ABF Accounting Services provides comprehensive accounting solutions for UK businesses of all sizes. <br/> <br/> Our team of professional accountants is dedicated to helping your business grow through tailored financial strategies and seamless compliance with UK regulations.</p>

            </div>
            <div className='text-white text- md:px-0'>
                <h3 className='mb-6 text-lg text-center md:text-left'> Links</h3>
                <ul className='text-center md:text-left'>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to={"/"}> Home</NavLink> </li>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to="/services"> Services</NavLink></li>
                <li className='hover:text-gray-400 cursor-pointer'> <NavLink to={"about-us"}> About Us</NavLink></li>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to={"contact-us"}> Contact US</NavLink></li>
                </ul>
                
            </div>
            <div className='text-white text-center md:text-left'>
                <h3>Contact Us</h3>
                <p></p>
                <div className='flex gap-5 my-4 flex-col md:flex-row items-center'>
                <FaHouse/> <address className='not-italic'>18 Thricknells Close, Luton, LU3 3RP</address>

                </div>
                <div className='flex gap-5 my-4 items-center flex-col md:flex-row'>
                <FaPhoneAlt/>       <a href="tel:++447405141694">+447405141694</a>


                </div>
                <div className='flex gap-5 my-4 items-center flex-col md:flex-row'>
                <IoMailSharp/> <a href="mailto:support@abfaccounting.com"> support@abfaccounting.com</a>

                </div>
                
            </div>   

            <div className='social-link'>
              <h5 className='text-white text-center md:text-left'>
                Socials
              </h5>
              <div className='flex gap-6 items-center my-6 justify-center md:justify-start' >
              <a href='https://www.facebook.com/profile.php?id=61566396171123' target='_blank'> <FaFacebook className='text-white text-3xl' />   </a>
              <a  href='https://www.linkedin.com/company/105183786/admin/dashboard/' target='_blank'> <FaLinkedin className='text-white text-3xl' />    </a>
              <a  href='https://www.instagram.com/abfaccounting/' target='_blank'> <FaInstagram  className='text-white text-3xl' />   </a>
              <a  href='https://www.tiktok.com/@abfaccounting?lang=en' target='_blank'> <FaTiktok className='text-white text-3xl'/>   </a>
              </div>
              
              
              </div>   
        </div>


        
    </footer>
    
    <div className="text-center mt-20 px-5">
      <p className="text-sm text-gray-400">© 2024 ABF Accounting – 18 Thricknells Close, Luton, LU3 3RP. Telephone: +447405141694
      </p>

      <ul className="text-sm my-4  text-red-500 m-auto md:justify-center flex flex-col md:flex-row max-w-4xl flex-wrap gap-3 md:gap-0">

        <li className="border-r border-gray-400 px-4"> <NavLink to="/privacy-policy" class="hover:text-alt" >Privacy Policy </NavLink> </li>
        <li className="border-r border-gray-400 px-4"> <NavLink to="/cookies-policy" class="hover:text-alt" >Cookie Policy</NavLink></li>
        <li className="border-r border-gray-400 px-4"><NavLink to={"/modern-slavery"} class="hover:text-alt"> Modern Slavery Statement </NavLink></li>
        <li className=" border-gray-400 px-4"><NavLink to={"/site-map"} class="hover:text-alt">  Site Map </NavLink></li>
      </ul>
    </div>

    </section>

  )
}

export default Footer