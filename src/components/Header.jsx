import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import Logo from '../img/img/logo.png'
import {motion} from 'framer-motion'
import Avatar from '../img/img/avatar.png'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Header = () => {
  const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
  const login= async () =>{
    const response = await signInWithPopup(firebaseAuth,provider);

  }
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
    {/* tablets and desktops  */}
       <div className='hidden md:flex w-full h-full items-center justify-between' >
          <Link to={"/"} className="flex items-center gap-2 ">
            <img src={Logo} alt="me" className='w-8 object-cover' />
            <p className='text-headingColor text-x1 font-bold'> City</p>
          </Link>
          <div className='flex items-center gap-8'>
          <ul className='flex gap-8 items-center'>
            <li className='text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
            <li className='text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
          </ul>
          <div className="relative flex items-center justify-center">
          <FaShoppingCart className='text-textColor ml-6 text-2xl cursor-pointer '/>
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
          </div>

            <div className="relative">
            <motion.img whileHover={{scale:0.7}} whileTap={{ scale:0.6 }} src={Avatar} alt="me"
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer'
             onClick={login}

             />
            </div>
          </div>
       </div>


       {/* mobile devices */}
      <div className='flex md:hidden w-full h-full'></div>
    </header>
   
  )
}

export default Header