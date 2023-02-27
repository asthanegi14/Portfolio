import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className='flex justify-between items-center w-full
         h-20 text-white px-4
          bg-pink-900 fixed'>
            <div>
                <h1 className='text-2xl ml-2 text-pink-200'>E-Porthfolio</h1>
            </div>

            <ul className='hidden md:flex'>
                <Link to="home" smooth duration={500} className='px-4 cursor-pointer capitalize font-medium text-pink-200 hover:scale-105 duration-200'>Home</Link>
                <Link to="skills" smooth duration={500} className='px-4 cursor-pointer capitalize font-medium text-pink-200 hover:scale-105 duration-200'>Skills</Link>
                <Link to="projects" smooth duration={500} className='px-4 cursor-pointer capitalize font-medium text-pink-200 hover:scale-105 duration-200'>Projects</Link>
                <Link to="clg" smooth duration={500} className='px-4 cursor-pointer capitalize font-medium text-pink-200 hover:scale-105 duration-200'>College Work</Link>
                <Link to="contact" smooth duration={500} className='px-4 cursor-pointer capitalize font-medium text-pink-200 hover:scale-105 duration-200'>Reach Out</Link>
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-6 z-10 text-pink-200 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

            </div>

            {nav && (<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-pink-900 via-pink-900 to-pink-500 text-pink-200'>
                <Link onClick={() => setNav(!nav)} to="home" smooth duration={500} className='px-4 cursor-pointer capitalize py-3 text-2xl'>Home</Link>
                <Link onClick={() => setNav(!nav)} to="skills" smooth duration={500} className='px-4 cursor-pointer capitalize py-3 text-2xl'>Skills</Link>
                <Link onClick={() => setNav(!nav)} to="projects" smooth duration={500} className='px-4 cursor-pointer capitalize py-3 text-2xl'>Projects</Link>
                <Link onClick={() => setNav(!nav)} to="clg" smooth duration={500} className='px-4 cursor-pointer capitalize py-3 text-2xl'>College Work</Link>
                <Link onClick={() => setNav(!nav)} to="contact" smooth duration={500} className='px-4 cursor-pointer capitalize py-3 text-2xl'>Reach Out</Link>
            </ul>)}

        </div>
    )
}

export default Navbar