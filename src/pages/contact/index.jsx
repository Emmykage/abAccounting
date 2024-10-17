import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/heroBanner/Banner'
import { FaHouse } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMailSharp } from 'react-icons/io5'
import './contact.scss'
import { NavLink, useLocation } from 'react-router-dom'
const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Nav/>
      <Banner header="contact"/>

      <section className='py-10 px-5'>
        <div>
          {/* <h3 className='py-5 px-4 border-[3px] m-auto border-alt w-max text-3xl font-semibold'>Contact Us</h3> */}
          <p className='text-center font-medium text-gray-600 max-w-4xl m-auto my-6'>Whether you need help with tax planning, payroll, or business consultancy, we’re here to support your accounting needs. Our team of experts is available to provide personalized advice and support for your business</p>
          <div className='grid md:grid-cols-3 max-w-7xl m-auto gap-8'>
            <div className='text-center shadow p-8'>
              <span className='block m-auto text-center w-max my-3'><FaHouse className='text-3xl' /></span>
              <h4 className='text-xl font-medium text-gray-600 capitalize'>office address</h4>
              <p className='text-lg'><address className='not-italic'>18 Thricknells Close, Luton, LU3 3RP</address>
              </p>
            </div>
            <div className='text-center shadow md:p-8'>
              <span className='block m-auto text-center w-max my-3'><FaPhoneAlt className='text-3xl' /></span>
              <h4 className='text-xl font-medium text-gray-600 capitalize'>contact number</h4>
              <a href="tel:++4407405141694">+4407405141694</a>
            </div>
            <div className='text-center shadow p-8'>
              <span className='block m-auto text-center w-max my-3'><IoMailSharp className='text-3xl'/></span>
              <h4 className='text-xl font-medium text-gray-600 capitalize'>
              email</h4>
              <p className='text-lg'><a href="mailto:support@abfaccounting.com"> support@abfaccounting.com</a></p>
            </div>
        
          </div>
        </div>
      </section>

      <section className='get-in-touch text-white py-20 px-4'>
        <div className='max-w-4xl  m-auto my-14'>
        <h3 className='text-5xl text-center font-semibold '>Get In Touch</h3>
        <p className='md:text-2xl my-5 text-center'>Contact Us Today to schedule a free consultation and discover how ABF Accounting Services can help your business thrive.
        </p>

        </div>
        <form action="https://formspree.io/f/meojbarv"  method="post" className='max-w-7xl m-auto md:p-10 border-[5px] px-3 border-gray-300'>
          <div className='flex flex-col md:flex-row gap-6 my-6'>
            <div className='flex-1'>
              <label htmlFor="name"></label>
              <input type="text" placeholder='Name' name='name' className='border p-5 focus:border-none text-gray-900 w-full font-semibold'/>

            </div>
            <div className='flex-1'>
              <label htmlFor="email">
              <input type="text"  placeholder='Email' name='email' className='p-5 focus:outline-none text-gray-900 w-full font-semibold'/>

              </label>
            </div>
          </div>
          <div>
            <textarea name="message" id="message" placeholder='Message' className='p-5 focus:outline-none h-40 rounded-lg text-gray-900 w-full font-semibold'></textarea>
          </div>

          <div>
            <button className='py-4 px-14 bg-alt my-5 rounded w-full md:w-max'>Submit</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Contact