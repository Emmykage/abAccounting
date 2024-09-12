import React from 'react'
import Nav from '../../components/Nav'
import Banner from '../../components/heroBanner/Banner'
import idea from '../../assets/images/idea.svg'
import briefcase from '../../assets/images/suitcase.svg'
import compliance from '../../assets/images/presentation.svg'
import chat from '../../assets/images/chat.svg'
import CTA from '../../components/CTA/CAT'
import Offers from '../../components/offers/Offers'
const Services = () => {
  return (
    <div className=''>
        <Nav/>
        <Banner header={"service"}/>


        <section className='py-16'>

            <h3 className='text-center text-3xl font-semibold mb-6'>Our Services</h3>
            <p className='text-center max-w-5xl m-auto'>Explore Our Accounting Services for UK Businesses
                <br/>
            Our range of services is designed to support businesses at every stage, from startups to established corporations. Whether you need basic bookkeeping or advanced tax planning, AB Accounting Services is here for you</p>
            <div className='services grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl m-auto'>
        
        <div className='shadow text-center rounded-lg p-10'>
            <img src={idea} alt="" className='w-10 m-auto' />
            <p className='my-6 font-medium title'>Business Consultancy</p>
           <p className='my-5'>Ready to take your business to the next level? Our business consultancy services offer expert financial advice on cash flow management, budgeting, and long-term financial planning for sustainable growth.</p>

        </div>

        <div className='shadow text-center rounded-lg p-10'>
            <img src={briefcase} alt="" className='w-10 m-auto' />
            <p className='my-6 font-medium title'>Strategic Tax Planning</p>
            <p className='my-5'>Let our experts help you navigate UK tax regulations while minimizing your tax liabilities. We handle everything from corporate tax returns to VAT submissions, ensuring you stay compliant and maximize savings.
            </p>

        </div>

        <div className='shadow text-center rounded-lg p-10'>
            <img src={compliance} alt="" className='w-10 m-auto' />
            <p className='my-6 font-medium title'>Bookkeeping & Payroll Services
            </p>
            <p className='my-5'>Keep your financial records organized and up to date with our professional bookkeeping services. We also offer payroll management to ensure accurate and timely employee payments, letting you focus on running your business.
            </p>

        </div>
        <div className='shadow text-center rounded-lg p-10'>
            <img src={chat} alt="" className='w-10 m-auto' />
            <p className='my-6 font-medium title'>Financial Consultancy for Business Growth

            </p>
             <p className='my-5'>Gain clarity into your business’s financial performance with our comprehensive financial reporting services. From income statements to cash flow analysis, we provide actionable insights that help you make informed decisions.
             </p>

        </div>
        
    </div>
        </section>
        <Offers/>

        
        <CTA text={"start optimizing your business finances today."} buttonText={"Get a Free Consultation"} title={"Ready to Take Control of Your Business Finances?"}/>


    </div>
  )
}

export default Services