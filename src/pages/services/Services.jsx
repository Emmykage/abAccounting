import React from 'react'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/heroBanner/Banner'
import idea from '../../assets/images/idea.svg'
import briefcase from '../../assets/images/suitcase.svg'
import compliance from '../../assets/images/presentation.svg'
import chat from '../../assets/images/chat.svg'
import CTA from '../../components/CTA/CAT'
import Offers from '../../components/offers/Offers'
import { NavLink } from 'react-router-dom'
import './service.scss'
const Services = () => {
  return (
    <div className=''>
        <Nav/>
        <Banner header={"service"}/>


        <section className='py-16 px-4 service-tab'>

            <h3 className='text-center text-3xl font-semibold mb-6'>Explore Our Accounting Services for UK Businesses</h3>
            <p className='text-center max-w-5xl m-auto'>
           
            Our range of services is designed to support businesses at every stage, from startups to established corporations. Whether you need basic bookkeeping or advanced tax planning, ABF Accounting Services is here for you</p>
            <div className='services grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl m-auto'>
                <div className='shadow relative text-center rounded-lg p-10'>
                    <img src={compliance} alt="" className='w-10 m-auto' />

                    <NavLink to="/bookkeeping-payroll">
                    
                    <p className='my-6 font-medium title'>Bookkeeping & Payroll Services
                    </p></NavLink>
                    <p className='my-5'>Keep your financial records organized and up to date with our professional bookkeeping services. We also offer payroll management to ensure accurate and timely employee payments, letting you focus on running your business.
                    </p>
                    <div className='collapsable bg-gray-950/60'>

                    <NavLink to={"/bookkeeping-payroll"} className="font-semibold text-alt text-sm md: ">   Learn More About Bookkeeping & Payroll        </NavLink>

                </div>
            </div>

            <div className='shadow relative text-center rounded-lg p-10'>
                <img src={briefcase} alt="" className='w-10 m-auto' />
                <NavLink to="/tax-planning">
                <p className='my-6 font-medium title'>Tax Planning & Compliance</p>
                </NavLink>
                <p className='my-5'>Let our experts help you navigate UK tax regulations while minimizing your tax liabilities. We handle everything from corporate tax returns to VAT submissions, ensuring you stay compliant and maximize savings.</p>
                <div className='collapsable bg-gray-950/60'>
                    <NavLink to={"/tax-planning"} className="font-semibold text-alt text-sm"> Find Out More About Tax Planning </NavLink>

                 </div>
            </div>

            <div className='shadow relative text-center rounded-lg p-10'>
            <img src={chat} alt="" className='w-10 m-auto' />

            <NavLink to="/financial-reporting">
            <p className='my-6 font-medium title'>Financial Reporting </p>

            </NavLink>

             <p className='my-5'>Gain clarity into your business’s financial performance with our comprehensive financial reporting services. From income statements to cash flow analysis, we provide actionable insights that help you make informed decisions.
             </p>
             <div className='collapsable bg-gray-950/60'>

            <NavLink to={"/financial-reporting"} className="font-semibold text-alt text-sm"> Discover Financial Reporting  </NavLink>

                </div>
            </div>
        
            <div className='shadow relative text-center rounded-lg p-10'>
                <img src={idea} alt="" className='w-10 m-auto' />
                <NavLink to={"/business-consultancy"}>
                <p className='my-6 font-medium title'>Business Consultancy</p>
                </NavLink>

                <p className='my-5'>Ready to take your business to the next level? Our business consultancy services offer expert financial advice on cash flow management, budgeting, and long-term financial planning for sustainable growth.</p>
                <div className='collapsable bg-gray-950/60'>

                <NavLink to={"/business-consultancy"} className="font-semibold text-alt text-sm">Explore Business Consultancy                </NavLink>

                </div>
            </div>

          

     
       
        
    </div>
        </section>
        {/* <Offers/> */}

        
        <CTA text={"Get in touch with our team today to schedule a free consultation."} buttonText={"Contact Us Now!"} title={"Ready to Take Control of Your Business Finances?"}/>


    </div>
  )
}

export default Services