import { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/heroBanner/Banner'

import './contact.scss'
import { useLocation } from 'react-router-dom'
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
          {/* <div className='grid md:grid-cols-3 max-w-7xl m-auto gap-8'>
            <div className='text-center shadow p-8'>
              <span className='block m-auto text-center w-max my-3'><FaHouse className='text-3xl' /></span>
              <h4 className='text-xl font-medium text-gray-600 capitalize'>office address</h4>
              <p className='text-lg'><address className='not-italic'>18 Thricknells Close, Luton, LU3 3RP</address>
              </p>
            </div>
            <div className='text-center shadow md:p-8'>
              <span className='block m-auto text-center w-max my-3'><FaPhoneAlt className='text-3xl' /></span>
              <h4 className='text-xl font-medium text-gray-600 capitalize'>contact number</h4>
              <a href="tel:+447405141694">+447405141694</a>
            </div>
            <div className='text-center shadow p-8'>
              <span className='block m-auto text-center w-max my-3'><IoMailSharp className='text-3xl'/></span>
              <h4 className='text-xl font-medium text-gray-600 capitalize'>
              email</h4>
              <p className='text-lg'><a href="mailto:support@abfaccounting.com"> support@abfaccounting.com</a></p>
            </div>
        
          </div> */}
        </div>
      </section>

      <section id='contact-form' className='get-in-touch text-white py-20 px-4'>
        <div className='max-w-4xl  m-auto my-14'>
        <h3 className='text-5xl text-center font-semibold '>Get a Quote</h3>
        <p className='md:text-2xl my-5 text-center'>We charge a simple, fixed monthly fee based on your business type.
            <br/>
Get your no-obligation accounting quote instantly.
        </p>

        </div>
        <form action="https://formspree.io/f/meojbarv"  method="post" className='max-w-7xl m-auto md:p-10 border-[5px] px-3 border-gray-300'>
          <div className='flex flex-col md:flex-row gap-6 my-6'>
            <div className='flex-1'>
              <label htmlFor="first_name"></label>
              <input type="text" placeholder='First Name' name='first_name' className='border rounded p-5 focus:border-none text-gray-900 w-full font-semibold'/>

            </div>
            
            <div className='flex-1'>
              <label htmlFor="last_name">
              <input type="text" required placeholder='Last Name' name='last_name' className='p-5 rounded focus:outline-none text-gray-900 w-full font-semibold'/>

              </label>
            </div>
          
          </div>
          
          <div className='flex-1'>
              <label htmlFor="email">
              <input type="text" required placeholder='Email' name='email' className='p-5 rounded focus:outline-none text-gray-900 w-full font-semibold'/>

              </label>
            </div>
          <div className='my-6'>
          <div className='flex-1'>
              <label htmlFor="phone_no">
              <input type="text" required placeholder='Phone number' name='Phone Number' className='p-5 rounded focus:outline-none text-gray-900 w-full font-semibold'/>

              </label>
            </div>
          </div>

          <div className='my-6'>
            <label htmlFor="business_name"></label>
            <input type="text" required placeholder='Business Name' name='Business Name' className='p-5 rounded focus:outline-none text-gray-900 w-full font-semibold'/>


          </div>

          <div>
            <label htmlFor="type">What Type of Business</label>
            <select required className='p-5 rounded focus:outline-none text-gray-900 w-full font-semibold' name='business_type' id='business_type'>
            <option value="Sole Trader">Sole Trader</option>
            <option value="Partnershi">Partnership</option>
            <option value="Ltd Company">Ltd Company </option>
            <option value="LLP">LLP</option>
            </select>
          </div>
          <div className='flex flex-col md:flex-row gap-5 my-6'>

        
          <div className='flex-1'>
            <label htmlFor="financial_year">In which month does your financial years starts</label>
            <select required name='financial_year' id='financial_year' className='p-5 rounded focus:outline-none text-gray-900 w-full font-semibold'>
            <option value="Not sure">I'm not sure </option>
            <option value="January">January</option>
            <option value="February">February </option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
            </select>
          </div>

          <div className='flex-1'>
            <label htmlFor="VAT">Are you VAT Registered</label>
            <select required className='p-5 rounded focus:outline-none text-gray-900 w-full font-semibold' name='VAT' id='VAT'>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        
            </select>
          </div>
          </div>

          <div className='flex gap-5 my-6'>


          <div className='flex-1'>
            <label htmlFor="company_size">Whats Your Company SIze?</label>
            <select  required className='p-5 rounded focus:outline-none text-gray-900 w-full font-semibold' name='company_size' id='company_size'>
            <option value="1_3">1 - 3</option>
            <option value="3_6">3 - 6 </option>
            <option value="6_9">6 - 9 </option>
            <option value="9_15">9 - 15</option>
            <option value="15_20">15 - 20</option>
            <option value="3_6">20 - 25 </option>
            <option value="25_30">25 - 30 </option>
            <option value="30_35">30 - 35 </option>
            <option value="35_40">35 - 40 </option>
            <option value="40_45">40 - 45 </option>
            <option value="45_50">45 - 50 </option>
            <option value="50+">50+ </option>
        
            </select>
          </div>
          <div className='flex-1'>
            <label htmlFor="pyroll?">Would you like us to care for your payroll?</label>
            <select required className='p-5 rounded focus:outline-none text-gray-900 w-full font-semibold' name="payroll?" id="payroll?">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="maybe later">Maybe Later</option>
            </select>
          </div>
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