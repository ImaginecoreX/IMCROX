"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BorderBeam } from '../magicui/border-beam'
import { ModeToggle } from '../mode-toggle'
import { NavDrawer } from './nav-drawer'


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Company",
    "Products",
    "Contact"
  ]


  return (
    <div className='fixed w-full text-[14px] font-medium flex flex-col items-center '>

      {/* navigations */}
      <nav className='flex items-center justify-between w-full bg-[#ffffff40] dark:bg-[#0000002f] backdrop-blur-sm  px-[10px] py-2 border-b dark:border-[#ffffff1f] shadow-sm relative'>

        {/* left */}
        <div className='w-auto flex gap-6 items-center'>
          {/* logo */}
          <div className='p-2 bg-black rounded-full dark:border dark:border-[#ffffff1f]'>
            <div className='relative w-[24px] h-[24px] '>
              <Image src={'/icon.svg'} alt='ImaginecoreX' fill className='object-contain' />
            </div>
          </div>

          <div className='flex items-center gap-6 mobile:hidden'>
            <Link href={'/'} className='opacity-80 hover:opacity-100'>Home</Link>
            <Link href={'/company'} className='opacity-80 hover:opacity-100'>Company</Link>
            <Link href={'/products'} className='opacity-80 hover:opacity-100'>Products</Link>

          </div>


        </div>

        {/* Right */}
        <div className='flex gap-6 items-center'>
          <ModeToggle />
          <Link href={'/contact'} className='px-3 py-2 mobile:hidden bg-black text-white dark:bg-white dark:text-black rounded-[6px] hover:scale-95 transform transition-transform duration-200'>Contact</Link>
          <div className='hidden mobile:flex'>
            <NavDrawer />
          </div>

        </div>
      </nav>

    </div>
  )
}

export default Navbar