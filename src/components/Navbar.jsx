"use client"
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { Oswald } from "next/font/google";


const oswald = Oswald({
    weight: ['400','500','600','700'],
    subsets: ['latin'],
    display: 'swap',
  })

const Navbar = () => {
    
  const [isMenu, setIsMenu] = useState(false)

    

  const toggleMenu = () => {
    setIsMenu(true)
  }
    return (
    <header className="bg-darkkColor dark:bg-darkkColor fixed top-0 left-0 w-full z-50">
        <nav className="container relative h-24 flex justify-between items-center">
            <div className="ms-4 md:text-7xl">
                <Link href='/' className={`uppercase text-2xl ${oswald.className}`}>bur<span className="text-secondaryColor">ger</span></Link>
            </div>
            <div className="hidden md:block md:static md:w-auto md:py-0 md:border-none md:ml-auto">
                <ul className="flex flex-col gap-5 text-center md:flex-row">
                    <li className="text-white hover:text-secondaryColor ease-in duration-200">
                        <Link href='/' onClick={()=> setIsMenu(false)}>Home</Link>
                    </li>
                    <li className="text-white hover:text-secondaryColor ease-in duration-200">
                        <Link href='#about' onClick={()=> setIsMenu(false)}>About Us</Link>
                    </li>
                    <li className="text-white hover:text-secondaryColor ease-in duration-200">
                        <Link href='#menu' onClick={()=> setIsMenu(false)}>Menu</Link>
                    </li>
                    <li className="text-white hover:text-secondaryColor ease-in duration-200">
                        <Link href='#review' onClick={()=> setIsMenu(false)}>Review</Link>
                    </li>
                    <li className="text-white hover:text-secondaryColor ease-in duration-200">
                        <Link href='#contact' onClick={()=> setIsMenu(false)}>Contact</Link>
                    </li>
                    <li className="text-white hover:text-secondaryColor ease-in duration-200">
                        <Link href='/login' onClick={()=> setIsMenu(false)}>Login</Link>
                    </li>
                <div className="me-4 text-white text-2xl cursor-pointer">
                   
                </div>
                </ul>
                
            </div>
           {
            isMenu && (
                <div className="md:hidden block absolute top-0 left-0 w-full py-14 bg-darkkColor border-b border-yellow-500">
                <ul className="flex flex-col gap-5 text-center">
                    <li className="text-white hover:text-secondaryColor ease-in duration-200">
                        <Link href='/' onClick={()=> setIsMenu(false)}>Home</Link>
                    </li>
                    <li className="text-white hover:text-secondaryColor ease-in duration-200">
                        <Link href='#about' onClick={()=> setIsMenu(false)}>About Us</Link>
                    </li>
                    <li className="text-white hover:text-secondaryColor ease-in duration-200">
                        <Link href='#menu' onClick={()=> setIsMenu(false)}>Menu</Link>
                    </li>
                    <li className="text-white hover:text-secondaryColor ease-in duration-200">
                        <Link href='#review' onClick={()=> setIsMenu(false)}>Review</Link>
                    </li>
                    <li className="text-white hover:text-secondaryColor ease-in duration-200">
                        <Link href='#contact' onClick={()=> setIsMenu(false)}>Contact</Link>
                    </li>
                    <li className="text-white hover:text-secondaryColor ease-in duration-200">
                        <Link href='/login' onClick={()=> setIsMenu(false)}>Login</Link>
                    </li>
                </ul>
                <div className="absolute top-[0.7rem] right-0 text-white text-2xl cursor-pointer">
                    <AiOutlineClose onClick={()=> setIsMenu(false)}/>
                </div>
            </div>
            )
           }
            <div className="md:hidden flex items-center gap-5 text-white me-4">
                <div className="md:hidden cursor-pointer text-xl" onClick={toggleMenu}>
                    <HiMenuAlt1 />
                </div>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;
