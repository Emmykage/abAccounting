import { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import './home.scss'
import Services from './services/Services'
import Slider from '../../components/heroBanner/Slider'
import WWAImage from '../../assets/images/about/images-1-8.jpg'
import experts from '../../assets/images/home/account-experts.jpg'
import CTA from '../../components/CTA/CAT'
import { useLocation } from 'react-router-dom'
import icaew from '../../assets/images/logo/icaew.jpg'
import central from '../../assets/images/logo/central.jpg'
import books from '../../assets/images/logo/quick-books.png'
const Home = () => {
    const { pathname } = useLocation();

    // useEffect(() => {
    //   window.scrollTo(0, 0);
    // }, [pathname]);
  
  return (
    <div className='home'>
        <Nav/>
        <Slider/>

        <section className='py-20 px-4'>
            <div className='m-auto max-w-3xl text-center'>
                <h1 className='text-2xl md:text-3xl px-3 py-2 md:w-max m-auto font-medium border-alt border-[4px]'>Welcome to ABF Accounting Services </h1>
                <p className='text-black mt-4'>ABF Accounting Services provides comprehensive accounting solutions for UK businesses of all sizes. Our team of professional accountants is dedicated to helping your business grow through tailored financial strategies and seamless compliance with UK regulations.                </p>
            </div>

            <Services/>

            


        </section>
        <section className='who-we-are py-24 px-4'>
            <div className='grid gap-10 rounded shadow items-center bg-white md:grid-cols-2 max-w-7xl m-auto'>
                <div className='wwa-image p-4'>
                    <img src={WWAImage} alt="" />


                </div>

                <div className='wwa-text p-3'>
                    <h3 className='font-semibold text-2xl uppercase mb-10'>Your Trusted Accountants in the UK</h3>
                    <p>
                    At ABF Accounting Services, we pride ourselves on delivering accounting services for businesses in the UK that are tailored to each client's unique needs. <br/> <br/>  With years of experience supporting industries ranging from retail to tech startups, we ensure your business stays compliant and financially sound.

                    </p>

                </div>
            </div>
        </section>

        <section>
            <div className='grid gap-6 md:grid-cols-2 p-5 max-w-7xl m-auto '>
            <div>
                <img src={experts} alt="accounting expert" className='w-full rounded-xl'/>
            </div>
            <div> 
                <h3 className='text-4xl font-semibold'>Grow Your Business with Expert Accounting
                </h3>
                <p className='my-6'>We know that managing finances can be challenging, but with ABF Accounting Services, you're in safe hands. Our services are designed to reduce your administrative burden, improve financial clarity, and support your business's growth</p>
            </div>
            </div>
        </section>

        {/* <Adverts/> */}

        <section className='px-4 py-10 shadow my-0'>
              <div className='h-60 m-auto max-w-7xl'>
                    <div className='flex w-full flex-wrap h-full items-center justify-between'>
                    <img src={icaew} className='w-44 h-36 object-contain' alt="" />
                    <img src={central} className='w-44 h-32 object-contain' alt="" />
                    <img src={books} className='w-44 h-32 object-contain' alt="" />
                    </div>
                    
                </div>
        </section>

        <CTA buttonText={"Discover Our Services"} link="/services" title={"Get Stared Today"} text={"Contact us for a free consultation and see how we can help your business thrive."}/>
    </div>

  )
}

export default Home