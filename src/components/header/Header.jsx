import React from 'react'
import Logo from '../../img/img/logo.png'
import {FaShoppingCart} from 'react-icons/fa'
const Header = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
    {/* tablets and desktops  */}
       <div className='hidden md:flex w-full h-full' >
          <div className="flex items-center gap-2">
            <img src={Logo} alt="me" className='w-8 object-cover' />
            <p className='text-headingColor text-x1 font-bold'> City</p>
          </div>
          <ul className='flex gap-8 ml-auto items-center'>
            <li className='text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
            <li className='text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
          </ul>
          <div className="relative flex items-center justify-center">
          <FaShoppingCart className='text-textColor ml-6 text-2xl cursor-pointer '/>
          <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
          </div>
       </div>


       {/* mobile devices */}
      <div className='flex md:hidden w-full h-full'></div>
    </header>
   
  )
}

export default Header