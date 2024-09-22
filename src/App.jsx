import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/footer/Footer'
import About from './pages/about'
import Services from './pages/services/Services'
import Contact from './pages/contact'
import Blog from './pages/blog'
import BookApointment from './pages/book-appointment'
import BookkeepingPayroll from './pages/services/bookkeeping'
import BusinessConsultancy from './pages/services/businessConsultancy'
import FinancialReporting from './pages/services/financialReporting'
import TaxPlanning from './pages/services/taxplanning'
import BlogPost from './pages/blog/blogPost/BlogPost'
import CookiesPolicy from './pages/cookies-policy'
import PrivacyPolicy from './pages/privacy-policy'
import ModernSlavery from './pages/modern-slavery'
import SiteMap from './pages/site-map/SiteMap'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/blog-post/:id" element={<BlogPost/>}/>
          
          <Route path='/book-appointment' element={<BookApointment/>}/>
          <Route path='/bookkeeping-payroll' element={<BookkeepingPayroll/>}/>
          <Route path='/business-consultancy' element={<BusinessConsultancy/>}/>
          <Route path='/financial-reporting' element={<FinancialReporting/>}/>
          <Route path='/tax-planning' element={<TaxPlanning/>}/>
          <Route path='/cookies-policy' element={<CookiesPolicy/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/modern-slavery' element={<ModernSlavery/>}/>
          <Route path='/site-map' element={<SiteMap/>}/>
        </Routes>

        <Footer/>
                        
      </div>
     
    </>
  )
}

export default App
