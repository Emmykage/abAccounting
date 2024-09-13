import React from 'react'
import Nav from '../../components/nav/Nav'
import './home.scss'
import Services from './services/Services'
import Slider from '../../components/heroBanner/Slider'
import WWAImage from '../../assets/images/about/images-1-8.jpg'
import experts from '../../assets/images/home/account-experts.jpg'
import Capabilities from '../../components/capabilities/Capabilities'

const Home = () => {
  return (
    <div className='home'>
        <Nav/>
        <Slider/>

        <section className='py-20 px-4'>
            <div className='m-auto max-w-3xl text-center'>
                <h3 className='text-2xl md:text-6xl px-3 py-2 w-max m-auto font-normal border-alt border-[4px]'>Our <span className='font-semibold'>Services</span></h3>
                <p className='text-black mt-4'>AB Accounting Services provides comprehensive accounting solutions for UK businesses of all sizes. Our team of professional accountants is dedicated to helping your business grow through tailored financial strategies and seamless compliance with UK regulations.

                </p>
            </div>

            <Services/>

            


        </section>
        <section className='who-we-are py-24 px-3'>
            <div className='grid gap-10 rounded shadow items-center bg-white md:grid-cols-2 max-w-7xl m-auto'>
                <div className='wwa-image p-4'>
                    <img src={WWAImage} alt="" />


                </div>

                <div className='wwa-text '>
                    <h3 className='font-semibold text-2xl uppercase mb-10'>Your Trusted Accountants in the UK</h3>
                    <p>
                    At AB Accounting Services, we pride ourselves on delivering accounting services for businesses in the UK that are tailored to each client's unique needs. <br/> <br/>  With years of experience supporting industries ranging from retail to tech startups, we ensure your business stays compliant and financially sound.

                    </p>

                </div>
            </div>
        </section>

        <section className='py-20 px-5'>
            <div className='m-auto max-w-3xl text-center'>
                    <h3 className='text-2xl md:text-6xl px-3 py-2 w-max m-auto font-normal border-alt border-[4px]'>Our <span className='font-semibold'>Capabilities</span></h3>
                    <p className='text-black mt-4'>AB Accounting Services provides comprehensive accounting solutions for UK businesses of all sizes. Our team of professional accountants is dedicated to helping your business grow through tailored financial strategies and seamless compliance with UK regulations.

                    </p>
            </div>

           
           <Capabilities/>

        </section>
        <section>
            <div className='grid gap-6 md:grid-cols-2 p-5 max-w-7xl m-auto '>
            <div>
                <img src={experts} alt="" className='w-full rounded-xl'/>
            </div>
            <div> 
                <h3 className='text-4xl font-semibold'>Grow Your Business with Expert Accounting
                </h3>
                <p className='my-6'>We know that managing finances can be challenging, but with AB Accounting Services, you're in safe hands. Our services are designed to reduce your administrative burden, improve financial clarity, and support your business's growth</p>
            </div>
            </div>
        </section>

    </div>
  )
}

export default Home