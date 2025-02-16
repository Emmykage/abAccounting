import { useEffect, useState } from 'react'
import { TfiMenuAlt } from 'react-icons/tfi'
import { NavLink } from 'react-router-dom'
import "./nav.scss";
import logo from '../../assets/images/logo/Logo.png'
const Nav = () => {
    // const active = "text-alt"
    const [showMenu, setShowMenu] = useState(false)
    const [navBg, setNavBg] = useState("md:bg-gray-900/90")
    // const [navBg, setNavBg] = useState("md:bg-[#A64D29]/90")


    useEffect(()=> {
      const scrollNav = (event) => {
        if(window.scrollY > 120){
          console.log("first")
          setNavBg("md:bg-gray-900/60")
        }
        else{
          setNavBg("md:bg-gray-900/90")
        }
      }
      window.addEventListener("scroll", scrollNav)
    }, [])
  return (
    <nav className={`${navBg} flex items-center top-0 py-6 left-0 fixed w-full z-10 justify-between px-10 bg-red-20 text-white`}>
        <NavLink to="/" className='text-3xl text-black  font-medium md:text-alt'><img src={logo} alt="logo" className='w-44 bg-red-20 object-cover' /> </NavLink>
        <ul className={`${showMenu && "show"} font-medium text-blac md:text-white  basis-1/2`}>
            <li className='px-4 py-2 cursor-pointer'><NavLink to="/" className={({isActive}) => (isActive && "text-alt")}> Home </NavLink></li>
            <li  className='px-4 py-2 cursor-pointer'><NavLink to="/about-us" className={({isActive}) => (isActive && "text-alt")}> About Us </NavLink></li>
            <li  className='px-4 py-2 cursor-pointer'><NavLink to={'/services'} className={({isActive}) => (isActive && "text-alt")}> Service </NavLink>
            
              <ul className=''>
                <div className='bg-black'>

                <li> <NavLink to={"/bookkeeping-payroll"}>Bookkeeping & Payroll </NavLink></li>
                <li> <NavLink to={"/business-consultancy"}>Business Consultancy </NavLink></li>
                <li> <NavLink to={"/financial-reporting"}>Financial Reporting </NavLink></li>
                <li> <NavLink to={"/tax-planning"}>Tax Planning </NavLink></li>
                </div>

              </ul>
            </li>
            <li  className='px-4 py-2 cursor-pointer'><NavLink to={'/blog'} className={({isActive}) => (isActive && "text-alt")}> Blog </NavLink></li>
            <li  className='px-4 py-2 cursor-pointer'><NavLink to={'/contact-us'} className={({isActive}) => (isActive && "text-alt")}> Contact Us </NavLink></li>
        </ul>

        <span className={`${showMenu && "z-50 text-white"} md:hidden`} onClick={() => setShowMenu(prev => !prev)}>
        <TfiMenuAlt className={`${showMenu && "z-50 text-white"} text-black`}/>
        </span>
        
    </nav>
  )
}

export default Nav