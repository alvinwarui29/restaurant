
import React from 'react'

const Header = () => {
  return (
    <div className='fixed z-50 w-screen bg-slate-400 p-6
    px-16px
    '>
    {/* desktop and tablets */}
    <div
    className='hidden md:flex w-full h-full '
    ></div>

    {/* Mobile */}
    <div
    className='flex md:hidden w-full h-full '
    ></div>

    </div>
  )
}

export default Header